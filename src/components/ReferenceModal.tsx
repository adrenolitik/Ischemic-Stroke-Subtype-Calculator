import React from 'react';
import { X, BookOpen, Brain, ShieldAlert, FileText, CheckCircle2 } from 'lucide-react';
import { TOAST_SUBTYPES_MAP, OCSP_INFO_MAP } from '../utils/calculator';

interface ReferenceModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ReferenceModal: React.FC<ReferenceModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white dark:bg-slate-900 w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-5 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between bg-slate-50 dark:bg-slate-800/50 rounded-t-2xl sticky top-0 z-10">
          <div className="flex items-center space-x-2.5">
            <div className="p-2 bg-blue-600 text-white rounded-xl">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base font-bold text-slate-900 dark:text-white">
                Справочник по классификации TOAST 2.0 и OCSP
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Клинические критерии этиологических подтипов и топографических категорий
              </p>
            </div>
          </div>

          <button
            id="close-reference-modal-btn"
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 dark:hover:text-white rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-800 dark:text-slate-200">
          
          {/* TOAST Section */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider flex items-center gap-2">
              <Brain className="w-4 h-4" />
              <span>Классификация TOAST (Trial of Org 10172 in Acute Stroke Treatment)</span>
            </h3>

            <div className="grid grid-cols-1 gap-3">
              {Object.values(TOAST_SUBTYPES_MAP).map((sub) => (
                <div key={sub.key} className={`p-3.5 rounded-xl border ${sub.bgColor} ${sub.borderColor}`}>
                  <div className="font-bold text-sm text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{sub.nameRu} ({sub.code})</span>
                    <span className="text-[10px] font-mono uppercase bg-white dark:bg-slate-900 px-2 py-0.5 rounded border border-slate-200">
                      {sub.nameEn}
                    </span>
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
                    {sub.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* OCSP Section */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-purple-700 dark:text-purple-400 uppercase tracking-wider flex items-center gap-2">
              <ShieldAlert className="w-4 h-4" />
              <span>Оксфордская классификация OCSP (Oxfordshire Community Stroke Project)</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {Object.values(OCSP_INFO_MAP).map((ocsp) => (
                <div key={ocsp.key} className="p-3.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50 space-y-1">
                  <div className="font-bold text-slate-900 dark:text-white flex items-center justify-between">
                    <span>{ocsp.key}</span>
                    <span className="text-[10px] font-medium text-slate-500">{ocsp.fullNameEn}</span>
                  </div>
                  <div className="text-xs text-slate-700 dark:text-slate-300">{ocsp.description}</div>
                  <div className="text-[11px] text-slate-500 font-medium pt-1">
                    Сосудистый бассейн: {ocsp.territoryRu}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Clinical Predictor Weight Matrix Reference */}
          <div className="space-y-3 pt-4 border-t border-slate-200 dark:border-slate-800">
            <h3 className="text-sm font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-wider flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>Весовая система предикторов (Версия 2.0)</span>
            </h3>

            <div className="bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-200 dark:border-slate-700 text-xs space-y-2">
              <p>• <strong>Возраст ≥ 55 лет:</strong> +1.0 LAA, +1.0 SVO</p>
              <p>• <strong>Дебют заболевания:</strong> Внезапный пик (+1.0 CE); Ступенчатый (+1.0 LAA); Постепенный (+1.0 SVO); Флюктуирующий (+1.0 ODE/UDE)</p>
              <p>• <strong>Симптомы поражения коры:</strong> +1.0 LAA, +1.0 CE, +1.0 ODE, +1.0 UDE (0 для SVO)</p>
              <p>• <strong>Лакунарные очаги (&lt;1.5 см субкортикально):</strong> +1.5 SVO</p>
              <p>• <strong>Кардиальные источники высокого риска (тромбы/протезы/ФП):</strong> +1.0–1.5 CE</p>
              <p>• <strong>Стеноз артерий ≥ 50%:</strong> +1.5 LAA</p>
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="px-5 py-3 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-800/50 rounded-b-2xl text-right">
          <button
            id="close-reference-footer-btn"
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition"
          >
            Понятно
          </button>
        </div>

      </div>
    </div>
  );
};
