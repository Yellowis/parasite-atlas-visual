
export interface Question {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
  icon?: string;
}

export interface Flashcard {
  term: string;
  definition: string;
}

export interface Phase {
  id: number;
  name: string;
  briefing: string;
  questions: Question[];
  flashcards: Flashcard[];
}

export const phases: Phase[] = [
  {
    id: 1,
    name: "Strongyloides stercoralis 🐛",
    briefing: "Strongyloides stercoralis é um nematódeo que penetra a pele via larva filarioide (L3) e pode causar hiperinfecção em pacientes imunossuprimidos.",
    questions: [
      {
        id: 1,
        question: "🩸 Qual a forma infectante?",
        options: ["Ovo", "Larva rabditoide", "Larva filarioide (L3)", "Trofozoíto"],
        correct: 2,
        explanation: "Larva L3 penetra a pele."
      },
      {
        id: 2,
        question: "🌡️ Método de escolha em cultura?",
        options: ["Baermann-Rugai", "Placa de ágar", "PCR", "Exame de Graham"],
        correct: 1,
        explanation: "Cultura em ágar isola larvas."
      },
      {
        id: 3,
        question: "🤒 Sintoma pulmonar comum?",
        options: ["Tosse", "Dor torácica", "Hemoptise", "Dispneia"],
        correct: 0,
        explanation: "Tosse e broncopneumonia ocorrem."
      },
      {
        id: 4,
        question: "🤢 Sintoma intestinal severo?",
        options: ["Diarreia", "Constipação", "Refluxo", "Estenose"],
        correct: 0,
        explanation: "Enterite catarral e diarreia ocorrem."
      },
      {
        id: 5,
        question: "🩺 Tratamento de escolha?",
        options: ["Mebendazol", "Tiabendazol", "Albendazol", "Ivermectina"],
        correct: 3,
        explanation: "Ivermectina é eficaz."
      },
      {
        id: 6,
        question: "🦠 Qual método detecta eosinofilia?",
        options: ["PCR", "Hemograma", "Baermann", "Cultura"],
        correct: 1,
        explanation: "Hemograma revela eosinofilia."
      },
      {
        id: 7,
        question: "🦺 Profilaxia principal?",
        options: ["Uso de calçados", "Vacinação", "Desinfecção", "Isolamento"],
        correct: 0,
        explanation: "Barreira física evita penetração."
      },
      {
        id: 8,
        question: "🔄 Autoinfecção interna ocorre via?",
        options: ["Larvas rabditoides → L3", "Ovos → L1", "Trofozoíto", "Cistos"],
        correct: 0,
        explanation: "Larvas no lúmen se tornam L3."
      },
      {
        id: 9,
        question: "🌿 Ciclo direto é monoxênico: verdadeiro ou falso?",
        options: ["Verdadeiro", "Falso", "Parcial", "Indeterminado"],
        correct: 0,
        explanation: "Monoxênico = ciclo no mesmo hospedeiro e ambiente."
      },
      {
        id: 10,
        question: "🔬 Exame de Graham serve para?",
        options: ["Strongyloides", "Enterobius", "Giardia", "Leishmania"],
        correct: 1,
        explanation: "Graham detecta Enterobius."
      }
    ],
    flashcards: [
      { term: "Larvas L3", definition: "Penetram pele e causam autoinfecção" },
      { term: "Diagnóstico", definition: "Método de Baermann" },
      { term: "Tratamento", definition: "Ivermectina de escolha" },
      { term: "Hiperinfecção", definition: "Ocorre em imunossuprimidos" },
      { term: "Eosinofilia", definition: "Detectada no hemograma" }
    ]
  },
  {
    id: 2,
    name: "Taenia solium / T. saginata 🐷",
    briefing: "Cestódeos heteroxênicos: T. solium causa neurocisticercose; T. saginata infecta via carne bovina.",
    questions: [
      {
        id: 1,
        question: "🍖 Forma infectante na teníase?",
        options: ["Ovo", "Proglote", "Cisticerco", "Larva L3"],
        correct: 2,
        explanation: "Cisticerco na carne mal passada."
      },
      {
        id: 2,
        question: "🧠 Exame de imagem para neurocisticercose?",
        options: ["Ultrassom", "Tomografia Computadorizada", "Raio-X", "Microscopia"],
        correct: 1,
        explanation: "TC detecta cisticercos no SNC."
      },
      {
        id: 3,
        question: "🔍 Diagnóstico coproparasitológico detecta?",
        options: ["Cistos", "Ovos", "Larvas", "Trofozoítos"],
        correct: 1,
        explanation: "Ovos são encontrados nas fezes."
      },
      {
        id: 4,
        question: "🦠 Número de ovos por cisto em T. solium?",
        options: ["50k", "80k", "160k", "200k"],
        correct: 1,
        explanation: "T. solium produz cerca de 80 mil ovos."
      },
      {
        id: 5,
        question: "💉 Tratamento de neurocisticercose inclui?",
        options: ["Albendazol + corticoide", "Ivermectina", "Metronidazol", "Pamoato"],
        correct: 0,
        explanation: "Albendazol com corticoide para reduzir inflamação."
      },
      {
        id: 6,
        question: "🍖 Profilaxia para teníase?",
        options: ["Cozinhar carne", "Filtrar água", "Uso de calçados", "Vacinação"],
        correct: 0,
        explanation: "Carne bem cozida elimina cisticercos."
      },
      {
        id: 7,
        question: "🔗 Autoinfecção externa ocorre via?",
        options: ["Contato fecal-oral", "Inalação", "Picada", "Transfusão"],
        correct: 0,
        explanation: "Mãos contaminadas levam ovos à boca."
      },
      {
        id: 8,
        question: "🦠 Diferença morfológica do escólex de T. saginata?",
        options: ["Ganchos", "Rostelo", "Sem ganchos", "Mais proglotes"],
        correct: 2,
        explanation: "T. saginata é inerme (sem ganchos)."
      },
      {
        id: 9,
        question: "📊 Proglotes de T. solium têm quantos ramos uterinos?",
        options: ["7–12", "15–26", "5–7", "3–5"],
        correct: 0,
        explanation: "T. solium tem 7-12 ramificações uterinas."
      },
      {
        id: 10,
        question: "🚫 Cisticercose ocular é tratada com?",
        options: ["Praziquantel", "Albendazol (contraindicado)", "Tiabendazol", "Mebendazol"],
        correct: 1,
        explanation: "Albendazol é contraindicado na forma ocular."
      }
    ],
    flashcards: [
      { term: "T. solium", definition: "Escólex com ganchos, causa neurocisticercose" },
      { term: "T. saginata", definition: "Escólex sem ganchos, hospedeiro bovino" },
      { term: "Cisticercose", definition: "Ingestão de ovos de T. solium" },
      { term: "Neurocisticercose", definition: "Cisticercos no sistema nervoso" },
      { term: "Diagnóstico", definition: "Proglotes nas fezes, TC para SNC" }
    ]
  },
  {
    id: 3,
    name: "Leishmania (Tegumentar / Visceral) 🦟",
    briefing: "Protozoário heteroxênico: promastigota no vetor e amastigota em macrófagos. Formas tegumentar e visceral.",
    questions: [
      {
        id: 1,
        question: "🦟 Vetor biológico?",
        options: ["Aedes", "Flebotomíneo", "Anopheles", "Culex"],
        correct: 1,
        explanation: "Flebotomíneo transmite Leishmania."
      },
      {
        id: 2,
        question: "🔄 Forma infectante ao humano?",
        options: ["Amastigota", "Promastigota metacíclica", "Cisto", "Trofozoíto"],
        correct: 1,
        explanation: "Promastigota metacíclica é inoculada pelo vetor."
      },
      {
        id: 3,
        question: "🏥 Teste de Montenegro detecta?",
        options: ["Leishmania visceral", "Tegumentar", "Cisticercose", "Giardíase"],
        correct: 1,
        explanation: "Montenegro é positivo na forma tegumentar."
      },
      {
        id: 4,
        question: "🩸 Sintomas de LV?",
        options: ["Úlceras cutâneas", "Hepatoesplenomegalia", "Prurido anal", "Diarreia crônica"],
        correct: 1,
        explanation: "LV causa aumento do fígado e baço."
      },
      {
        id: 5,
        question: "⚔️ Tratamento de escolha para LV?",
        options: ["Anfotericina B lipossomal", "Mebendazol", "Ivermectina", "Pamoato de pirantel"],
        correct: 0,
        explanation: "Anfotericina B lipossomal é eficaz na LV."
      },
      {
        id: 6,
        question: "🔍 Diagnóstico por PCR detecta?",
        options: ["DNA do protozoário", "Anticorpos", "Ovos", "Larvas"],
        correct: 0,
        explanation: "PCR amplifica DNA específico da Leishmania."
      },
      {
        id: 7,
        question: "🩹 Sintomas de LT?",
        options: ["Úlceras cutâneas", "Hepatite", "Anemia", "Hemorragia"],
        correct: 0,
        explanation: "LT causa úlceras na pele (úlcera de Bauru)."
      },
      {
        id: 8,
        question: "🐕 Reservatório importante em LV?",
        options: ["Ratos", "Cães", "Bovinos", "Suínos"],
        correct: 1,
        explanation: "Cães são o principal reservatório urbano."
      },
      {
        id: 9,
        question: "📈 Método sorológico usado?",
        options: ["ELISA", "Kato-Katz", "Graham", "Baermann"],
        correct: 0,
        explanation: "ELISA detecta anticorpos anti-Leishmania."
      },
      {
        id: 10,
        question: "🔬 Forma intracelular?",
        options: ["Promastigota", "Amastigota", "Trofozoíto", "Cisto"],
        correct: 1,
        explanation: "Amastigota vive dentro de macrófagos."
      }
    ],
    flashcards: [
      { term: "LT", definition: "Leishmaniose Tegumentar - úlceras cutâneas" },
      { term: "LV", definition: "Leishmaniose Visceral - hepatoesplenomegalia" },
      { term: "Vetor", definition: "Flebotomíneo (mosquito-palha)" },
      { term: "Amastigota", definition: "Forma intracelular nos macrófagos" },
      { term: "Montenegro", definition: "Teste intradérmico para LT" }
    ]
  },
  {
    id: 4,
    name: "Enterobius vermicularis 🎯",
    briefing: "Nematódeo monoxênico de reprodução perianal. Ovos em D causam intenso prurido noturno.",
    questions: [
      {
        id: 1,
        question: "🎯 Método de escolha para diagnóstico?",
        options: ["Hemograma", "Graham (fita)", "Baermann", "PCR"],
        correct: 1,
        explanation: "Fita adesiva captura ovos na região perianal."
      },
      {
        id: 2,
        question: "🛏️ Sintoma mais prevalente?",
        options: ["Diarreia", "Prurido anal", "Febre", "Tosse"],
        correct: 1,
        explanation: "Prurido anal noturno é característico."
      },
      {
        id: 3,
        question: "🥚 Formato do ovo?",
        options: ["Esférico", "D (achatado)", "Oval", "Cônico"],
        correct: 1,
        explanation: "Ovo tem formato de D assimétrico."
      },
      {
        id: 4,
        question: "🔄 Autoinfecção interna é comum?",
        options: ["Sim", "Não", "Parcial", "Frequente"],
        correct: 1,
        explanation: "Autoinfecção interna é rara e excepcional."
      },
      {
        id: 5,
        question: "💊 Tratamento em toda família?",
        options: ["Albendazol", "Metronidazol", "Ivermectina", "Tiabendazol"],
        correct: 0,
        explanation: "Albendazol trata toda a família simultaneamente."
      },
      {
        id: 6,
        question: "🧼 Medida profilática chave?",
        options: ["Uso de calçados", "Lavagem de mãos", "Desinfecção alimentar", "Filtro de água"],
        correct: 1,
        explanation: "Higiene das mãos previne reinfecção."
      },
      {
        id: 7,
        question: "🚼 Idade mais afetada?",
        options: ["Adultos", "Crianças", "Idosos", "Gestantes"],
        correct: 1,
        explanation: "Crianças são mais susceptíveis."
      },
      {
        id: 8,
        question: "🌙 Prurido piora à noite?",
        options: ["Sim", "Não", "Indiferente", "Pouco"],
        correct: 0,
        explanation: "Fêmeas fazem oviposição à noite."
      },
      {
        id: 9,
        question: "🔬 Exame de fezes é sensível?",
        options: ["Sim", "Não", "Parcial", "Excelente"],
        correct: 1,
        explanation: "Ovos raramente aparecem nas fezes."
      },
      {
        id: 10,
        question: "📋 Medida adicional de profilaxia?",
        options: ["Corte de unhas", "Vacinação", "Quimioprofilaxia", "Homeopatia"],
        correct: 0,
        explanation: "Unhas curtas evitam acúmulo de ovos."
      }
    ],
    flashcards: [
      { term: "Oxiuríase", definition: "Infecção por Enterobius vermicularis" },
      { term: "Graham", definition: "Fita adesiva para capturar ovos" },
      { term: "Prurido noturno", definition: "Sintoma clássico da oxiuríase" },
      { term: "Autoinfecção", definition: "Ciclo mão-boca muito comum" },
      { term: "Família", definition: "Tratar todos os membros simultaneamente" }
    ]
  },
  {
    id: 5,
    name: "Giardia lamblia 💧",
    briefing: "Protozoário monoxênico causador de diarreia esteatorreica e má absorção intestinal.",
    questions: [
      {
        id: 1,
        question: "💧 Forma infectante?",
        options: ["Trofozoíto", "Cisto", "Oocisto", "Esporozoíto"],
        correct: 1,
        explanation: "Cistos resistem ao ambiente e infectam."
      },
      {
        id: 2,
        question: "🤢 Tipo de diarreia característica?",
        options: ["Sanguinolenta", "Esteatorreica", "Mucosa", "Aquosa"],
        correct: 1,
        explanation: "Diarreia gordurosa por má absorção."
      },
      {
        id: 3,
        question: "🔬 Habitat no hospedeiro?",
        options: ["Cólon", "Duodeno e jejuno", "Íleo", "Estômago"],
        correct: 1,
        explanation: "Trofozoítos aderem ao duodeno/jejuno."
      },
      {
        id: 4,
        question: "💊 Tratamento de escolha?",
        options: ["Albendazol", "Metronidazol", "Ivermectina", "Praziquantel"],
        correct: 1,
        explanation: "Metronidazol é eficaz contra Giardia."
      },
      {
        id: 5,
        question: "🦠 Quantidade mínima infectante?",
        options: ["1-10 cistos", "10-100 cistos", "100-1000 cistos", "1000+ cistos"],
        correct: 1,
        explanation: "Poucos cistos são suficientes para infecção."
      },
      {
        id: 6,
        question: "🚰 Principal via de transmissão?",
        options: ["Picada de inseto", "Água contaminada", "Penetração cutânea", "Inalação"],
        correct: 1,
        explanation: "Água e alimentos contaminados com cistos."
      },
      {
        id: 7,
        question: "📊 Morfologia do trofozoíto?",
        options: ["Esférico", "Piriforme", "Oval", "Triangular"],
        correct: 1,
        explanation: "Formato de pera com simetria bilateral."
      },
      {
        id: 8,
        question: "🎯 Estrutura de adesão?",
        options: ["Flagelos", "Disco adesivo ventral", "Ventosas", "Ganchos"],
        correct: 1,
        explanation: "Disco adesivo fixa o parasita à mucosa."
      },
      {
        id: 9,
        question: "🐕 Transmissão animal-pessoa?",
        options: ["Impossível", "Possível", "Rara", "Frequente"],
        correct: 1,
        explanation: "Zoonose com cães e gatos como fontes."
      },
      {
        id: 10,
        question: "🔬 Número de núcleos do cisto?",
        options: ["1", "2", "4", "8"],
        correct: 2,
        explanation: "Cisto maduro tem 4 núcleos."
      }
    ],
    flashcards: [
      { term: "Giardíase", definition: "Infecção por Giardia lamblia" },
      { term: "Esteatorreia", definition: "Diarreia com gordura" },
      { term: "Disco adesivo", definition: "Estrutura de fixação à mucosa" },
      { term: "Zoonose", definition: "Transmissão de animais para humanos" },
      { term: "Metronidazol", definition: "Medicamento de escolha" }
    ]
  },
  {
    id: 6,
    name: "Trichomonas vaginalis 🔬",
    briefing: "Protozoário flagelado causador de vaginite com leucorreia característica amarelo-esverdeada.",
    questions: [
      {
        id: 1,
        question: "🔬 Único estágio do ciclo?",
        options: ["Cisto", "Trofozoíto", "Oocisto", "Esporozoíto"],
        correct: 1,
        explanation: "Trichomonas não forma cistos."
      },
      {
        id: 2,
        question: "👩 Sintoma feminino característico?",
        options: ["Dor abdominal", "Leucorreia amarelo-esverdeada", "Febre", "Náusea"],
        correct: 1,
        explanation: "Corrimento com odor fétido é típico."
      },
      {
        id: 3,
        question: "👨 Sintomas masculinos?",
        options: ["Sempre sintomático", "Frequentemente assintomático", "Nunca assintomático", "Febre alta"],
        correct: 1,
        explanation: "Homens são geralmente assintomáticos."
      },
      {
        id: 4,
        question: "💉 Via de transmissão principal?",
        options: ["Água", "Relação sexual", "Alimentos", "Picada"],
        correct: 1,
        explanation: "DST transmitida por contato sexual."
      },
      {
        id: 5,
        question: "💊 Tratamento de escolha?",
        options: ["Fluconazol", "Metronidazol", "Doxiciclina", "Azitromicina"],
        correct: 1,
        explanation: "Metronidazol trata Trichomonas."
      },
      {
        id: 6,
        question: "👫 Tratamento do parceiro?",
        options: ["Desnecessário", "Obrigatório", "Opcional", "Raramente"],
        correct: 1,
        explanation: "Ambos devem ser tratados simultaneamente."
      },
      {
        id: 7,
        question: "🦠 Localização da infecção?",
        options: ["Apenas vagina", "Trato genitourinário", "Intestino", "Fígado"],
        correct: 1,
        explanation: "Afeta todo o sistema genitourinário."
      },
      {
        id: 8,
        question: "🔬 Diagnóstico preferencial?",
        options: ["Sorologia", "Exame direto a fresco", "PCR", "Cultura"],
        correct: 1,
        explanation: "Visualização da motilidade a fresco."
      },
      {
        id: 9,
        question: "⚠️ Complicação na gravidez?",
        options: ["Malformações", "Ruptura prematura de membranas", "Aborto", "Diabetes"],
        correct: 1,
        explanation: "Pode causar parto prematuro."
      },
      {
        id: 10,
        question: "🦟 Presença de mitocôndrias?",
        options: ["Sim", "Não", "Parcial", "Vestigial"],
        correct: 1,
        explanation: "Trichomonas não possui mitocôndrias."
      }
    ],
    flashcards: [
      { term: "Tricomoníase", definition: "DST por Trichomonas vaginalis" },
      { term: "Leucorreia", definition: "Corrimento vaginal patológico" },
      { term: "Assintomático", definition: "Homens raramente apresentam sintomas" },
      { term: "Tratamento", definition: "Metronidazol para ambos parceiros" },
      { term: "Motilidade", definition: "Movimento flagelado visível a fresco" }
    ]
  },
  {
    id: 7,
    name: "Trichuris trichiura 🪱",
    briefing: "Nematódeo monoxênico causador de tricuríase, com predileção pelo intestino grosso.",
    questions: [
      {
        id: 1,
        question: "🪱 Formato corporal característico?",
        options: ["Cilíndrico", "Chicote", "Esférico", "Achatado"],
        correct: 1,
        explanation: "Corpo em forma de chicote."
      },
      {
        id: 2,
        question: "🎯 Local de parasitismo?",
        options: ["Duodeno", "Jejuno", "Intestino grosso", "Estômago"],
        correct: 2,
        explanation: "Ceco e cólon ascendente preferenciais."
      },
      {
        id: 3,
        question: "💩 Sintoma de infecção grave?",
        options: ["Constipação", "Síndrome disentérica", "Vômitos", "Febre"],
        correct: 1,
        explanation: "Diarreia com sangue e muco."
      },
      {
        id: 4,
        question: "🚼 Complicação em crianças?",
        options: ["Convulsões", "Prolapso retal", "Cegueira", "Surdez"],
        correct: 1,
        explanation: "Prolapso retal em infecções intensas."
      },
      {
        id: 5,
        question: "🔬 Método diagnóstico?",
        options: ["Graham", "Kato-Katz", "Baermann", "PCR"],
        correct: 1,
        explanation: "Kato-Katz conta ovos nas fezes."
      },
      {
        id: 6,
        question: "💊 Tratamento eficaz?",
        options: ["Metronidazol", "Albendazol", "Ivermectina", "Praziquantel"],
        correct: 1,
        explanation: "Albendazol é eficaz contra Trichuris."
      },
      {
        id: 7,
        question: "🥚 Tempo de maturação do ovo?",
        options: ["1 semana", "2-4 semanas", "2 meses", "6 meses"],
        correct: 1,
        explanation: "Ovos embrionam em 2-4 semanas no solo."
      },
      {
        id: 8,
        question: "🌍 Distribuição geográfica?",
        options: ["Temperado", "Tropical/subtropical", "Ártico", "Desértico"],
        correct: 1,
        explanation: "Regiões quentes e úmidas favorecem."
      },
      {
        id: 9,
        question: "👶 População mais afetada?",
        options: ["Adultos", "Crianças", "Idosos", "Gestantes"],
        correct: 1,
        explanation: "Crianças em idade escolar."
      },
      {
        id: 10,
        question: "🩸 Complicação hematológica?",
        options: ["Leucemia", "Anemia", "Trombose", "Hemofilia"],
        correct: 1,
        explanation: "Anemia por sangramento intestinal."
      }
    ],
    flashcards: [
      { term: "Tricuríase", definition: "Infecção por Trichuris trichiura" },
      { term: "Chicote", definition: "Formato corporal característico" },
      { term: "Disenteria", definition: "Diarreia com sangue e muco" },
      { term: "Prolapso", definition: "Exteriorização do reto" },
      { term: "Geofagia", definition: "Hábito de comer terra (fator de risco)" }
    ]
  },
  {
    id: 8,
    name: "Casos Clínicos Integrados 🏥",
    briefing: "Fase final com casos clínicos completos integrando conhecimento de parasitologia médica.",
    questions: [
      {
        id: 1,
        question: "🏥 CASO 1: Paciente de 8 anos, rural, apresenta prurido anal noturno intenso, irritabilidade e insônia há 2 semanas. Mãe relata que a criança 'range os dentes' à noite. Qual o método diagnóstico mais adequado?",
        options: ["Exame parasitológico de fezes", "Método de Graham (fita adesiva)", "Hemograma com eosinófilos", "Coprocultura"],
        correct: 1,
        explanation: "Enterobius vermicularis - Graham é específico para ovos perianais."
      },
      {
        id: 2,
        question: "🏥 CASO 1 (cont.): Confirmado o diagnóstico. Qual a conduta terapêutica mais apropriada?",
        options: ["Tratar apenas a criança", "Tratar criança e repetir em 14 dias",  "Tratar toda família simultaneamente", "Agu ardar resolução espontânea"],
        correct: 2,
        explanation: "Enterobius - toda família deve ser tratada para evitar reinfecção."
      },
      {
        id: 3,
        question: "🏥 CASO 1 (cont.): Principal medida profilática para evitar reinfecção?",
        options: ["Desinfeção com cloro", "Higiene rigorosa das mãos", "Isolamento do paciente", "Uso de calçados"],
        correct: 1,
        explanation: "Higiene das mãos quebra o ciclo de autoinfecção."
      },
      {
        id: 4,
        question: "🏥 CASO 2: Mulher de 25 anos com leucorreia amarelo-esverdeada, odor fétido e prurido vulvar há 1 mês. Nega outras DSTs. Parceiro assintomático. Qual o agente mais provável?",
        options: ["Candida albicans", "Trichomonas vaginalis", "Gardnerella vaginalis", "Chlamydia trachomatis"],
        correct: 1,
        explanation: "Trichomonas - corrimento característico amarelo-esverdeado."
      },
      {
        id: 5,
        question: "🏥 CASO 2 (cont.): Conduta terapêutica adequada?",
        options: ["Tratar apenas a paciente", "Tratar paciente e parceiro", "Cultura antes do tratamento", "Aguardar exames complementares"],
        correct: 1,
        explanation: "DST - ambos parceiros devem ser tratados simultaneamente."
      },
      {
        id: 6,
        question: "🏥 CASO 2 (cont.): Medicamento de escolha?",
        options: ["Fluconazol", "Metronidazol", "Azitromicina", "Clindamicina"],
        correct: 1,
        explanation: "Metronidazol é específico para Trichomonas."
      },
      {
        id: 7,
        question: "🏥 CASO 3: Homem de 45 anos, imunossuprimido, apresenta diarreia crônica, prurido cutâneo e tosse há 3 meses. Eosinofilia de 15%. História de andar descalço. Qual parasita suspeitar?",
        options: ["Giardia lamblia", "Strongyloides stercoralis", "Entamoeba histolytica", "Cryptosporidium"],
        correct: 1,
        explanation: "Strongyloides - tríade clássica em imunossuprimido."
      },
      {
        id: 8,
        question: "🏥 CASO 3 (cont.): Método diagnóstico de escolha?",
        options: ["Exame direto de fezes", "Cultura em placa de ágar", "Sorologia", "Coproantígenos"],
        correct: 1,
        explanation: "Cultura em ágar é método padrão-ouro para Strongyloides."
      },
      {
        id: 9,
        question: "🏥 CASO 3 (cont.): Tratamento mais eficaz?",
        options: ["Albendazol", "Ivermectina", "Mebendazol", "Tiabendazol"],
        correct: 1,
        explanation: "Ivermectina é considerada tratamento de escolha."
      },
      {
        id: 10,
        question: "🏥 CASO 4: Criança de 6 anos com diarreia gordurosa persistente, cólicas abdominais e perda de peso após viagem. Fezes com aspecto oleoso. Qual o agente mais provável?",
        options: ["Rotavirus", "Giardia lamblia", "Salmonella sp", "Shigella sp"],
        correct: 1,
        explanation: "Giardia - diarreia esteatorreica é característica."
      }
    ],
    flashcards: [
      { term: "Caso clínico", definition: "Integração de sinais, sintomas e contexto" },
      { term: "Diagnóstico diferencial", definition: "Análise comparativa de possibilidades" },
      { term: "Abordagem familiar", definition: "Tratamento de contactantes quando indicado" },
      { term: "Paciente imunossuprimido", definition: "Risco de infecções oportunistas" },
      { term: "Esteatorreia", definition: "Diarreia com gordura - má absorção" }
    ]
  }
];
