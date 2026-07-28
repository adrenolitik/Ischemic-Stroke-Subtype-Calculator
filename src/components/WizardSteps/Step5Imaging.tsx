import React from 'react';
import { PatientData } from '../../types';
import { FileScan, Layers, AlertCircle, Sparkles } from 'lucide-react';

interface Step5Props {
  data: PatientData;
  onChange: (updated: Partial<PatientData>) => void;
}

export const Step5Imaging: React.FC<Step5Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      
      {/* Performed Flag */}
      <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <label className="flex items-center justify-between cursor-pointer">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 rounded-lg">
              <FileScan className="w-5 h-5" />
            </div>
            <div>
              <span className="text-sm font-bold text-slate-900 dark:text-white block">
                КТ или МРТ головного мозга выполнено
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Визуализация свежего ишемического очага или исключение внутричерепного кровоизлияния
              </span>
            </div>
          </div>

          <input
            id="neuroimaging-performed-toggle"
            type="checkbox"
            checked={data.neuroimagingPerformed}
            onChange={(e) => onChange({ neuroimagingPerformed: e.target.checked })}
            className="w-5 h-5 rounded text-blue-600 focus:ring-blue-500"
          />
        </label>
      </div>

      {data.neuroimagingPerformed && (
        <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
          <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
            <Layers className="w-4 h-4 text-purple-600 dark:text-purple-400" />
            <span>Размер и характеристики свежего ишемического очага на КТ/МРТ</span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            
            {/* Lacunar */}
            <label
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                data.imagingFocusSize === 'lacunar'
                  ? 'bg-blue-50 dark:bg-blue-950/40 border-blue-500 ring-2 ring-blue-500/20'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-blue-300'
              }`}
            >
              <input
                id="focus-lacunar-radio"
                type="radio"
                name="imagingFocusSize"
                checked={data.imagingFocusSize === 'lacunar'}
                onChange={() => onChange({ imagingFocusSize: 'lacunar' })}
                className="mt-0.5 text-blue-600 focus:ring-blue-500"
              />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  Малый (лакунарный) очаг &lt; 1.5 см
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 block mt-0.5">
                  Очаг &lt; 1.5 см в подкорковых ядрах / внутренней капсуле или &lt; 1.0 см в стволе мозга (DWI МРТ / КТ)
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded">
                  +1.5 балла к Лакунарному подтипу (SVO)
                </span>
              </div>
            </label>

            {/* Large Territorial */}
            <label
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                data.imagingFocusSize === 'large_territorial'
                  ? 'bg-amber-50 dark:bg-amber-950/40 border-amber-500 ring-2 ring-amber-500/20'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-amber-300'
              }`}
            >
              <input
                id="focus-large-radio"
                type="radio"
                name="imagingFocusSize"
                checked={data.imagingFocusSize === 'large_territorial'}
                onChange={() => onChange({ imagingFocusSize: 'large_territorial' })}
                className="mt-0.5 text-amber-600 focus:ring-amber-500"
              />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  Обширный территориальный инфаркт ≥ 1.5 см
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 block mt-0.5">
                  Корковый или корково-субкортикальный инфаркт в бассейне крупной артерии (СМА, ПМА, ЗМА)
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded">
                  +1.0 балл к Атеротромботическому / Кардиоэмболическому
                </span>
              </div>
            </label>

            {/* Multifocal */}
            <label
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                data.imagingFocusSize === 'multifocal'
                  ? 'bg-rose-50 dark:bg-rose-950/40 border-rose-500 ring-2 ring-rose-500/20'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-rose-300'
              }`}
            >
              <input
                id="focus-multifocal-radio"
                type="radio"
                name="imagingFocusSize"
                checked={data.imagingFocusSize === 'multifocal'}
                onChange={() => onChange({ imagingFocusSize: 'multifocal' })}
                className="mt-0.5 text-rose-600 focus:ring-rose-500"
              />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  Мультифокальный (множественный) эмболический паттерн
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 block mt-0.5">
                  Свежие очаги ишемии разного возраста в нескольких сосудистых бассейнах
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-rose-100 text-rose-800 dark:bg-rose-900 dark:text-rose-200 rounded">
                  +1.5 балла к Кардиоэмболическому
                </span>
              </div>
            </label>

            {/* Other / No lesion */}
            <label
              className={`p-3.5 rounded-xl border transition cursor-pointer flex items-start space-x-3 ${
                data.imagingFocusSize === 'other' || data.imagingFocusSize === 'no_lesion'
                  ? 'bg-purple-50 dark:bg-purple-950/40 border-purple-500 ring-2 ring-purple-500/20'
                  : 'bg-slate-50 dark:bg-slate-900/50 border-slate-200 dark:border-slate-700 hover:border-purple-300'
              }`}
            >
              <input
                id="focus-other-radio"
                type="radio"
                name="imagingFocusSize"
                checked={data.imagingFocusSize === 'other' || data.imagingFocusSize === 'no_lesion'}
                onChange={() => onChange({ imagingFocusSize: 'other' })}
                className="mt-0.5 text-purple-600 focus:ring-purple-500"
              />
              <div>
                <span className="text-sm font-bold text-slate-900 dark:text-white block">
                  Очаг не выявлен или специфическая картина
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 block mt-0.5">
                  Раннее КТ без изменений, либо венозный инфаркт, диссекция, признаки васкулита
                </span>
                <span className="inline-block mt-2 px-2 py-0.5 text-[10px] font-semibold bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200 rounded">
                  Равновероятно / Другая этиология
                </span>
              </div>
            </label>

          </div>
        </div>
      )}

    </div>
  );
};
