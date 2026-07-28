import React from 'react';
import { CalculationResult, PatientData } from '../types';
import { X, Printer, Copy, Check, FileText } from 'lucide-react';

interface ReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  result: CalculationResult;
  patientData: PatientData;
}

export const ReportModal: React.FC<ReportModalProps> = ({
  isOpen,
  onClose,
  result,
  patientData
}) => {
  const [copied, setCopied] = React.useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const reportText = `
===================================================================
ЗАКЛЮЧЕНИЕ: ЭТИОЛОГИЧЕСКИЙ ПОДТИП ИШЕМИЧЕСКОГО ИНСУЛЬТА (TOAST 2.0 & OCSP)
Дата расчета: ${result.calcDate}
Пациент: ${patientData.patientName || 'Не указано'} | Возраст: ${patientData.age} лет | Пол: ${patientData.gender === 'male' ? 'Мужской' : 'Женский'}
===================================================================

1. ОСНОВНОЙ ПРЕДПОЛАГАЕМЫЙ ПОДТИП (по TOAST 2.0):
   • Подтип: ${result.dominantSubtype.nameRu} (${result.dominantSubtype.code})
   • Доверие: ${result.confidenceLevelRu}
   • Описание: ${result.dominantSubtype.description}

2. РАСПРЕДЕЛЕНИЕ ВЕРОЯТНОСТЕЙ ПОПОДТИПНО:
${result.toastSubtypes.map((s) => `   - ${s.key.toUpperCase()}: ${s.score} баллов (${s.percentage}%)`).join('\n')}

3. ТОПОГРАФИЧЕСКАЯ КЛАССИФИКАЦИЯ OCSP:
   • Категория: ${result.ocspResult.key} (${result.ocspResult.fullNameRu})
   • Бассейн: ${result.ocspResult.territoryRu}
   • Характеристика: ${result.ocspResult.description}

4. ВЕДУЩИЕ КЛИНИКО-ДИАГНОСТИЧЕСКИЕ ПРЕДИКТОРЫ:
${result.contributingPredictors.map((p) => `   • ${p.predictorName}: ${p.valueDescription} (+${p.pointsAdded} б.)`).join('\n')}

5. РЕКОМЕНДАЦИИ ПО ВТОРИЧНОЙ ПРОФИЛАКТИКЕ:
   • Антитромботическая терапия: ${result.recommendations.antithrombotic}
   • Статинотерапия: ${result.recommendations.lipidTherapy}
   • Контроль АД: ${result.recommendations.bpControl}
   • План дообследования:
${result.recommendations.furtherWorkup.map((w) => `     - ${w}`).join('\n')}
${result.recommendations.surgicalOrInterventional ? `   • Хирургическое лечение: ${result.recommendations.surgicalOrInterventional}` : ''}

===================================================================
Расчет выполнен с помощью Клинического калькулятора инсульта v2.0
===================================================================
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 rounded-t-2xl sticky top-0 z-10 print:hidden">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-blue-600 text-white rounded-xl">
              <FileText className="w-5 h-5" />
            </div>
            <h2 className="text-base font-bold text-slate-900 dark:text-white">
              Медицинское заключение (протокол)
            </h2>
          </div>

          <div className="flex items-center space-x-2">
            <button
              id="copy-report-text-btn"
              type="button"
              onClick={handleCopy}
              className="px-3 py-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200 bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition flex items-center space-x-1.5"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              <span>{copied ? 'Скопировано!' : 'Копировать текст'}</span>
            </button>

            <button
              id="print-report-btn"
              type="button"
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm transition flex items-center space-x-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Печать</span>
            </button>

            <button
              id="close-report-modal-btn"
              type="button"
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Paper Canvas */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 font-sans text-slate-900 dark:text-slate-100 print:text-black print:bg-white text-xs sm:text-sm">
          
          <div className="text-center border-b border-slate-200 pb-4">
            <h1 className="text-lg font-bold uppercase tracking-wide">
              Медицинское заключение
            </h1>
            <p className="text-xs text-slate-600 dark:text-slate-400 font-medium">
              Оценка этиологического подтипа ишемического инсульта (TOAST 2.0 & OCSP)
            </p>
            <div className="text-[11px] text-slate-500 mt-1">
              Дата составления протокола: {result.calcDate}
            </div>
          </div>

          {/* Patient Header */}
          <div className="grid grid-cols-2 gap-4 bg-slate-50 dark:bg-slate-800/40 p-3 rounded-lg border border-slate-200 dark:border-slate-700">
            <div>
              <strong>Пациент:</strong> {patientData.patientName || 'Не указан'}
            </div>
            <div>
              <strong>Возраст / Пол:</strong> {patientData.age} лет, {patientData.gender === 'male' ? 'Мужской' : 'Женский'}
            </div>
          </div>

          {/* Main Subtype */}
          <div className="space-y-1">
            <div className="font-bold text-xs uppercase tracking-wider text-blue-700 dark:text-blue-400">
              1. Ведущий этиологический подтип (TOAST 2.0):
            </div>
            <div className="text-base font-extrabold text-slate-900 dark:text-white">
              {result.dominantSubtype.nameRu} ({result.dominantSubtype.code})
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              степень уверенности: {result.confidenceLevelRu}
            </div>
          </div>

          {/* OCSP */}
          <div className="space-y-1">
            <div className="font-bold text-xs uppercase tracking-wider text-purple-700 dark:text-purple-400">
              2. Топографическая подгруппа (OCSP):
            </div>
            <div className="font-semibold text-slate-900 dark:text-white">
              {result.ocspResult.key} — {result.ocspResult.fullNameRu}
            </div>
            <div className="text-xs text-slate-600 dark:text-slate-300">
              Бассейн: {result.ocspResult.territoryRu}
            </div>
          </div>

          {/* Predictor Matrix */}
          <div className="space-y-2">
            <div className="font-bold text-xs uppercase tracking-wider text-emerald-700 dark:text-emerald-400">
              3. Учтенные клинико-диагностические параметры:
            </div>
            <ul className="list-disc list-inside space-y-1 text-xs text-slate-700 dark:text-slate-300">
              {result.contributingPredictors.map((p, i) => (
                <li key={i}>
                  <strong>{p.predictorName}:</strong> {p.valueDescription} (+{p.pointsAdded} б.)
                </li>
              ))}
            </ul>
          </div>

          {/* Recommendations */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-slate-700">
            <div className="font-bold text-xs uppercase tracking-wider text-slate-800 dark:text-slate-200">
              4. Рекомендации по терапии и профилактике:
            </div>
            <div className="space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
              <p><strong>• Антитромботическая терапия:</strong> {result.recommendations.antithrombotic}</p>
              <p><strong>• Гиполипидемическая терапия:</strong> {result.recommendations.lipidTherapy}</p>
              <p><strong>• Целевое АД:</strong> {result.recommendations.bpControl}</p>
              <p><strong>• План дообследования:</strong> {result.recommendations.furtherWorkup.join('; ')}</p>
            </div>
          </div>

          <div className="pt-6 border-t border-slate-200 text-[11px] text-slate-500 flex justify-between">
            <span>Врач-невролог: ______________________</span>
            <span>Подпись: ______________</span>
          </div>

        </div>

      </div>
    </div>
  );
};
