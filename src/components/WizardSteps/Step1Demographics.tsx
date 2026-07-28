import React from 'react';
import { PatientData } from '../../types';
import { User, HeartPulse, AlertCircle, ShieldAlert } from 'lucide-react';

interface Step1Props {
  data: PatientData;
  onChange: (updated: Partial<PatientData>) => void;
}

export const Step1Demographics: React.FC<Step1Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      
      {/* Patient Basic Profile */}
      <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-xl border border-slate-200 dark:border-slate-700/60">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-4">
          <User className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Паспортные и демографические данные</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Идентификатор / ФИО пациента (опционально)
            </label>
            <input
              id="patient-name-input"
              type="text"
              value={data.patientName || ''}
              onChange={(e) => onChange({ patientName: e.target.value })}
              placeholder="Пациент № 12345 / И.И. Иванов"
              className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Возраст (лет) *
            </label>
            <div className="relative">
              <input
                id="patient-age-input"
                type="number"
                min={18}
                max={110}
                value={data.age || ''}
                onChange={(e) => onChange({ age: parseInt(e.target.value) || 0 })}
                className="w-full px-3 py-2 text-sm bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
              />
              <span className="absolute right-3 top-2.5 text-xs text-slate-400">лет</span>
            </div>
            {data.age >= 55 ? (
              <p className="text-[11px] text-amber-600 dark:text-amber-400 mt-1">
                +1 балл в пользу атеротромботического и лакунарного подтипов (Возраст ≥ 55 лет)
              </p>
            ) : (
              <p className="text-[11px] text-slate-500 mt-1">
                Возраст &lt; 55 лет снижает вероятность лакунарного и атеротромботического подтипа
              </p>
            )}
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1.5">
              Пол
            </label>
            <div className="flex gap-3 pt-1">
              <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input
                  id="gender-male-radio"
                  type="radio"
                  name="gender"
                  checked={data.gender === 'male'}
                  onChange={() => onChange({ gender: 'male' })}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-800 dark:text-slate-200">Мужской</span>
              </label>
              <label className="flex items-center space-x-2 text-sm cursor-pointer">
                <input
                  id="gender-female-radio"
                  type="radio"
                  name="gender"
                  checked={data.gender === 'female'}
                  onChange={() => onChange({ gender: 'female' })}
                  className="text-blue-600 focus:ring-blue-500"
                />
                <span className="text-slate-800 dark:text-slate-200">Женский</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Vascular & Cardiac Risk Factors */}
      <div className="bg-white dark:bg-slate-800/80 p-4 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <HeartPulse className="w-4 h-4 text-rose-600 dark:text-rose-400" />
          <span>Сосудистый анамнез и коморбидный фон</span>
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4">
          Укажите подтвержденные заболевания и факторы риска до настоящего инсульта:
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">

          {/* AH */}
          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-pointer">
            <input
              id="hypertension-checkbox"
              type="checkbox"
              checked={data.hypertension}
              onChange={(e) => onChange({ hypertension: e.target.checked })}
              className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-slate-900 dark:text-white block">
                Артериальная гипертензия (АГ)
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Длительный анамнез АГ, системная микроангиопатия (+1 Лакунарный, +0.5 другие)
              </span>
            </div>
          </label>

          {/* CAD */}
          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-pointer">
            <input
              id="cad-checkbox"
              type="checkbox"
              checked={data.coronaryHeartDisease}
              onChange={(e) => onChange({ coronaryHeartDisease: e.target.checked })}
              className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-slate-900 dark:text-white block">
                Ишемическая болезнь сердца (ИБС)
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Стенокардия, коронарный атеросклероз
              </span>
            </div>
          </label>

          {/* AF */}
          <label className="flex items-start p-3 bg-rose-50/60 dark:bg-rose-950/20 rounded-xl border border-rose-200 dark:border-rose-900/60 hover:border-rose-300 dark:hover:border-rose-700 transition cursor-pointer">
            <input
              id="af-checkbox"
              type="checkbox"
              checked={data.atrialFibrillation}
              onChange={(e) => onChange({ atrialFibrillation: e.target.checked })}
              className="mt-0.5 rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-rose-900 dark:text-rose-200 block flex items-center gap-1.5">
                <span>Фибрилляция / трепетание предсердий (ФП/ТП)</span>
                <span className="px-1.5 py-0.5 text-[10px] bg-rose-200 text-rose-800 dark:bg-rose-900 dark:text-rose-200 rounded font-semibold">
                  Высокий риск CE
                </span>
              </span>
              <span className="text-xs text-rose-700/80 dark:text-rose-300/80">
                Постоянная, пароксизмальная или персистирующая форма (+1.0 Кардиоэмболический, +1.0 Атеротромботический)
              </span>
            </div>
          </label>

          {/* CHF / Post MI */}
          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-pointer">
            <input
              id="chf-checkbox"
              type="checkbox"
              checked={data.chfOrPostMI}
              onChange={(e) => onChange({ chfOrPostMI: e.target.checked })}
              className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-slate-900 dark:text-white block">
                ХСН и/или перенесенный инфаркт миокарда (ИМ)
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Постинфарктный кардиосклероз, ФВ ЛЖ &lt; 40% (+1.0 Атеротромботический, +0.5 Кардиоэмболический)
              </span>
            </div>
          </label>

          {/* Diabetes */}
          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700/80 hover:border-blue-300 dark:hover:border-blue-700 transition cursor-pointer">
            <input
              id="diabetes-checkbox"
              type="checkbox"
              checked={data.diabetesMellitus}
              onChange={(e) => onChange({ diabetesMellitus: e.target.checked })}
              className="mt-0.5 rounded text-blue-600 focus:ring-blue-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-slate-900 dark:text-white block">
                Сахарный диабет (СД 1 или 2 типа)
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Диабетическая ангиопатия (+1.0 Атеротромботический, +1.0 Неопределенной)
              </span>
            </div>
          </label>

          {/* Stenosis >= 50% */}
          <label className="flex items-start p-3 bg-amber-50/60 dark:bg-amber-950/20 rounded-xl border border-amber-200 dark:border-amber-900/60 hover:border-amber-300 dark:hover:border-amber-700 transition cursor-pointer">
            <input
              id="stenosis-checkbox"
              type="checkbox"
              checked={data.carotidStenosis50}
              onChange={(e) => onChange({ carotidStenosis50: e.target.checked })}
              className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-medium text-amber-950 dark:text-amber-200 block flex items-center gap-1.5">
                <span>Стеноз целевой магистральной артерии ≥ 50%</span>
                <span className="px-1.5 py-0.5 text-[10px] bg-amber-200 text-amber-800 dark:bg-amber-900 dark:text-amber-200 rounded font-semibold">
                  LAA
                </span>
              </span>
              <span className="text-xs text-amber-800/80 dark:text-amber-300/80">
                Подтвержденный гемодинамически значимый стеноз ВСА/ПА/СМА (+1.5 Атеротромботический)
              </span>
            </div>
          </label>

        </div>
      </div>

      {/* High Risk Cardiac Sources */}
      <div className="bg-rose-50/50 dark:bg-rose-950/20 p-4 rounded-xl border border-rose-200 dark:border-rose-900/40">
        <label className="flex items-start space-x-3 cursor-pointer">
          <input
            id="high-cardiac-source-checkbox"
            type="checkbox"
            checked={data.highRiskCardiacSource}
            onChange={(e) => onChange({ highRiskCardiacSource: e.target.checked })}
            className="mt-1 rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
          />
          <div>
            <span className="text-sm font-semibold text-rose-900 dark:text-rose-200 flex items-center gap-1.5">
              <ShieldAlert className="w-4 h-4 text-rose-600" />
              <span>Источники кардиоэмболии высокого риска (тромбы, пороки, протезы)</span>
            </span>
            <p className="text-xs text-rose-700/80 dark:text-rose-300/80 mt-1">
              Наличие тромба в ЛЖ или ушке ЛП, искусственного клапана сердца, миксомы предсердия, инфекционного эндокардита или синдрома слабости синусового узла.
              <strong className="block mt-0.5 font-medium text-rose-800 dark:text-rose-200">
                (+1.5 балла к Кардиоэмболическому подтипу)
              </strong>
            </p>
          </div>
        </label>
      </div>

    </div>
  );
};
