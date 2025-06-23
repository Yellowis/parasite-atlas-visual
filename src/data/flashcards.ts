export interface Flashcard {
  id: number;
  front: string;
  back: string;
  category: string;
}

export const flashcardsData: Flashcard[] = [
  // Giardia lamblia
  {
    id: 1,
    front: "Quais são as formas evolutivas de Giardia lamblia?",
    back: "Trofozoíto e Cisto.",
    category: "Giardia lamblia"
  },
  {
    id: 2,
    front: "Qual o tipo de ciclo biológico de Giardia lamblia?",
    back: "Monoxênico.",
    category: "Giardia lamblia"
  },
  {
    id: 3,
    front: "Explique o ciclo biológico de Giardia lamblia",
    back: "Cistos são ingeridos e, no estômago, o pH ácido induz o processo de excistação. No duodeno, sob ação de enzimas pancreáticas, os cistos se rompem, liberando trofozoítos. Os trofozoítos se multiplicam por fissão binária longitudinal e, ao chegarem ao intestino grosso, se encistam novamente para serem eliminados nas fezes.",
    category: "Giardia lamblia"
  },
  {
    id: 4,
    front: "Qual a forma morfológica reprodutiva de Giardia lamblia?",
    back: "Trofozoíto (multiplica-se por fissão binária).",
    category: "Giardia lamblia"
  },
  {
    id: 5,
    front: "Qual a forma infectante de Giardia lamblia?",
    back: "Cisto.",
    category: "Giardia lamblia"
  },

  // Trichomonas
  {
    id: 6,
    front: "Quais as formas morfológicas de Trichomonas vaginalis?",
    back: "Apenas a forma trofozoítica. Não formam cistos.",
    category: "Trichomonas"
  },
  {
    id: 7,
    front: "Cite os mecanismos de virulência de Trichomonas vaginalis",
    back: "Possui flagelos, membrana ondulante e axóstilo que auxiliam na mobilidade e aderência. É capaz de emitir pseudópodes.",
    category: "Trichomonas"
  },
  {
    id: 8,
    front: "Quais os principais sintomas da tricomoníase feminina?",
    back: "Vaginite com leucorreia amarelo-esverdeada, odor fétido, prurido vulvovaginal, disúria, dor em relações sexuais.",
    category: "Trichomonas"
  },
  {
    id: 9,
    front: "Quais os principais sintomas da tricomoníase masculina?",
    back: "Frequentemente assintomática. Quando sintomática: Uretrite, prurido uretral, secreção matinal.",
    category: "Trichomonas"
  },
  {
    id: 10,
    front: "Por que os sintomas da tricomoníase se intensificam durante a menstruação?",
    back: "Os sintomas pioram durante a menstruação devido ao aumento de ferro. O ferro estimula o parasita a produzir mais fatores de virulência, como adesinas e proteases, tornando-o mais agressivo.",
    category: "Trichomonas"
  },

  // Taenia
  {
    id: 11,
    front: "Quais as espécies de Taenia de importância clínica e seus hospedeiros intermediários?",
    back: "Taenia solium: Hospedeiro intermediário é o suíno. Taenia saginata: Hospedeiro intermediário é o bovino.",
    category: "Taenia"
  },
  {
    id: 12,
    front: "O que é cisticercose?",
    back: "É a infecção humana causada pela ingestão acidental de ovos de Taenia solium, onde as larvas (cisticercos) se desenvolvem em diversos tecidos, como músculos, subcutâneo, olhos e, de forma mais grave, no Sistema Nervoso Central (Neurocisticercose).",
    category: "Taenia"
  },
  {
    id: 13,
    front: "O que é teníase?",
    back: "É a infecção causada pela presença do parasito adulto (Taenia solium ou Taenia saginata) no intestino delgado humano, resultante da ingestão de carne (suína ou bovina) crua ou malcozida contendo cisticercos.",
    category: "Taenia"
  },
  {
    id: 14,
    front: "Como ocorre a cisticercose no humano?",
    back: "Ocorre pela ingestão acidental de ovos de Taenia solium eliminados nas fezes de um portador de teníase. Pode ser por autoinfecção externa (mãos contaminadas), autoinfecção interna (controversa: vômitos ou retroperistaltismo) ou heteroinfecção (alimentos/água contaminados por fezes de outro indivíduo portador de teníase).",
    category: "Taenia"
  },
  {
    id: 15,
    front: "Como ocorre a teníase no humano?",
    back: "Ocorre pela ingestão de carne suína ou bovina crua ou malcozida contendo cisticercos.",
    category: "Taenia"
  },
  {
    id: 16,
    front: "Qual a estrutura morfológica geral da Taenia?",
    back: "Corpo achatado dorsoventralmente, hermafroditas. Possuem um escólex (órgão de fixação, com ou sem ganchos) e proglotes (segmentos do estróbilo com órgãos reprodutores).",
    category: "Taenia"
  },
  {
    id: 17,
    front: "Qual o nome da estrutura de Taenia que se desprende do corpo carregada de ovos?",
    back: "Proglote (grávida).",
    category: "Taenia"
  },
  {
    id: 18,
    front: "O que é autoinfecção externa na cisticercose?",
    back: "O próprio indivíduo, portador de teníase, contamina as mãos com ovos de T. solium presentes nas fezes e os leva à boca, ingerindo-os e desenvolvendo cisticercose.",
    category: "Taenia"
  },
  {
    id: 19,
    front: "O que é heteroinfecção na cisticercose?",
    back: "Ingestão de ovos de T. solium por meio de alimentos ou água contaminados pelas fezes de outro indivíduo portador de teníase.",
    category: "Taenia"
  },
  {
    id: 20,
    front: "Cite medicamentos para tratar teníase",
    back: "Niclosamida e Praziquantel.",
    category: "Taenia"
  },

  // Enterobius vermicularis
  {
    id: 21,
    front: "Descreva o ciclo biológico de Enterobius vermicularis",
    back: "As fêmeas grávidas migram do ceco para a região perianal para a oviposição. Os ovos depositados se tornam infectantes no ambiente em poucas horas. A infecção ocorre pela ingestão desses ovos embrionados. As larvas eclodem no intestino delgado, migram e se desenvolvem em vermes adultos no ceco e apêndice cecal.",
    category: "Enterobius vermicularis"
  },
  {
    id: 22,
    front: "Qual a principal sintomatologia da infecção por Enterobius vermicularis?",
    back: "Prurido anal/perianal, intenso à noite, que pode causar insônia, irritabilidade, bruxismo e pesadelos. Em infecções maciças, náuseas, vômitos e dores abdominais.",
    category: "Enterobius vermicularis"
  },
  {
    id: 23,
    front: "Qual o método mais adequado para identificar Enterobius vermicularis?",
    back: "Método da fita adesiva ou de Graham, realizado pela manhã, antes do banho.",
    category: "Enterobius vermicularis"
  },
  {
    id: 24,
    front: "Quais as formas de transmissão de Enterobius vermicularis?",
    back: "Ingestão de ovos (contato fecal-oral direto ou indireto por alimentos, poeira, fômites), autoinfecção externa (mãos contaminadas), autoinfecção interna (rara) e retroinfecção (larvas eclodidas na região perianal adentram o ânus).",
    category: "Enterobius vermicularis"
  },
  {
    id: 25,
    front: "Cite medidas profiláticas para prevenir Enterobius vermicularis",
    back: "Higiene pessoal (corte de unhas, lavagem frequente das mãos), banho diário, lavagem diária de roupas íntimas e de cama, desestimular a coceira na região perianal e levar as mãos à boca, limpeza doméstica regular e tratamento de todas as pessoas da família ou coletividade.",
    category: "Enterobius vermicularis"
  },

  // Strongyloides stercoralis
  {
    id: 26,
    front: "Descreva o ciclo direto de Strongyloides stercoralis",
    back: "Larvas filarioides (L3) penetram a pele, migram para os pulmões, são deglutidas e se desenvolvem em fêmeas partenogenéticas no intestino. Os ovos eclodem em larvas rabditoides (L1) na mucosa intestinal, que são eliminadas nas fezes ou se transformam diretamente em L3 infectantes no ambiente.",
    category: "Strongyloides stercoralis"
  },
  {
    id: 27,
    front: "Descreva o ciclo indireto de Strongyloides stercoralis",
    back: "Larvas rabditoides (L1) eliminadas nas fezes podem se desenvolver no solo em fêmeas e machos de vida livre. Estes se reproduzem sexuadamente, produzindo ovos que eclodem em novas larvas rabditoides (L1), as quais se transformam em larvas filarioides (L3) infectantes.",
    category: "Strongyloides stercoralis"
  },
  {
    id: 28,
    front: "Quais as formas de transmissão de Strongyloides stercoralis?",
    back: "Heteroinfecção (primoinfecção): Penetração de larvas L3 através da pele ou mucosas. Autoinfecção externa: Larvas rabditoides na região perianal transformam-se em L3. Autoinfecção interna: Larvas rabditoides na luz intestinal transformam-se em L3 e penetram a mucosa intestinal.",
    category: "Strongyloides stercoralis"
  },
  {
    id: 29,
    front: "Quais os mecanismos patogênicos de Strongyloides stercoralis?",
    back: "Cutânea: Prurido, eritema, urticária. Pulmonar: Tosse, febre, dispneia, crises asmatiformes, broncopneumonia. Intestinal: Dor epigástrica, diarreia, náusea, vômito, enterite. Hiperinfecção/Disseminada: Em imunocomprometidos, as larvas atingem múltiplos órgãos, podendo ser fatal.",
    category: "Strongyloides stercoralis"
  },
  {
    id: 30,
    front: "Quais os métodos para diagnóstico de Strongyloides stercoralis?",
    back: "Pesquisa de larvas nas fezes (Métodos de Baermann-Moraes e Rugai), cultura em placa de ágar (método de escolha), pesquisa de larvas em secreções e líquidos orgânicos, biópsia, hemograma (eosinofilia), métodos imunológicos e PCR.",
    category: "Strongyloides stercoralis"
  },

  // Leishmania
  {
    id: 31,
    front: "Qual o agente etiológico da Leishmaniose?",
    back: "Protozoário do gênero Leishmania.",
    category: "Leishmania"
  },
  {
    id: 32,
    front: "Qual o vetor da Leishmaniose?",
    back: "Fêmea do flebotomíneo (mosquito-palha, birigui, tatuquira), dos gêneros Lutzomyia (Américas) e Phlebotomus (África, Europa, Ásia).",
    category: "Leishmania"
  },
  {
    id: 33,
    front: "Quais as formas morfológicas do parasita causador da Leishmaniose?",
    back: "Amastigota: Imóvel, esférica, intracelular (em macrófagos do hospedeiro vertebrado). Promastigota: Móvel, flagelada, extracelular (no tubo digestivo do vetor, forma infectante).",
    category: "Leishmania"
  },
  {
    id: 34,
    front: "Como se divide a Leishmaniose de acordo com as manifestações clínicas?",
    back: "Leishmaniose Tegumentar (LT): Lesões cutâneas, mucocutâneas, cutânea difusa. Leishmaniose Visceral (LV): Acometimento sistêmico com febre de longa duração, hepatoesplenomegalia, perda de peso, fraqueza, anemia.",
    category: "Leishmania"
  },
  {
    id: 35,
    front: "Descreva o ciclo biológico da Leishmania",
    back: "É um ciclo heteroxênico. A fêmea do flebotomíneo infectada pica o hospedeiro vertebrado e inocula as promastigotas metacíclicas. Estas são fagocitadas por macrófagos e se transformam em amastigotas, que se multiplicam. O flebotomíneo ingere macrófagos infectados; no vetor, as amastigotas se transformam em promastigotas.",
    category: "Leishmania"
  },
  {
    id: 36,
    front: "Quais testes são utilizados no diagnóstico da Leishmaniose tegumentar?",
    back: "Teste intradérmico de Montenegro (IDRM), pesquisa direta do parasito (escarificação, biópsia), cultivo in vitro, PCR.",
    category: "Leishmania"
  },
  {
    id: 37,
    front: "Quais testes são utilizados no diagnóstico da Leishmaniose visceral?",
    back: "Métodos parasitológicos (punção de vísceras: baço, medula óssea), pesquisa de parasitas no sangue/pele, cultura, métodos sorológicos e imunológicos (ELISA, IFI), PCR.",
    category: "Leishmania"
  },

  // Trichuris trichiura
  {
    id: 38,
    front: "Descreva o ciclo biológico de Trichuris trichiura",
    back: "Ovos são eliminados nas fezes e necessitam de condições ambientais (temperatura, umidade) para embrionarem e se tornarem infectantes. A infecção ocorre pela ingestão de ovos embrionados. As larvas eclodem no intestino delgado e se desenvolvem em vermes adultos no intestino grosso (ceco, cólon ascendente).",
    category: "Trichuris trichiura"
  },
  {
    id: 39,
    front: "Qual a patogenia por trás do prolapso retal ocasionado por Trichuris trichiura?",
    back: "O prolapso retal em casos graves de tricuriose é causado pela inflamação crônica e irritação da mucosa do reto devido à grande carga parasitária, levando a tenesmo intenso e persistente. A desnutrição e a perda de tônus muscular facilitam a exteriorização da mucosa retal durante os esforços evacuatórios.",
    category: "Trichuris trichiura"
  }
];
