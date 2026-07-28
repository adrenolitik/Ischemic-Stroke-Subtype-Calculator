import { ClinicalCasePreset } from '../types';

export const SAMPLE_CLINICAL_CASES: ClinicalCasePreset[] = [
  {
    id: 'case_cardioembolic',
    title: 'Пациент А., 68 лет — Кардиоэмболический вариант (ФП)',
    shortDesc: 'Внезапный апоплектиформный дебют, пароксизмальная ФП, корковый дефицит (афазия + правосторонний гемипарез), NIHSS 14, PACS.',
    patientData: {
      patientName: 'Алексеев И. В. (68 лет)',
      age: 68,
      gender: 'male',
      hypertension: true,
      coronaryHeartDisease: true,
      atrialFibrillation: true,
      chfOrPostMI: true,
      diabetesMellitus: false,
      carotidStenosis50: false,
      highRiskCardiacSource: true,

      onsetMode: 'sudden',
      nihssScore: 14,

      corticalSigns: true,
      hemianopia: true,
      motorDeficit: true,
      sensoryDeficit: true,
      brainstemCerebellarSigns: false,
      pureMotorStroke: false,
      pureSensoryStroke: false,

      highBpInAcutePeriod: true,
      bpAsymmetry20: false,
      ecgOrHolterAF: true,
      echoCardioThrombusOrValvular: true,
      duplexCarotidStenosis50: false,

      neuroimagingPerformed: true,
      imagingFocusSize: 'large_territorial'
    }
  },
  {
    id: 'case_lacunar',
    title: 'Пациент Б., 54 года — Лакунарный инсульт (LACS)',
    shortDesc: 'Постепенное нарастание изолированного левостороннего гемипареза без корковых нарушений, АГ 2 ст., NIHSS 3, КТ: очаг 11 мм в бедерной лучистости.',
    patientData: {
      patientName: 'Борисова М. А. (54 года)',
      age: 54,
      gender: 'female',
      hypertension: true,
      coronaryHeartDisease: false,
      atrialFibrillation: false,
      chfOrPostMI: false,
      diabetesMellitus: true,
      carotidStenosis50: false,
      highRiskCardiacSource: false,

      onsetMode: 'gradual',
      nihssScore: 3,

      corticalSigns: false,
      hemianopia: false,
      motorDeficit: true,
      sensoryDeficit: false,
      brainstemCerebellarSigns: false,
      pureMotorStroke: true,
      pureSensoryStroke: false,

      highBpInAcutePeriod: true,
      bpAsymmetry20: false,
      ecgOrHolterAF: false,
      echoCardioThrombusOrValvular: false,
      duplexCarotidStenosis50: false,

      neuroimagingPerformed: true,
      imagingFocusSize: 'lacunar'
    }
  },
  {
    id: 'case_athero',
    title: 'Пациент В., 72 года — Атеротромботический инсульт (стеноз ВСА 75%)',
    shortDesc: 'Ступенчатый дебют, гемипарез + афазия, стеноз левой ВСА 75% по УЗДГ, ИБС, СД 2 типа, NIHSS 11, PACS.',
    patientData: {
      patientName: 'Васильев П. Н. (72 года)',
      age: 72,
      gender: 'male',
      hypertension: true,
      coronaryHeartDisease: true,
      atrialFibrillation: false,
      chfOrPostMI: true,
      diabetesMellitus: true,
      carotidStenosis50: true,
      highRiskCardiacSource: false,

      onsetMode: 'stuttering',
      nihssScore: 11,

      corticalSigns: true,
      hemianopia: false,
      motorDeficit: true,
      sensoryDeficit: true,
      brainstemCerebellarSigns: false,
      pureMotorStroke: false,
      pureSensoryStroke: false,

      highBpInAcutePeriod: true,
      bpAsymmetry20: true,
      ecgOrHolterAF: false,
      echoCardioThrombusOrValvular: false,
      duplexCarotidStenosis50: true,

      neuroimagingPerformed: true,
      imagingFocusSize: 'large_territorial'
    }
  },
  {
    id: 'case_other',
    title: 'Пациент Г., 42 года — Редкая этиология / Диссекция ВСА',
    shortDesc: 'Молодой возраст (<55), флюктуирующий неврологический дефицит, боль в шее после травмы, отсутствие классических факторов риска, NIHSS 6, POCS.',
    patientData: {
      patientName: 'Григорьев Д. С. (42 года)',
      age: 42,
      gender: 'male',
      hypertension: false,
      coronaryHeartDisease: false,
      atrialFibrillation: false,
      chfOrPostMI: false,
      diabetesMellitus: false,
      carotidStenosis50: false,
      highRiskCardiacSource: false,

      onsetMode: 'fluctuating',
      nihssScore: 6,

      corticalSigns: false,
      hemianopia: false,
      motorDeficit: true,
      sensoryDeficit: true,
      brainstemCerebellarSigns: true,
      pureMotorStroke: false,
      pureSensoryStroke: false,

      highBpInAcutePeriod: false,
      bpAsymmetry20: true,
      ecgOrHolterAF: false,
      echoCardioThrombusOrValvular: false,
      duplexCarotidStenosis50: false,

      neuroimagingPerformed: true,
      imagingFocusSize: 'other'
    }
  }
];
