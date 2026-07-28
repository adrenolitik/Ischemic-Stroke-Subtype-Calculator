/**
 * Clinical Calculator of Etiological Subtype of Ischemic Stroke (TOAST 2.0 & OCSP)
 * Types & Interfaces
 */

export type ToastSubtypeKey = 'atherothrombotic' | 'cardioembolic' | 'lacunar' | 'other' | 'undetermined';

export interface ToastSubtypeInfo {
  key: ToastSubtypeKey;
  nameRu: string;
  shortRu: string;
  nameEn: string;
  code: string;
  color: string;
  bgColor: string;
  borderColor: string;
  description: string;
}

export type OCSPCategoryKey = 'TACS' | 'PACS' | 'LACS' | 'POCS';

export interface OCSPInfo {
  key: OCSPCategoryKey;
  nameRu: string;
  fullNameRu: string;
  fullNameEn: string;
  territoryRu: string;
  description: string;
  color: string;
  badgeBg: string;
}

export type OnsetCharacter = 'sudden' | 'stuttering' | 'gradual' | 'fluctuating';

export interface PatientData {
  id?: string;
  patientName?: string;
  age: number;
  gender: 'male' | 'female';
  calcDate?: string;

  // Anamnesis & Risk Factors
  hypertension: boolean; // Артериальная гипертензия
  coronaryHeartDisease: boolean; // ИБС
  atrialFibrillation: boolean; // Фибрилляция предсердий (ФП)
  chfOrPostMI: boolean; // ХСН / перенесенный инфаркт миокарда
  diabetesMellitus: boolean; // Сахарный диабет
  carotidStenosis50: boolean; // Стеноз приконцевых/магистральных артерий ≥ 50%
  highRiskCardiacSource: boolean; // Тромбы ЛЖ/ЛП, тяжелые пороки сердца, искусств. клапан, миксома

  // Onset & Severity
  onsetMode: OnsetCharacter; // Внезапное, мерцающее/ступенчатое, постепенное, флюктуирующее
  nihssScore: number; // Общий балл NIHSS (0-42)

  // Clinical Symptoms & OCSP Deficits
  corticalSigns: boolean; // Высшие корковые функции (афазия, агнозия, неглект)
  hemianopia: boolean; // Выпадение полей зрения (гемианопсия)
  motorDeficit: boolean; // Гемипарез / монопарез
  sensoryDeficit: boolean; // Гемигипестезия
  brainstemCerebellarSigns: boolean; // Стволовые / мозжечковые симптомы (атаксия, дизартрия, нистагм, альтернирующие синдромы)
  pureMotorStroke: boolean; // Чистый двигательный инсульт (изолированный парез без корковых/чувствительных нарушений)
  pureSensoryStroke: boolean; // Чистый чувствительный инсульт

  // Hemodynamics & Diagnostic Findings
  highBpInAcutePeriod: boolean; // АД в острейшем периоде (высокая систолическая гипертензия или ДАД > 100)
  bpAsymmetry20: boolean; // Разница АД на руках > 20 мм рт.ст.
  ecgOrHolterAF: boolean; // Выявленная пароксизмальная/постоянная ФП на ЭКГ/Холтер
  echoCardioThrombusOrValvular: boolean; // ЭхоКГ: внутрисердечный тромб или тяжелое поражение клапанов
  duplexCarotidStenosis50: boolean; // УЗДГ/КТА: Стеноз целевой артерии ≥ 50%

  // Neuroimaging (CT / MRI)
  neuroimagingPerformed: boolean;
  imagingFocusSize: 'lacunar' | 'large_territorial' | 'multifocal' | 'no_lesion' | 'other'; 
  // lacunar: < 1.5 см субкортикально или < 1.0 см в стволе
  // large_territorial: ≥ 1.5 см корковый/субкортикальный
  // multifocal: множественные эмболические очаги в разных бассейнах
}

export interface ScoreDetailItem {
  predictorName: string;
  valueDescription: string;
  pointsAdded: number;
  subtypesAffected: ToastSubtypeKey[];
}

export interface SubtypeCalculationResult {
  key: ToastSubtypeKey;
  score: number;
  percentage: number;
  details: ScoreDetailItem[];
}

export interface CalculationResult {
  dominantSubtype: ToastSubtypeInfo;
  confidenceLevel: 'High' | 'Probable' | 'Possible'; // Высокая, Вероятная, Возможная
  confidenceLevelRu: string;
  confidenceDescriptionRu: string;
  toastSubtypes: SubtypeCalculationResult[];
  ocspResult: OCSPInfo;
  contributingPredictors: ScoreDetailItem[];
  recommendations: {
    antithrombotic: string;
    lipidTherapy: string;
    bpControl: string;
    furtherWorkup: string[];
    surgicalOrInterventional?: string;
  };
  calcDate: string;
}

export interface ClinicalCasePreset {
  id: string;
  title: string;
  shortDesc: string;
  patientData: PatientData;
}

export interface NIHSSDomainScore {
  id: string;
  titleRu: string;
  score: number;
  maxScore: number;
  descriptionRu: string;
  options: { value: number; labelRu: string }[];
}
