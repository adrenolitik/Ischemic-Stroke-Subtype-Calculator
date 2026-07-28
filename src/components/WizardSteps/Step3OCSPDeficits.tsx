import React from 'react';
import { PatientData } from '../../types';
import { calculateOCSP } from '../../utils/calculator';
import { Brain, Eye, Activity, ShieldCheck, HelpCircle } from 'lucide-react';

interface Step3Props {
  data: PatientData;
  onChange: (updated: Partial<PatientData>) => void;
}

export const Step3OCSPDeficits: React.FC<Step3Props> = ({ data, onChange }) => {
  const ocsp = calculateOCSP(data);

  return (
    <div className="space-y-6">
      
      {/* OCSP Live Preview Header */}
      <div className={`p-4 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${ocsp.badgeBg}`}>
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-white/80 dark:bg-slate-900/80 rounded-lg shadow-xs">
            <Brain className="w-5 h-5 text-slate-800 dark:text-slate-200" />
          </div>
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
              Автоматическая квалификация OCSP:
            </div>
            <div className="text-base font-bold text-slate-900 dark:text-white">
              {ocsp.nameRu}
            </div>
          </div>
        </div>

        <div className="text-xs font-medium text-slate-700 dark:text-slate-300 max-w-xs text-right">
          {ocsp.territoryRu}
        </div>
      </div>

      {/* Symptoms Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* 1. Higher Cortical Functions */}
        <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Brain className="w-4 h-4 text-amber-600" />
            <span>1. Корковые симптомы (Higher Cortical)</span>
          </h4>

          <div className="space-y-3">
            <label className="flex items-start space-x-3 cursor-pointer p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200/80 dark:border-slate-700">
              <input
                id="cortical-signs-checkbox"
                type="checkbox"
                checked={data.corticalSigns}
                onChange={(e) => onChange({ corticalSigns: e.target.checked })}
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                  Высшие корковые нарушения
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Афазия (моторная/сенсорная), апраксия, агнозия, пространственный неглект
                </span>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200/80 dark:border-slate-700">
              <input
                id="hemianopia-checkbox"
                type="checkbox"
                checked={data.hemianopia}
                onChange={(e) => onChange({ hemianopia: e.target.checked })}
                className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white block flex items-center gap-1.5">
                  <Eye className="w-3.5 h-3.5 text-slate-600" />
                  <span>Гомонимная гемианопсия</span>
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Выпадение одноименных половин полей зрения с обеих сторон
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* 2. Motor & Sensory Deficit */}
        <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
          <h4 className="text-xs font-bold text-slate-800 dark:text-slate-200 uppercase tracking-wider mb-3 flex items-center gap-1.5">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>2. Двигательный и чувствительный дефицит</span>
          </h4>

          <div className="space-y-3">
            <label className="flex items-start space-x-3 cursor-pointer p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200/80 dark:border-slate-700">
              <input
                id="motor-deficit-checkbox"
                type="checkbox"
                checked={data.motorDeficit}
                onChange={(e) => onChange({ motorDeficit: e.target.checked })}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                  Двигательный дефицит (Гемипарез / Монопарез)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Снижение силы в руке, ноге или лицевой мускулатуре
                </span>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer p-2.5 bg-slate-50 dark:bg-slate-900/50 rounded-lg border border-slate-200/80 dark:border-slate-700">
              <input
                id="sensory-deficit-checkbox"
                type="checkbox"
                checked={data.sensoryDeficit}
                onChange={(e) => onChange({ sensoryDeficit: e.target.checked })}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                  Чувствительный дефицит (Гемигипестезия)
                </span>
                <span className="text-xs text-slate-500 dark:text-slate-400">
                  Снижение болевой или тактильной чувствительности по гемитипу
                </span>
              </div>
            </label>
          </div>
        </div>

      </div>

      {/* Isolated Lacunar Syndromes vs Brainstem */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* Pure Lacunar Motor/Sensory Patterns */}
        <div className="bg-blue-50/60 dark:bg-blue-950/20 p-4 rounded-xl border border-blue-200 dark:border-blue-900/60">
          <h4 className="text-xs font-bold text-blue-900 dark:text-blue-300 uppercase tracking-wider mb-3">
            Классические изолированные лакунарные синдромы:
          </h4>

          <div className="space-y-3">
            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                id="pure-motor-checkbox"
                type="checkbox"
                checked={data.pureMotorStroke}
                onChange={(e) => {
                  const val = e.target.checked;
                  onChange({
                    pureMotorStroke: val,
                    corticalSigns: val ? false : data.corticalSigns,
                    hemianopia: val ? false : data.hemianopia
                  });
                }}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-blue-950 dark:text-blue-200 block">
                  Чистый двигательный инсульт (Pure Motor Stroke)
                </span>
                <span className="text-xs text-blue-800/80 dark:text-blue-300/80">
                  Изолированный геми-/монопарез без корковых нарушений, гипестезии и гемианопсии (+1.0 к Лакунарному)
                </span>
              </div>
            </label>

            <label className="flex items-start space-x-3 cursor-pointer">
              <input
                id="pure-sensory-checkbox"
                type="checkbox"
                checked={data.pureSensoryStroke}
                onChange={(e) => {
                  const val = e.target.checked;
                  onChange({
                    pureSensoryStroke: val,
                    corticalSigns: val ? false : data.corticalSigns
                  });
                }}
                className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
              />
              <div>
                <span className="text-sm font-semibold text-blue-950 dark:text-blue-200 block">
                  Чистый чувствительный инсульт (Pure Sensory Stroke)
                </span>
                <span className="text-xs text-blue-800/80 dark:text-blue-300/80">
                  Изолированное расстройство чувствительности половины тела (+1.0 к Кардиоэмболии, +0.5 к Атеротромбозу)
                </span>
              </div>
            </label>
          </div>
        </div>

        {/* Brainstem / Cerebellar Signs */}
        <div className="bg-purple-50/60 dark:bg-purple-950/20 p-4 rounded-xl border border-purple-200 dark:border-purple-900/60">
          <h4 className="text-xs font-bold text-purple-900 dark:text-purple-300 uppercase tracking-wider mb-3">
            Стволовые и мозжечковые симптомы:
          </h4>

          <label className="flex items-start space-x-3 cursor-pointer">
            <input
              id="brainstem-checkbox"
              type="checkbox"
              checked={data.brainstemCerebellarSigns}
              onChange={(e) => onChange({ brainstemCerebellarSigns: e.target.checked })}
              className="mt-0.5 rounded text-purple-600 focus:ring-purple-500 w-4 h-4"
            />
            <div>
              <span className="text-sm font-semibold text-purple-950 dark:text-purple-200 block">
                Стволовая / Мозжечковая симптоматика
              </span>
              <p className="text-xs text-purple-800/80 dark:text-purple-300/80 mt-0.5">
                Парез взора, диплопия, бульбарные нарушения (дисфагия, дизартрия), альтернирующие синдромы, статокоординаторная атаксия, нистагм.
                <strong className="block mt-1 text-purple-900 dark:text-purple-200">
                  Определяет локализацию POCS в вертебробазилярном бассейне.
                </strong>
              </p>
            </div>
          </label>
        </div>

      </div>

    </div>
  );
};
