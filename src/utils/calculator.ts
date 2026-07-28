import {
  PatientData,
  ToastSubtypeKey,
  ToastSubtypeInfo,
  OCSPCategoryKey,
  OCSPInfo,
  CalculationResult,
  SubtypeCalculationResult,
  ScoreDetailItem
} from '../types';

export const TOAST_SUBTYPES_MAP: Record<ToastSubtypeKey, ToastSubtypeInfo> = {
  atherothrombotic: {
    key: 'atherothrombotic',
    nameRu: 'Атеротромботический инсульт',
    shortRu: 'Атеротромботический',
    nameEn: 'Large-artery atherosclerosis (LAA)',
    code: 'TOAST-1',
    color: 'text-amber-700 dark:text-amber-400',
    bgColor: 'bg-amber-50 dark:bg-amber-950/40',
    borderColor: 'border-amber-300 dark:border-amber-700',
    description: 'Инсульт вследствие атеросклероза крупной магистральной или интракраниальной артерии со стенозом ≥ 50% или окклюзией.'
  },
  cardioembolic: {
    key: 'cardioembolic',
    nameRu: 'Кардиоэмболический инсульт',
    shortRu: 'Кардиоэмболический',
    nameEn: 'Cardioembolism (CE)',
    code: 'TOAST-2',
    color: 'text-rose-700 dark:text-rose-400',
    bgColor: 'bg-rose-50 dark:bg-rose-950/40',
    borderColor: 'border-rose-300 dark:border-rose-700',
    description: 'Инсульт вследствие эмболии из камер сердца или кардиальных структур при ФП, внутрисердечном тромбе, пороке сердца и др.'
  },
  lacunar: {
    key: 'lacunar',
    nameRu: 'Лакунарный инсульт',
    shortRu: 'Лакунарный',
    nameEn: 'Small-vessel occlusion (SVO)',
    code: 'TOAST-3',
    color: 'text-blue-700 dark:text-blue-400',
    bgColor: 'bg-blue-50 dark:bg-blue-950/40',
    borderColor: 'border-blue-300 dark:border-blue-700',
    description: 'Окклюзия мелких перфорирующих артерий с формированием очага < 1.5 см в подкорковых ядрах или < 1.0 см в стволе мозга.'
  },
  other: {
    key: 'other',
    nameRu: 'Инсульт другой установленной этиологии',
    shortRu: 'Другой этиологии',
    nameEn: 'Other determined etiology (ODE)',
    code: 'TOAST-4',
    color: 'text-purple-700 dark:text-purple-400',
    bgColor: 'bg-purple-50 dark:bg-purple-950/40',
    borderColor: 'border-purple-300 dark:border-purple-700',
    description: 'Инсульт редких причин: диссекция артерий, васкулиты, коагулопатии, антифосфолипидный синдром, фибромышечная дисплазия.'
  },
  undetermined: {
    key: 'undetermined',
    nameRu: 'Инсульт неопределенной этиологии',
    shortRu: 'Неопределенной этиологии',
    nameEn: 'Undetermined etiology (UDE)',
    code: 'TOAST-5',
    color: 'text-slate-700 dark:text-slate-400',
    bgColor: 'bg-slate-50 dark:bg-slate-900/60',
    borderColor: 'border-slate-300 dark:border-slate-700',
    description: 'Причина не установлена вследствие незавершенного обследования, отсутствия явной патологии или наличия ≥ 2 вероятных причин.'
  }
};

export const OCSP_INFO_MAP: Record<OCSPCategoryKey, OCSPInfo> = {
  TACS: {
    key: 'TACS',
    nameRu: 'TACS — Тотальный инфаркт передней циркуляции',
    fullNameRu: 'Тотальный инфаркт в бассейне передней циркуляции',
    fullNameEn: 'Total Anterior Circulation Stroke',
    territoryRu: 'Бассейн средней/передней мозговой артерии (обширное поражение коры и подкорки)',
    description: 'Триада клинических признаков: 1) двигательный/чувствительный дефицит; 2) высшие корковые нарушения (афазия/неглект); 3) гомонимная гемианопсия.',
    color: 'text-red-700 dark:text-red-400',
    badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300 border-red-300'
  },
  PACS: {
    key: 'PACS',
    nameRu: 'PACS — Частичный инфаркт передней циркуляции',
    fullNameRu: 'Частичный инфаркт в бассейне передней циркуляции',
    fullNameEn: 'Partial Anterior Circulation Stroke',
    territoryRu: 'Корковые и субкортикальные ветви СМА или ПМА',
    description: 'Любые 2 из 3 компонентов TACS, либо изолированное корковое нарушение (афазия/агнозия), либо изолированный монопарез.',
    color: 'text-amber-700 dark:text-amber-400',
    badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300 border-amber-300'
  },
  LACS: {
    key: 'LACS',
    nameRu: 'LACS — Лакунарный синдром',
    fullNameRu: 'Лакунарный инфаркт',
    fullNameEn: 'Lacunar Circulation Stroke',
    territoryRu: 'Глубокие перфорирующие ветви (лентикулостриарные, таламоперфорирующие артерии)',
    description: 'Классические лакунарные синдромы: чистый двигательный инсульт, чистый чувствительный, сенсомоторный, атаксический гемипарез, синдром дизартрии и неловкой кисти (БЕЗ корковых нарушений и гемианопсии).',
    color: 'text-blue-700 dark:text-blue-400',
    badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300 border-blue-300'
  },
  POCS: {
    key: 'POCS',
    nameRu: 'POCS — Инфаркт в заднем циркуляторном бассейне',
    fullNameRu: 'Инфаркт в заднем бассейне кровообращения',
    fullNameEn: 'Posterior Circulation Stroke',
    territoryRu: 'Вертебробазилярный бассейн (позвоночные, основная, ЗМА, мозжечковые артерии)',
    description: 'Стволовая/мозжечковая симптоматика, альтернирующие синдромы, поражение черепных нервов, глазно-двигательные нарушения, изолированная гемианопсия или двусторонние двигательные/чувствительные дефициты.',
    color: 'text-purple-700 dark:text-purple-400',
    badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300 border-purple-300'
  }
};

/**
 * Determine OCSP Stroke Category
 */
export function calculateOCSP(data: PatientData): OCSPInfo {
  const hasCortical = data.corticalSigns;
  const hasHemianopia = data.hemianopia;
  const hasMotorOrSensory = data.motorDeficit || data.sensoryDeficit;
  const hasBrainstem = data.brainstemCerebellarSigns;

  // Count TACS triad
  let tacsCount = 0;
  if (hasMotorOrSensory) tacsCount++;
  if (hasCortical) tacsCount++;
  if (hasHemianopia) tacsCount++;

  if (hasBrainstem && !hasCortical) {
    return OCSP_INFO_MAP.POCS;
  }

  if (tacsCount === 3) {
    return OCSP_INFO_MAP.TACS;
  }

  if (tacsCount === 2 || (hasCortical && !hasMotorOrSensory && !hasHemianopia)) {
    return OCSP_INFO_MAP.PACS;
  }

  if ((data.pureMotorStroke || data.pureSensoryStroke || (hasMotorOrSensory && !hasCortical && !hasHemianopia && !hasBrainstem))) {
    return OCSP_INFO_MAP.LACS;
  }

  if (hasBrainstem) {
    return OCSP_INFO_MAP.POCS;
  }

  return OCSP_INFO_MAP.PACS;
}

/**
 * Calculate TOAST scores and relative probabilities
 */
export function calculateStrokeSubtypes(data: PatientData): CalculationResult {
  const rawScores: Record<ToastSubtypeKey, number> = {
    atherothrombotic: 0,
    cardioembolic: 0,
    lacunar: 0,
    other: 0,
    undetermined: 0
  };

  const details: ScoreDetailItem[] = [];

  const addScore = (
    predictorName: string,
    valueDesc: string,
    weights: Partial<Record<ToastSubtypeKey, number>>
  ) => {
    const affectedSubtypes: ToastSubtypeKey[] = [];
    (Object.keys(weights) as ToastSubtypeKey[]).forEach((key) => {
      const p = weights[key] || 0;
      if (p > 0) {
        rawScores[key] += p;
        affectedSubtypes.push(key);
      }
    });

    if (affectedSubtypes.length > 0) {
      details.push({
        predictorName,
        valueDescription: valueDesc,
        pointsAdded: Math.max(...Object.values(weights)),
        subtypesAffected: affectedSubtypes
      });
    }
  };

  // 1. Age ≥ 55
  if (data.age >= 55) {
    addScore('Возраст ≥ 55 лет', `${data.age} лет`, {
      atherothrombotic: 1.0,
      lacunar: 1.0
    });
  }

  // 2. NIHSS Score < 5
  if (data.nihssScore > 0 && data.nihssScore < 5) {
    addScore('Легкий неврологический дефицит (NIHSS < 5)', `Балл NIHSS: ${data.nihssScore}`, {
      lacunar: 1.0
    });
  } else if (data.nihssScore >= 22) {
    addScore('Тяжелый неврологический дефицит (NIHSS ≥ 22)', `Балл NIHSS: ${data.nihssScore}`, {
      cardioembolic: 1.0,
      atherothrombotic: 0.5
    });
  }

  // 3. Onset character
  switch (data.onsetMode) {
    case 'sudden':
      addScore('Характер дебюта', 'Внезапное одномоментное начало (эмболический пик)', {
        cardioembolic: 1.0
      });
      break;
    case 'stuttering':
      addScore('Характер дебюта', 'Мерцающее / ступенчатое нарастание симптоматики', {
        atherothrombotic: 1.0
      });
      break;
    case 'gradual':
      addScore('Характер дебюта', 'Постепенное нарастание неврологического дефицита', {
        lacunar: 1.0
      });
      break;
    case 'fluctuating':
      addScore('Характер дебюта', 'Флюктуирующее / рецидивирующее течение', {
        other: 1.0,
        undetermined: 1.0
      });
      break;
  }

  // 4. Cortical signs & Aphasia/Neglect/Hemianopia
  if (data.corticalSigns || data.hemianopia) {
    addScore('Корковые симптомы (высшие функции / гемианопсия)', 'Присутствуют', {
      atherothrombotic: 1.0,
      cardioembolic: 1.0,
      other: 1.0,
      undetermined: 1.0,
      lacunar: 0
    });
  }

  // 5. Brainstem / Cerebellar signs
  if (data.brainstemCerebellarSigns) {
    addScore('Стволовые / мозжечковые симптомы', 'Присутствуют', {
      cardioembolic: 1.0,
      lacunar: 1.0,
      other: 1.0,
      undetermined: 1.0,
      atherothrombotic: 0
    });
  }

  // 6. Pure Motor Stroke
  if (data.pureMotorStroke) {
    addScore('Чистый двигательный инсульт', 'Присутствует', {
      lacunar: 1.0
    });
  }

  // 7. Pure Sensory Stroke
  if (data.pureSensoryStroke) {
    addScore('Чистый чувствительный инсульт', 'Присутствует', {
      cardioembolic: 1.0,
      atherothrombotic: 0.5,
      undetermined: 0.5
    });
  }

  // 8. Arterial Hypertension & CAD
  if (data.hypertension || data.coronaryHeartDisease) {
    const desc = [
      data.hypertension ? 'Артериальная гипертензия' : null,
      data.coronaryHeartDisease ? 'ИБС' : null
    ].filter(Boolean).join(', ');

    addScore('Атеросклероз / Сосудистая патология (АГ / ИБС)', desc, {
      lacunar: 1.0,
      atherothrombotic: 0.5,
      cardioembolic: 0.5,
      other: 0.5,
      undetermined: 0.5
    });
  }

  // 9. Atrial Fibrillation (ФП)
  if (data.atrialFibrillation || data.ecgOrHolterAF) {
    addScore('Фибрилляция предсердий (постоянная / пароксизмальная)', 'Выявлена', {
      cardioembolic: 1.0,
      atherothrombotic: 1.0,
      lacunar: 0.5,
      other: 0.5,
      undetermined: 0.5
    });
  }

  // 10. CHF & Myocardial Infarction
  if (data.chfOrPostMI) {
    addScore('ХСН и/или перенесенный инфаркт миокарда', 'Присутствует в анамнезе', {
      atherothrombotic: 1.0,
      undetermined: 1.0,
      cardioembolic: 0.5
    });
  }

  // 11. Diabetes Mellitus
  if (data.diabetesMellitus) {
    addScore('Сахарный диабет', 'В анамнезе', {
      atherothrombotic: 1.0,
      undetermined: 1.0
    });
  }

  // 12. BP Elevation in Acute Period
  if (data.highBpInAcutePeriod) {
    addScore('АД в острейшем периоде', 'Высокая систолическая гипертензия / ДАД > 100 мм рт.ст.', {
      atherothrombotic: 1.0,
      undetermined: 1.0
    });
  }

  // 13. High-risk cardiac embolic source
  if (data.highRiskCardiacSource || data.echoCardioThrombusOrValvular) {
    addScore('Кардиальный источник эмболии высокого риска', 'Тромб ЛЖ/ЛП, искусственный клапан, миксома или выраженный порок', {
      cardioembolic: 1.5
    });
  }

  // 14. Carotid/Vertebral Stenosis ≥ 50%
  if (data.carotidStenosis50 || data.duplexCarotidStenosis50) {
    addScore('Стеноз магистральных / целевых артерий ≥ 50%', 'Подтвержден по УЗДГ / КТА / МРА', {
      atherothrombotic: 1.5,
      cardioembolic: 0.5,
      other: 0.5,
      undetermined: 0.5
    });
  }

  // 15. Neuroimaging focus size & characteristics
  if (data.neuroimagingPerformed) {
    if (data.imagingFocusSize === 'lacunar') {
      addScore('КТ/МРТ: Лакунарный очаг', '< 1.5 см в подкорке или < 1.0 см в стволе', {
        lacunar: 1.5,
        atherothrombotic: 0,
        cardioembolic: 0
      });
    } else if (data.imagingFocusSize === 'large_territorial') {
      addScore('КТ/МРТ: Обширный инфаркт', '≥ 1.5 см корковый / субкортикальный инфаркт', {
        atherothrombotic: 1.0,
        cardioembolic: 1.0,
        lacunar: -0.5
      });
    } else if (data.imagingFocusSize === 'multifocal') {
      addScore('КТ/МРТ: Множественные очаги', 'Мультифокальный эмболический паттерн в разных сосудистых бассейнах', {
        cardioembolic: 1.5,
        atherothrombotic: 0.5
      });
    }
  }

  // Ensure non-negative raw scores
  (Object.keys(rawScores) as ToastSubtypeKey[]).forEach((key) => {
    if (rawScores[key] < 0) rawScores[key] = 0;
  });

  const totalRawScore = Object.values(rawScores).reduce((acc, curr) => acc + curr, 0);

  // Build subtypes list with percentage calculation
  const toastSubtypes: SubtypeCalculationResult[] = (Object.keys(rawScores) as ToastSubtypeKey[]).map((key) => {
    const score = rawScores[key];
    const percentage = totalRawScore > 0 ? Math.round((score / totalRawScore) * 100) : 20;

    // Filter relevant details for this subtype
    const subtypeDetails = details.filter((d) => d.subtypesAffected.includes(key));

    return {
      key,
      score: Math.round(score * 10) / 10,
      percentage,
      details: subtypeDetails
    };
  });

  // Sort subtypes descending by score
  toastSubtypes.sort((a, b) => b.score - a.score);

  const topSubtype = toastSubtypes[0];
  const secondSubtype = toastSubtypes[1];

  let dominantKey: ToastSubtypeKey = topSubtype.key;
  let confidenceLevel: 'High' | 'Probable' | 'Possible' = 'High';
  let confidenceLevelRu = 'Высокая степень вероятности';
  let confidenceDescriptionRu = 'Четкая преобладающая клинико-диагностическая картина в пользу данного подтипа.';

  // If score difference between top two is tiny, or if multiple strong criteria coexist, adjust confidence
  const scoreDiff = topSubtype.score - (secondSubtype ? secondSubtype.score : 0);

  if (topSubtype.score < 2.0) {
    dominantKey = 'undetermined';
    confidenceLevel = 'Possible';
    confidenceLevelRu = 'Неопределенная этиология (требуется дообследование)';
    confidenceDescriptionRu = 'Клинические данные недостаточны для однозначного выбора подтипа. Рекомендуется расширенный поиск.';
  } else if (scoreDiff <= 0.5 && secondSubtype.score >= 2.0) {
    confidenceLevel = 'Possible';
    confidenceLevelRu = 'Сочетанная этиология / Возможная категория';
    confidenceDescriptionRu = `Выявлены конкурентные механизмы развития инсульта: ${TOAST_SUBTYPES_MAP[topSubtype.key].shortRu} и ${TOAST_SUBTYPES_MAP[secondSubtype.key].shortRu}.`;
  } else if (scoreDiff < 1.5) {
    confidenceLevel = 'Probable';
    confidenceLevelRu = 'Вероятный этиологический подтип';
    confidenceDescriptionRu = 'Основной подтип определен с высокой долей вероятности, однако присутствуют фоновые факторы риска другого подтипа.';
  }

  const dominantSubtype = TOAST_SUBTYPES_MAP[dominantKey];
  const ocspResult = calculateOCSP(data);

  // Recommendations tailored to subtype & OCSP
  const recommendations = generateRecommendations(dominantKey, ocspResult.key, data);

  return {
    dominantSubtype,
    confidenceLevel,
    confidenceLevelRu,
    confidenceDescriptionRu,
    toastSubtypes,
    ocspResult,
    contributingPredictors: details,
    recommendations,
    calcDate: data.calcDate || new Date().toLocaleString('ru-RU')
  };
}

/**
 * Generate Clinical Guidelines & Secondary Prevention Protocols
 */
function generateRecommendations(
  subtype: ToastSubtypeKey,
  ocspKey: OCSPCategoryKey,
  data: PatientData
) {
  let antithrombotic = '';
  let lipidTherapy = 'Высокоинтенсивная статинотерапия (Аторвастатин 40-80 мг или Розувастатин 20-40 мг) с целевым ХС-ЛПНП < 1.4 ммоль/л.';
  let bpControl = 'Целевой уровень АД < 130/80 мм рт.ст. при переносимости. В острейшем периоде снижение АД мягкое (не более 15-20% в первые сутки).';
  const furtherWorkup: string[] = [];
  let surgicalOrInterventional: string | undefined = undefined;

  switch (subtype) {
    case 'atherothrombotic':
      antithrombotic = 'Двойная антитромбоцитарная терапия (ДААТ: Аспирин 75-100 мг + Клопидогрел 75 мг) на 21-90 дней (по CHANCE/POINT), далее монотерапия Клопидогрелом 75 мг или Аспирином 100 мг.';
      furtherWorkup.push('Дуплексное сканирование БЦА / КТ-ангиография интра- и экстракраниальных артерий для точной оценки стеноза.');
      furtherWorkup.push('Липидограмма с измерением Липопротеина (а) и С-реактивного белка.');
      if (data.carotidStenosis50 || data.duplexCarotidStenosis50) {
        surgicalOrInterventional = 'Консультация сосудистого хирурга / нейрохирурга для оценки показаний к каротидной эндартерэктомии (КЭЭ) или каротидному стентированию (КАС) в первые 14 дней.';
      }
      break;

    case 'cardioembolic':
      antithrombotic = 'Прямые пероральные антикоагулянты (ПОАК: Апиксабан, Ривароксабан, Дабигатран) или Варфарин под контролем МНО (2.0-3.0). Начало терапии по правилу DIN/1-3-6-12 дней в зависимости от размера инфаркта и риска геморрагической трансформации.';
      lipidTherapy = 'Умеренная или высокоинтенсивная статинотерапия для стабилизации сосудистой стенки.';
      furtherWorkup.push('Чреспищеводная эхокардиография (ЧП-ЭхоКГ) для исключения тромбоза ушка левого предсердия и открытого овального окна (ООО).');
      furtherWorkup.push('Суточное / 72-часовое Холтеровское мониторирование ЭКГ для выявления пароксизмальной ФП.');
      if (data.highRiskCardiacSource) {
        surgicalOrInterventional = 'Консультация кардиохирурга при пороках сердца, искусственных клапанах или миксоме предсердия.';
      }
      break;

    case 'lacunar':
      antithrombotic = 'Монотерапия антиагрегантами (Аспирин 75-100 мг или Клопидогрел 75 мг). ДААТ назначается кратким курсом (до 21 дня) только при высоком риске повторного инсульта.';
      furtherWorkup.push('МРТ головного мозга 1.5-3.0 Тл в режиме DWI/T2/FLAIR для подтверждения лакунарного очага.');
      furtherWorkup.push('Суточное мониторирование АД (СМАД) для подбора эффективной гипотензивной терапии.');
      furtherWorkup.push('Исключение микроангиопатий (Cadasil, гипертоническая энцефалопатия).');
      break;

    case 'other':
      antithrombotic = 'Стратегия зависит от верифицированной причины: при диссекции артерий — антикоагулянты или антиагреганты на 3-6 месяцев; при васкулитах — иммуносупрессивная терапия.';
      furtherWorkup.push('Панель на антифосфолипидный синдром (АФС: волчаночный anticoagulant, антитела к кардиолипину, бета2-гликопротеину I).');
      furtherWorkup.push('Исследование системы гемостаза (протеины C, S, антитромбин III, мутация Лейдена, протромбина).');
      furtherWorkup.push('МР-ангиография с подавлением жира (для визуализации интрамуральной гематомы при диссекции).');
      break;

    case 'undetermined':
      antithrombotic = 'Монотерапия антиагрегантом (Аспирин 100 мг или Клопидогрел 75 мг) до уточнения этиологической причины.';
      furtherWorkup.push('Завершение полного алгоритма обследования: расширенное ЭКГ-мониторирование (до 7-30 дней для поиска ФП).');
      furtherWorkup.push('КТ-ангиография или МР-ангиография сосудов головы и шеи.');
      furtherWorkup.push('Чреспищеводная ЭхоКГ с контрастированием пузырьками (Bubble test) для поиска ООО.');
      break;
  }

  // OCSP specific notes
  if (ocspKey === 'TACS') {
    bpControl += ' При TACS повышен риск нарастания отека мозга и геморрагической трансформации. Рекомендуется мониторинг ВЧД и контроль гликемии.';
  }

  return {
    antithrombotic,
    lipidTherapy,
    bpControl,
    furtherWorkup,
    surgicalOrInterventional
  };
}
