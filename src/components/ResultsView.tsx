import React from 'react';
import { CalculationResult, PatientData } from '../types';
import {
  Award,
  BarChart3,
  Brain,
  CheckCircle2,
  FileSpreadsheet,
  FileText,
  HeartPulse,
  Info,
  Printer,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  BookmarkPlus
} from 'lucide-react';

interface ResultsViewProps {
  result: CalculationResult;
  patientData: PatientData;
  onEditInputs: () => void;
  onOpenReportModal: () => void;
  onSaveCase: () => void;
}

export const ResultsView: React.FC<ResultsViewProps> = ({
  result,
  patientData,
  onEditInputs,
  onOpenReportModal,
  onSaveCase
}) => {
  const {
    dominantSubtype,
    confidenceLevelRu,
    confidenceDescriptionRu,
    toastSubtypes,
    ocspResult,
    contributingPredictors,
    recommendations
  } = result;

  return (
    <div className="space-y-6">
      
      {/* Dominant Subtype Highlight Box */}
      <div className={`p-5 sm:p-6 rounded-2xl border ${dominantSubtype.bgColor} ${dominantSubtype.borderColor} shadow-xs`}>
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          
          <div className="space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 text-xs font-bold uppercase tracking-wider rounded-md bg-white/80 dark:bg-slate-900/80 shadow-xs border border-slate-200 dark:border-slate-700">
                {dominantSubtype.code}
              </span>
              <span className="px-2.5 py-1 text-xs font-semibold rounded-md bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-300">
                {confidenceLevelRu}
              </span>
            </div>

            <h2 className={`text-2xl sm:text-3xl font-extrabold ${dominantSubtype.color}`}>
              {dominantSubtype.nameRu}
            </h2>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed">
              {dominantSubtype.description}
            </p>

            <p className="text-xs italic text-slate-500 dark:text-slate-400">
              {confidenceDescriptionRu}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap sm:flex-nowrap items-center gap-2.5 self-start lg:self-center shrink-0">
            <button
              id="save-case-btn"
              type="button"
              onClick={onSaveCase}
              className="px-3.5 py-2 text-xs font-semibold text-purple-700 dark:text-purple-300 bg-white dark:bg-slate-900 border border-purple-200 dark:border-purple-800 rounded-xl hover:bg-purple-50 dark:hover:bg-purple-950/60 shadow-xs transition flex items-center space-x-1.5"
            >
              <BookmarkPlus className="w-4 h-4 text-purple-600" />
              <span>Сохранить карту</span>
            </button>

            <button
              id="open-report-btn"
              type="button"
              onClick={onOpenReportModal}
              className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-xl shadow-md transition flex items-center space-x-2"
            >
              <Printer className="w-4 h-4" />
              <span>Печать / Экспорт отчета</span>
            </button>
          </div>

        </div>
      </div>

      {/* Subtype Probability Distribution Bars */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 dark:border-slate-700/80 pb-3">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <BarChart3 className="w-4 h-4 text-blue-600" />
            <span>Вероятностный спектр подтипов по шкале TOAST 2.0</span>
          </h3>
          <span className="text-xs text-slate-500">Автоматический счет баллов предикторов</span>
        </div>

        <div className="space-y-3.5">
          {toastSubtypes.map((sub) => {
            const isTop = sub.key === dominantSubtype.key;
            return (
              <div key={sub.key} className="space-y-1">
                <div className="flex items-center justify-between text-xs font-semibold">
                  <span className={`flex items-center gap-2 ${isTop ? 'text-slate-900 dark:text-white font-bold' : 'text-slate-600 dark:text-slate-400'}`}>
                    <span>{sub.details.length > 0 ? '•' : '◦'} {sub.details[0]?.valueDescription ? `${sub.key.toUpperCase()} - ` : ''}{sub.key === 'atherothrombotic' ? 'Атеротромботический' : sub.key === 'cardioembolic' ? 'Кардиоэмболический' : sub.key === 'lacunar' ? 'Лакунарный' : sub.key === 'other' ? 'Другой этиологии' : 'Неопределенной этиологии'}</span>
                    {isTop && (
                      <span className="px-1.5 py-0.2 text-[10px] bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                        Основной
                      </span>
                    )}
                  </span>
                  <span className="font-mono text-slate-700 dark:text-slate-300">
                    {sub.score} баллов ({sub.percentage}%)
                  </span>
                </div>

                <div className="w-full bg-slate-100 dark:bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className={`h-3 rounded-full transition-all duration-500 ${
                      sub.key === 'atherothrombotic'
                        ? 'bg-amber-500'
                        : sub.key === 'cardioembolic'
                        ? 'bg-rose-500'
                        : sub.key === 'lacunar'
                        ? 'bg-blue-500'
                        : sub.key === 'other'
                        ? 'bg-purple-500'
                        : 'bg-slate-400'
                    }`}
                    style={{ width: `${Math.max(5, sub.percentage)}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* OCSP Classification Box */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <Brain className="w-4 h-4 text-purple-600" />
            <span>Топографическая классификация OCSP (Oxfordshire Community Stroke Project)</span>
          </h3>
          <span className={`px-2.5 py-1 text-xs font-bold rounded-lg border ${ocspResult.badgeBg}`}>
            {ocspResult.key}
          </span>
        </div>

        <div className="p-4 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1.5">
          <div className="text-sm font-bold text-slate-900 dark:text-white">
            {ocspResult.fullNameRu}
          </div>
          <div className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
            {ocspResult.description}
          </div>
          <div className="text-xs font-medium text-slate-500 dark:text-slate-400 pt-1">
            <strong>Анатомический бассейн:</strong> {ocspResult.territoryRu}
          </div>
        </div>
      </div>

      {/* Predictor Matrix Table */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <FileSpreadsheet className="w-4 h-4 text-emerald-600" />
          <span>Матрица учтенных клинико-диагностических предикторов</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 dark:bg-slate-700/60 text-slate-700 dark:text-slate-300 font-semibold border-b border-slate-200 dark:border-slate-700">
                <th className="p-2.5">Предиктор / Фактор риска</th>
                <th className="p-2.5">Параметр у пациента</th>
                <th className="p-2.5 text-center">Баллы</th>
                <th className="p-2.5">Подтипы-реципиенты</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-slate-800 dark:text-slate-200">
              {contributingPredictors.map((item, idx) => (
                <tr key={idx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50 transition">
                  <td className="p-2.5 font-medium">{item.predictorName}</td>
                  <td className="p-2.5 text-slate-600 dark:text-slate-300">{item.valueDescription}</td>
                  <td className="p-2.5 text-center font-bold text-blue-600 dark:text-blue-400">
                    +{item.pointsAdded}
                  </td>
                  <td className="p-2.5">
                    <div className="flex flex-wrap gap-1">
                      {item.subtypesAffected.map((st) => (
                        <span
                          key={st}
                          className="px-1.5 py-0.5 text-[10px] font-medium rounded bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200"
                        >
                          {st === 'atherothrombotic'
                            ? 'LAA'
                            : st === 'cardioembolic'
                            ? 'CE'
                            : st === 'lacunar'
                            ? 'SVO'
                            : st === 'other'
                            ? 'ODE'
                            : 'UDE'}
                        </span>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Clinical Recommendations */}
      <div className="bg-white dark:bg-slate-800/90 p-5 rounded-2xl border border-slate-200 dark:border-slate-700 shadow-xs space-y-4">
        <h3 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 border-b border-slate-100 dark:border-slate-700/80 pb-3">
          <Stethoscope className="w-4 h-4 text-blue-600" />
          <span>Рекомендации по вторичной профилактике и дообследованию</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="p-3.5 bg-blue-50/60 dark:bg-blue-950/20 rounded-xl border border-blue-200 dark:border-blue-900/60 space-y-1">
            <div className="text-xs font-bold text-blue-950 dark:text-blue-300 uppercase tracking-wider">
              1. Антитромботическая терапия
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {recommendations.antithrombotic}
            </p>
          </div>

          <div className="p-3.5 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/60 space-y-1">
            <div className="text-xs font-bold text-amber-950 dark:text-amber-300 uppercase tracking-wider">
              2. Гиполипидемическая терапия
            </div>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {recommendations.lipidTherapy}
            </p>
          </div>

          <div className="p-3.5 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 space-y-1">
            <div className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider">
              3. Контроль артериального давления
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
              {recommendations.bpControl}
            </p>
          </div>

          <div className="p-3.5 bg-purple-50/60 dark:bg-purple-950/20 rounded-xl border border-purple-200 dark:border-purple-900/60 space-y-1">
            <div className="text-xs font-bold text-purple-950 dark:text-purple-300 uppercase tracking-wider">
              4. План диагностического дообследования
            </div>
            <ul className="text-xs text-slate-700 dark:text-slate-300 list-disc list-inside space-y-1">
              {recommendations.furtherWorkup.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

        </div>

        {recommendations.surgicalOrInterventional && (
          <div className="p-3.5 bg-rose-50 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 text-xs text-rose-900 dark:text-rose-200 font-medium">
            <strong>Хирургические / Интервенционные рекомендации:</strong> {recommendations.surgicalOrInterventional}
          </div>
        )}
      </div>

      {/* Edit Inputs Link */}
      <div className="text-center pt-2">
        <button
          id="back-to-wizard-btn"
          type="button"
          onClick={onEditInputs}
          className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
        >
          ← Вернуться к редактированию введенных параметров
        </button>
      </div>

    </div>
  );
};
