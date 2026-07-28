import React from 'react';
import { PatientData } from '../../types';
import { Stethoscope, Activity, Heart, ShieldAlert, Waves } from 'lucide-react';

interface Step4Props {
  data: PatientData;
  onChange: (updated: Partial<PatientData>) => void;
}

export const Step4Hemodynamics: React.FC<Step4Props> = ({ data, onChange }) => {
  return (
    <div className="space-y-6">
      
      {/* Acute Stage Hemodynamics */}
      <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2 mb-3">
          <Activity className="w-4 h-4 text-red-600 dark:text-red-400" />
          <span>Гемодинамические показатели в острейшем периоде</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-300 transition cursor-pointer">
            <input
              id="high-bp-acute-checkbox"
              type="checkbox"
              checked={data.highBpInAcutePeriod}
              onChange={(e) => onChange({ highBpInAcutePeriod: e.target.checked })}
              className="mt-0.5 rounded text-red-600 focus:ring-red-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                Высокая артериальная гипертензия в острейшем периоде
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                САД &gt; 180 мм рт.ст. или ДАД &gt; 100 мм рт.ст. при поступлении (+1.0 Атеротромботический, +1.0 Неопределенный)
              </span>
            </div>
          </label>

          <label className="flex items-start p-3 bg-slate-50 dark:bg-slate-900/60 rounded-xl border border-slate-200 dark:border-slate-700 hover:border-red-300 transition cursor-pointer">
            <input
              id="bp-asymmetry-checkbox"
              type="checkbox"
              checked={data.bpAsymmetry20}
              onChange={(e) => onChange({ bpAsymmetry20: e.target.checked })}
              className="mt-0.5 rounded text-red-600 focus:ring-red-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-semibold text-slate-900 dark:text-white block">
                Асимметрия АД на верхних конечностях &gt; 20 мм рт.ст.
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                Маркер окклюзирующего поражения подключичной или плечеголовной артерии (синдром обкрадывания)
              </span>
            </div>
          </label>

        </div>
      </div>

      {/* Instrumental Diagnostic Investigations */}
      <div className="bg-white dark:bg-slate-800/80 p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-4">
        <h3 className="text-sm font-semibold text-slate-900 dark:text-white flex items-center gap-2">
          <Stethoscope className="w-4 h-4 text-blue-600 dark:text-blue-400" />
          <span>Данные инструментальных исследований (ЭКГ, ЭхоКГ, УЗДГ)</span>
        </h3>

        <div className="space-y-3">

          {/* ECG / Holter AF */}
          <label className="flex items-start p-3 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 cursor-pointer">
            <input
              id="ecg-af-checkbox"
              type="checkbox"
              checked={data.ecgOrHolterAF}
              onChange={(e) => onChange({ ecgOrHolterAF: e.target.checked })}
              className="mt-0.5 rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-semibold text-rose-950 dark:text-rose-200 block flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-600 fill-rose-600" />
                <span>ЭКГ / Суточный Холтер: Впервые или ранее выявленная ФП/ТП</span>
              </span>
              <span className="text-xs text-rose-800/80 dark:text-rose-300/80">
                Зарегистрированные пароксизмы фибрилляции предсердий продолжительностью ≥ 30 секунд (+1.0 Кардиоэмболия)
              </span>
            </div>
          </label>

          {/* EchoCardio */}
          <label className="flex items-start p-3 bg-rose-50/70 dark:bg-rose-950/30 rounded-xl border border-rose-200 dark:border-rose-900/60 cursor-pointer">
            <input
              id="echo-thrombus-checkbox"
              type="checkbox"
              checked={data.echoCardioThrombusOrValvular}
              onChange={(e) => onChange({ echoCardioThrombusOrValvular: e.target.checked })}
              className="mt-0.5 rounded text-rose-600 focus:ring-rose-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-semibold text-rose-950 dark:text-rose-200 block">
                ЭхоКГ (ТТ-ЭхоКГ / ЧП-ЭхоКГ): Кардиальный субстрат эмболии
              </span>
              <span className="text-xs text-rose-800/80 dark:text-rose-300/80">
                Внутрисердечный тромбоз ЛЖ/ушка ЛП, кальциноз или вегетации на клапанах, аневризма ЛЖ, акинез стенок ЛЖ
              </span>
            </div>
          </label>

          {/* Duplex / CTA Carotid Stenosis >= 50% */}
          <label className="flex items-start p-3 bg-amber-50/70 dark:bg-amber-950/30 rounded-xl border border-amber-200 dark:border-amber-900/60 cursor-pointer">
            <input
              id="duplex-stenosis-checkbox"
              type="checkbox"
              checked={data.duplexCarotidStenosis50}
              onChange={(e) => onChange({ duplexCarotidStenosis50: e.target.checked })}
              className="mt-0.5 rounded text-amber-600 focus:ring-amber-500 w-4 h-4"
            />
            <div className="ml-3">
              <span className="text-sm font-semibold text-amber-950 dark:text-amber-200 block flex items-center gap-2">
                <Waves className="w-4 h-4 text-amber-600" />
                <span>УЗДГ БЦА / КТ-Ангиография: Стеноз артерии ≥ 50% в целевом бассейне</span>
              </span>
              <span className="text-xs text-amber-800/80 dark:text-amber-300/80">
                Атеросклеротическая бляшка с эмбологенной поверхностью или стенозом ≥ 50% в ипсилатеральной ВСА/ПА (+1.5 Атеротромбоз)
              </span>
            </div>
          </label>

        </div>
      </div>

    </div>
  );
};
