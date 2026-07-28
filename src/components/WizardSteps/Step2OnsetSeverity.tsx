import React from 'react';
import { PatientData, OnsetCharacter } from '../../types';
import { Clock, Calculator, AlertTriangle, Zap, TrendingUp, RefreshCw, BarChart2 } from 'lucide-react';

interface Step2Props {
  data: PatientData;
  onChange: (updated: Partial<PatientData>) => void;
  onOpenNIHSSModal: () => void;
}

export const Step2OnsetSeverity: React.FC<Step2Props> = ({
  data,
  onChange,
  onOpenNIHSSModal
}) => {

  const ONSET_OPTIONS: { key: OnsetCharacter; labelRu: string; badgeRu: string; descRu: string; targetSubtypeRu: string }[] = [
    {
      key: 'sudden',
      labelRu: 'Внезапное одномоментное начало («эмболический пик»)',
      badgeRu: 'Кардиоэмболический',
      descRu: 'Симптомы достигают максимальной выраженности за считанные секунды или минуты (часто во время бодрствования или физической нагрузки).',
      targetSubtypeRu: '+1.0 балл к Кардиоэмболическому подтипу'
    },
    {
      key: 'stuttering',
      labelRu: 'Мерцающее / ступенчатое нарастание симптоматики',
      badgeRu: 'Атеротромботический',
      descRu: 'Волнообразное или ступенчатое нарастание неврологического дефицита в течение нескольких часов или суток (часто во сне или ранние утренние часы).',
      targetSubtypeRu: '+1.0 балл к Атеротромботическому подтипу'
    },
    {
      key: 'gradual',
      labelRu: 'Постепенное медленное нарастание',
      badgeRu: 'Лакунарный',
      descRu: 'Постепенное неуклонное прогрессирование локального дефицита без судорог или угнетения сознания.',
      targetSubtypeRu: '+1.0 балл к Лакунарному подтипу'
    },
    {
      key: 'fluctuating',
      labelRu: 'Флюктуирующее / рецидивирующее течение',
      badgeRu: 'Другой / Неопределенный',
      descRu: 'Чередование эпизодов ухудшения и улучшения, рецидивирующие транзиторные ишемические атаки (ТИА) в одном или разных бассейнах.',
      targetSubtypeRu: '+1.0 балл к Другой / Неопределенной этиологии'
    }
  ];

  return (
    <div className="space-y-6">
      
      {/* Onset Mode Selection */}
      <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-2">
          <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Характер дебюта инсульта</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Определите темп развития первой неврологической симптоматики:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
          {ONSET_OPTIONS.map((item) => {
            const isSelected = data.onsetMode === item.key;
            return (
              <label
                key={item.key}
                className={`p-3.5 rounded-xl border transition cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-blue-50/90 dark:bg-blue-950/40 border-blue-500 dark:border-blue-600 ring-2 ring-blue-500/20'
                    : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
                      <input
                        type="radio"
                        name="onsetMode"
                        checked={isSelected}
                        onChange={() => onChange({ onsetMode: item.key })}
                        className="text-blue-600 focus:ring-blue-500"
                      />
                      <span>{item.labelRu}</span>
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 pl-6 leading-relaxed">
                    {item.descRu}
                  </p>
                </div>

                <div className="mt-3 pl-6 pt-2 border-t border-slate-200/60 dark:border-slate-800 flex items-center justify-between text-[11px]">
                  <span className="font-medium text-blue-700 dark:text-blue-300">
                    {item.targetSubtypeRu}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-slate-200/70 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-medium">
                    {item.badgeRu}
                  </span>
                </div>
              </label>
            );
          })}
        </div>
      </div>

      {/* NIHSS Score & Severity */}
      <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <div>
            <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
              <BarChart2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <span>Тяжесть инсульта по шкале NIHSS</span>
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
              Шкала инсульта Национального института здоровья (0-42 баллов)
            </p>
          </div>

          <button
            id="open-nihss-calculator-btn"
            type="button"
            onClick={onOpenNIHSSModal}
            className="px-3.5 py-2 text-xs font-semibold text-white bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 rounded-lg shadow-sm transition-colors flex items-center space-x-2 self-start sm:self-auto"
          >
            <Calculator className="w-4 h-4" />
            <span>Интерактивный калькулятор NIHSS</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 items-center bg-slate-50 dark:bg-slate-900/60 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Ввод суммарного балла NIHSS напрямую (0 - 42)
            </label>
            <div className="flex items-center space-x-3">
              <input
                id="nihss-score-input"
                type="number"
                min={0}
                max={42}
                value={data.nihssScore}
                onChange={(e) => {
                  const val = Math.min(42, Math.max(0, parseInt(e.target.value) || 0));
                  onChange({ nihssScore: val });
                }}
                className="w-24 px-3 py-2 text-lg font-bold text-slate-900 dark:text-white bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none text-center"
              />
              <span className="text-sm text-slate-600 dark:text-slate-400 font-medium">
                баллов по NIHSS
              </span>
            </div>
          </div>

          {/* Clinical Interpretation Badge */}
          <div className="p-3 rounded-lg border bg-white dark:bg-slate-900 text-xs space-y-1">
            <span className="font-semibold text-slate-700 dark:text-slate-200 block">
              Клиническая трактовка балла:
            </span>
            {data.nihssScore === 0 && (
              <span className="text-slate-500">Неврологический дефицит отсутствует</span>
            )}
            {data.nihssScore > 0 && data.nihssScore < 5 && (
              <span className="text-blue-600 dark:text-blue-400 font-medium block">
                • Легкий инсульт (NIHSS &lt; 5) — Предиктор лакунарного подтипа (+1.0 балл к SVO)
              </span>
            )}
            {data.nihssScore >= 5 && data.nihssScore <= 15 && (
              <span className="text-amber-600 dark:text-amber-400 font-medium block">
                • Инсульт средней тяжести (NIHSS 5-15)
              </span>
            )}
            {data.nihssScore > 15 && data.nihssScore < 22 && (
              <span className="text-rose-600 dark:text-rose-400 font-medium block">
                • Тяжелый инсульт (NIHSS 16-21)
              </span>
            )}
            {data.nihssScore >= 22 && (
              <span className="text-rose-700 dark:text-rose-300 font-bold block">
                • Крайне тяжелый / массивный инсульт (NIHSS ≥ 22) — Высокая вероятность окклюзии крупной артерии или эмболии (+1.0 Кардиоэмболия, +0.5 Атеротромбоз)
              </span>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
