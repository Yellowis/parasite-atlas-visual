
export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation?: string;
}

export const quizPhase1: QuizQuestion[] = [
  {
    id: 1,
    question: "Sobre **Giardia lamblia**, qual das seguintes afirmações está correta?",
    options: [
      "O trofozoíto é a forma infectante e sobrevive por longos períodos no ambiente.",
      "A forma reprodutiva multiplica-se por fissão binária longitudinal no intestino delgado.",
      "O cisto só se forma dentro do hospedeiro e não é eliminado nas fezes.",
      "O ciclo biológico é heteroxênico, envolvendo vertebrados e invertebrados intermediários."
    ],
    correctAnswer: 1
  },
  {
    id: 2,
    question: "A respeito da forma infectante de **Giardia lamblia**, assinale a opção correta:",
    options: [
      "Trofozoíto, pois adere à mucosa intestinal e sobrevive fora do hospedeiro.",
      "Cisto, por sua resistência a condições adversas e eliminação nas fezes.",
      "Pseudópode, liberado no meio externo para sobrevivência prolongada.",
      "Promastigota, liberada pelo vetor após picada."
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "Qual característica **não** se aplica a **Trichomonas vaginalis**?",
    options: [
      "Possui apenas forma trofozoítica.",
      "Forma cistos resistentes no ambiente.",
      "Emite pseudópodes para aderência.",
      "Tem membrana ondulante que auxilia na mobilidade."
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: "O agravamento dos sintomas da tricomoníase no período menstrual se deve principalmente a:",
    options: [
      "Aumento de ferro disponível, estimulando produção de adesinas e proteases.",
      "Queda no pH vaginal, que enfraquece a resposta imune local.",
      "Maior proliferação de cistos que se formam durante a menstruação.",
      "Liberação de hormônios antiflagelados que favorecem o parasito."
    ],
    correctAnswer: 0
  },
  {
    id: 5,
    question: "Sobre **Taenia solium** e **Taenia saginata**, assinale a alternativa verdadeira:",
    options: [
      "Ambas têm suíno como hospedeiro intermediário.",
      "T. saginata causa cisticercose em seres humanos.",
      "T. solium utiliza o porco como hospedeiro intermediário.",
      "Somente T. saginata libera ovos nas proglotes grávidas."
    ],
    correctAnswer: 2
  },
  {
    id: 6,
    question: "A ingestão de carne malcozida contendo cisticercos causa em humanos:",
    options: [
      "Teníase, por estabelecimento do parasito adulto no intestino.",
      "Cisticercose, devido à eclosão de ovos ingeridos.",
      "Heteroinfecção externa, por autoinfecção das mãos.",
      "Neuroenterobíase, por migração de proglotes."
    ],
    correctAnswer: 0
  },
  {
    id: 7,
    question: "Qual processo representa **autoinfecção externa** na cisticercose?",
    options: [
      "Ingestão de ovos pelo próprio indivíduo após contaminação das mãos.",
      "Migração de larvas L3 pela mucosa intestinal.",
      "Ingestão de carne suína contaminada.",
      "Penetração de larvas pela pele."
    ],
    correctAnswer: 0
  },
  {
    id: 8,
    question: "Em **Enterobius vermicularis**, o método mais indicado para diagnóstico é:",
    options: [
      "Pesquisa de ovos em amostra de fezes.",
      "Fita adesiva perianal, realizada pela manhã.",
      "Exame de sangue para eosinofilia.",
      "PCR em biópsia de ceco."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "A principal sintomatologia da enterobíase inclui:",
    options: [
      "Prurido anal noturno intenso.",
      "Hepatoesplenomegalia e febre prolongada.",
      "Lesões ulceradas na pele.",
      "Diarreia aquosa crônica."
    ],
    correctAnswer: 0
  },
  {
    id: 10,
    question: "Qual das seguintes é **forma de transmissão** do *Enterobius vermicularis*?",
    options: [
      "Picada de inseto vetorial.",
      "Ingestão de ovos embrionados via fômites.",
      "Penetração de larvas pela pele.",
      "Consumo de carne malcozida."
    ],
    correctAnswer: 1
  },
  // Continuando com as outras 40 perguntas...
  {
    id: 11,
    question: "Sobre **Strongyloides stercoralis**, o ciclo direto inclui:",
    options: [
      "Fêmeas partenogenéticas no solo que liberam ovos.",
      "Larvas filarioides que penetram a pele e migram aos pulmões.",
      "Vetores artrópodes transmitindo promastigotas.",
      "Proglotes grávidas eliminando ovos."
    ],
    correctAnswer: 1
  },
  {
    id: 12,
    question: "No ciclo indireto de *Strongyloides*, ocorre:",
    options: [
      "Reprodução sexuada em vida livre no solo.",
      "Transformação de trofozoítos em cistos.",
      "Fecundação interna nas proglotes.",
      "Multiplicação de amastigotas em macrófagos."
    ],
    correctAnswer: 0
  },
  {
    id: 13,
    question: "A **autoinfecção interna** (endógena) por *Strongyloides* se caracteriza por:",
    options: [
      "Larvas rabditoides na região perianal.",
      "Larvas L3 na luz intestinal invadindo a mucosa.",
      "Ingestão de ovos via água contaminada.",
      "Penetração de larvas na pele por contato com solo."
    ],
    correctAnswer: 1
  },
  {
    id: 14,
    question: "Qual mecanismo patogênico **pulmonar** de *Strongyloides* pode ocorrer?",
    options: [
      "Broncoespasmo e hemorragia alveolar.",
      "Abscesso hepático.",
      "Úlceras cutâneas.",
      "Paralisia flácida."
    ],
    correctAnswer: 0
  },
  {
    id: 15,
    question: "Nos casos de **hiperinfecção** por *Strongyloides*, observa-se:",
    options: [
      "Infecção restrita ao intestino grosso.",
      "Disseminação larval a múltiplos órgãos.",
      "Formação de cistos em tecidos profundos.",
      "Liberação de proglotes grávidas na corrente sanguínea."
    ],
    correctAnswer: 1
  },
  {
    id: 16,
    question: "Sobre **Leishmania**, assinale a verdade:",
    options: [
      "Amastigotas são móveis e extracelulares.",
      "Promastigotas se multiplicam dentro de macrófagos.",
      "Ciclo heteroxênico com vetor flebotomíneo.",
      "Vetor principal é o mosquito Anopheles."
    ],
    correctAnswer: 2
  },
  {
    id: 17,
    question: "Na **Leishmaniose tegumentar**, um teste diagnóstico clássico é:",
    options: [
      "Montenegro intradérmico.",
      "Método de Graham.",
      "Fita adesiva perianal.",
      "Hemocultura em ágar."
    ],
    correctAnswer: 0
  },
  {
    id: 18,
    question: "Característica da **Leishmaniose visceral** é:",
    options: [
      "Lesões ulcerativas cutâneas sem febre.",
      "Hepatoesplenomegalia e anemia.",
      "Prurido anal intenso.",
      "Úlceras mucocutâneas no nariz."
    ],
    correctAnswer: 1
  },
  {
    id: 19,
    question: "Sobre o vetor da Leishmaniose nas Américas, escolha a opção correta:",
    options: [
      "Fêmea de Anopheles gambiae.",
      "Fêmea de Lutzomyia spp.",
      "Fêmea de Aedes aegypti.",
      "Macho de Phlebotomus spp."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "Em **Trichuris trichiura**, o prolapso retal ocorre devido a:",
    options: [
      "Inflamação crônica e tenesmo intenso.",
      "Formação de cistos esperando eclosão.",
      "Obstrução intestinal por proglotes.",
      "Migração larval para o sistema nervoso."
    ],
    correctAnswer: 0
  },
  {
    id: 21,
    question: "O ciclo de **Trichuris trichiura** inicia-se com:",
    options: [
      "Picada de inseto vetorial.",
      "Ingestão de ovos embrionados.",
      "Penetração de larvas L3 pela pele.",
      "Ingestão de carne malcozida contendo cisticercos."
    ],
    correctAnswer: 1
  },
  {
    id: 22,
    question: "Em **Taenia**, o escólex serve para:",
    options: [
      "Produzir ovos por partenogênese.",
      "Fixar o verme à mucosa intestinal.",
      "Nutrição do parasito por osmose.",
      "Liberar pseudópodes para locomoção."
    ],
    correctAnswer: 1
  },
  {
    id: 23,
    question: "A proglote grávida é responsável por:",
    options: [
      "Reprodução assexuada por brotamento.",
      "Eliminação de ovos ao se destacar do corpo.",
      "Produção de trofozoítos infectantes.",
      "Liberação de larvas L1 no ambiente."
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "Qual medicação **não** é usada no tratamento de teníase?",
    options: [
      "Niclosamida",
      "Praziquantel",
      "Mebendazol",
      "Albendazol"
    ],
    correctAnswer: 2
  },
  {
    id: 25,
    question: "A forma **amastigota** de Leishmania localiza-se em:",
    options: [
      "Ambiente extracelular no vetor.",
      "Interior de macrófagos no hospedeiro vertebrado.",
      "Solo contaminado por fezes.",
      "Mucosa intestinal."
    ],
    correctAnswer: 1
  },
  {
    id: 26,
    question: "No diagnóstico da Leishmaniose visceral, não se utiliza:",
    options: [
      "Punção esplênica ou medular.",
      "Pesquisa direta em escarificação.",
      "ELISA e IFI.",
      "PCR."
    ],
    correctAnswer: 1
  },
  {
    id: 27,
    question: "Em **Strongyloides**, o método de escolha para cultura de larvas nas fezes é:",
    options: [
      "Baermann-Moraes",
      "Graham",
      "Montenegro",
      "Fita adesiva"
    ],
    correctAnswer: 0
  },
  {
    id: 28,
    question: "O sintoma **intestinal** mais comum na estrongiloidíase é:",
    options: [
      "Vômitos e dor epigástrica.",
      "Hepatomegalia dolorosa.",
      "Sangue nas fezes.",
      "Erupções cutâneas difusas."
    ],
    correctAnswer: 0
  },
  {
    id: 29,
    question: "A **neurocisticercose** ocorre quando:",
    options: [
      "Proglotes se alojam no SNC.",
      "Cisticercos se desenvolvem no sistema nervoso central.",
      "Ovos são inalados e chegam ao cérebro.",
      "Trofozoítos migram via retroperistaltismo."
    ],
    correctAnswer: 1
  },
  {
    id: 30,
    question: "A **teníase** diferencia-se da **cisticercose** porque:",
    options: [
      "Envolve larvas em tecidos vs. vermes adultos no intestino.",
      "Deposição de proglotes vs. penetração de larvas pela pele.",
      "Forma amastigota vs. trofozoíto.",
      "É tratada apenas com Mebendazol vs. Niclosamida."
    ],
    correctAnswer: 0
  },
  {
    id: 31,
    question: "Em **Trichomonas hominis**, qual característica é verdadeira?",
    options: [
      "Patogênico e causa vaginite.",
      "Ausência de cistos e habita intestino.",
      "Possui ciclo heteroxênico.",
      "Forma cistos resistentes no solo."
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "A infecção por **Trichomonas tenax** ocorre principalmente em:",
    options: [
      "Trato urinário feminino.",
      "Cavidade bucal humana.",
      "Intestino delgado.",
      "Pele lesionada."
    ],
    correctAnswer: 1
  },
  {
    id: 33,
    question: "O principal sintoma masculino da tricomoníase é:",
    options: [
      "Leucorreia amarelada.",
      "Prurido uretral matinal.",
      "Prolapso retal.",
      "Anemia profunda."
    ],
    correctAnswer: 1
  },
  {
    id: 34,
    question: "Qual das seguintes espécies **não** forma cisto?",
    options: [
      "Giardia lamblia",
      "Trichomonas vaginalis",
      "Entamoeba histolytica",
      "Trichomonas hominis"
    ],
    correctAnswer: 1
  },
  {
    id: 35,
    question: "Na profilaxia da enterobíase, não se recomenda:",
    options: [
      "Banho diário e higiene das mãos.",
      "Corte de unhas e lavagem de roupas íntimas.",
      "Desestimular a coceira e levar mãos à boca.",
      "Uso de repelentes de insetos noturnos."
    ],
    correctAnswer: 3
  },
  {
    id: 36,
    question: "A **excitação de proteases e adesinas** em *T. vaginalis* ocorre por:",
    options: [
      "Aumento de ferro durante a menstruação.",
      "pH alcalino do suco gástrico.",
      "Estresse térmico do hospedeiro.",
      "Exposição à luz UV."
    ],
    correctAnswer: 0
  },
  {
    id: 37,
    question: "A forma **rabditoide** das larvas de *Strongyloides* é encontrada em:",
    options: [
      "Ambiente externo ou interior do hospedeiro antes da transformação em L3.",
      "Dentro de macrófagos.",
      "No solo como cistos protegidos.",
      "Pele do hospedeiro."
    ],
    correctAnswer: 0
  },
  {
    id: 38,
    question: "Assinale o diagnóstico mais adequado para **Leishmaniose tegumentar**:",
    options: [
      "PCR em líquido cefalorraquidiano.",
      "Teste intradérmico de Montenegro.",
      "Cultura em ágar Sabouraud.",
      "Fita adesiva perianal."
    ],
    correctAnswer: 1
  },
  {
    id: 39,
    question: "A multiplicação de **Giardia lamblia** no hospedeiro ocorre:",
    options: [
      "Por brotamento em cistos.",
      "Por fissão binária longitudinal nos trofozoítos.",
      "Em vesículas intracelulares.",
      "Dentro de proglotes grávidas."
    ],
    correctAnswer: 1
  },
  {
    id: 40,
    question: "No **ciclo heteroxênico** de Taenia, o hospedeiro intermediário ingere:",
    options: [
      "Ovos eliminados nas fezes.",
      "Larvas L3 presentes na água.",
      "Trofozoítos de vetor.",
      "Promastigotas do vetor."
    ],
    correctAnswer: 0
  },
  {
    id: 41,
    question: "A **praziquantel** é eficaz porque:",
    options: [
      "Inibe a liberação de pseudópodes.",
      "Provoca espasmos musculares no parasito.",
      "Bloqueia a fissão binária.",
      "Neutraliza o ferro livre."
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "As **fêmeas grávidas** de *Enterobius* migram para:",
    options: [
      "Intestino grosso para oviposição interna.",
      "Região perianal para depositar ovos.",
      "Fígado para induzir fibrose.",
      "Sistema nervoso central."
    ],
    correctAnswer: 1
  },
  {
    id: 43,
    question: "A **neuroestrongiloidíase** pode ocorrer por:",
    options: [
      "Migração de larvas L3 para o SNC em imunocomprometidos.",
      "Ingestão de cistos de Taenia.",
      "Picada de flebotomíneo.",
      "Autoinfecção externa de Enterobius."
    ],
    correctAnswer: 0
  },
  {
    id: 44,
    question: "Qual dos seguintes testes **não** é indicado para Leishmaniose visceral?",
    options: [
      "Punção de medula óssea",
      "ELISA",
      "Teste de Montenegro",
      "IFI"
    ],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "No tratamento da teníase, a **niclosamida** atua principalmente por:",
    options: [
      "Paralisar musculatura do verme.",
      "Inibir síntese de proteases.",
      "Quebrar a membrana ondulante.",
      "Bloquear adesinas."
    ],
    correctAnswer: 0
  },
  {
    id: 46,
    question: "A **retroinfecção** em Enterobius ocorre quando:",
    options: [
      "Larvas eclodem e retornam ao intestino pelo ânus.",
      "Ovos são transmitidos entre indivíduos via fômites.",
      "Trofozoítos formam cistos no ambiente.",
      "Proglotes grávidas migram para a pele."
    ],
    correctAnswer: 0
  },
  {
    id: 47,
    question: "Em **Leishmania**, a forma **promastigota** é encontrada:",
    options: [
      "Intracelular nos macrófagos.",
      "Extracelular no intestino humano.",
      "No tubo digestivo do vetor.",
      "Em fezes de mamíferos infectados."
    ],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "A condição essencial para o prolapso retal por *Trichuris* é:",
    options: [
      "Carga parasitária intensa e inflamação crônica.",
      "Infecção simultânea por Taenia.",
      "Deficiência de ferro.",
      "Uso de praziquantel."
    ],
    correctAnswer: 0
  },
  {
    id: 49,
    question: "Qual das seguintes medidas **não** controla a disseminação de *Enterobius*?",
    options: [
      "Higiene pessoal e corte de unhas.",
      "Lavagem diária de roupas de cama.",
      "Tratamento coletivo de contatos.",
      "Vacinação anual."
    ],
    correctAnswer: 3
  },
  {
    id: 50,
    question: "A **eclosão** de larvas de *Enterobius* ocorre principalmente em:",
    options: [
      "Estômago, sob ação do ácido clorídrico.",
      "Intestino delgado, após ingestão dos ovos.",
      "Pele perianal, por estímulo de calor.",
      "Ceco de vetor artrópode."
    ],
    correctAnswer: 1
  }
];

export const quizPhase2: QuizQuestion[] = [
  {
    id: 1,
    question: "Qual das seguintes formas evolutivas pertence à *Giardia lamblia*?",
    options: [
      "Larva filarioide",
      "Cisticerco",
      "Amastigota",
      "Cisto",
      "Promastigota"
    ],
    correctAnswer: 3
  },
  {
    id: 2,
    question: "O ciclo biológico da *Giardia lamblia* é classificado como:",
    options: [
      "Heteroxênico, envolvendo dois hospedeiros.",
      "Monoxênico, com um único hospedeiro.",
      "Díxeno, necessitando de um vetor.",
      "Autoinfectante, sem necessidade de ambiente externo.",
      "Sexuado, com fase de vida livre no solo."
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: "No ciclo biológico de *Giardia lamblia*, o processo de desencistamento ocorre principalmente no(a):",
    options: [
      "Intestino grosso",
      "Estômago",
      "Duodeno/jejuno",
      "Região perianal",
      "Fígado"
    ],
    correctAnswer: 2
  },
  {
    id: 4,
    question: "A forma morfológica reprodutiva de *Giardia lamblia* que se multiplica por fissão binária é o(a):",
    options: [
      "Cisto",
      "Ovo",
      "Trofozoíto",
      "Larva",
      "Amastigota"
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: "A forma infectante de *Giardia lamblia* para o ser humano é o(a):",
    options: [
      "Trofozoíto",
      "Larva filarioide",
      "Ovo",
      "Cisto",
      "Promastigota"
    ],
    correctAnswer: 3
  },
  {
    id: 6,
    question: "*Trichomonas vaginalis* apresenta qual(is) forma(s) morfológica(s)?",
    options: [
      "Cisto e Trofozoíto",
      "Apenas a forma cística",
      "Apenas a forma trofozoítica",
      "Promastigota e Amastigota",
      "Ovo e larva"
    ],
    correctAnswer: 2
  },
  {
    id: 7,
    question: "Um dos mecanismos de virulência de *Trichomonas vaginalis* envolve a presença de:",
    options: [
      "Escólex com ganchos",
      "Disco adesivo ventral",
      "Membrana ondulante e axóstilo",
      "Cápsula de proteção",
      "Corpo branco filiforme"
    ],
    correctAnswer: 2
  },
  {
    id: 8,
    question: "Em mulheres, um sintoma comum da tricomoníase é:",
    options: [
      "Prurido anal intenso à noite.",
      "Leucorreia amarelo-esverdeada com odor fétido.",
      "Lesões cutâneas com bordas elevadas.",
      "Hepatoesplenomegalia.",
      "Prolapso retal."
    ],
    correctAnswer: 1
  },
  {
    id: 9,
    question: "A intensificação dos sintomas da Tricomoníase durante o período menstrual está associada ao aumento de:",
    options: [
      "Glicogênio.",
      "pH ácido.",
      "Cálcio.",
      "Ferro.",
      "Magnésio."
    ],
    correctAnswer: 3
  },
  {
    id: 10,
    question: "Qual das seguintes espécies de *Taenia* tem o suíno como hospedeiro intermediário?",
    options: [
      "*Taenia saginata*",
      "*Taenia asiatica*",
      "*Taenia multiceps*",
      "*Taenia solium*",
      "*Taenia pisiformis*"
    ],
    correctAnswer: 3
  },
  {
    id: 11,
    question: "A cisticercose humana é uma infecção causada pela ingestão acidental de:",
    options: [
      "Larvas filarioides de *Strongyloides*.",
      "Cistos de *Giardia lamblia*.",
      "Ovos de *Trichuris trichiura*.",
      "Ovos de *Taenia solium*.",
      "Cisticercos em carne bovina."
    ],
    correctAnswer: 3
  },
  {
    id: 12,
    question: "A teníase humana é caracterizada pela presença do parasito adulto no:",
    options: [
      "Estômago.",
      "Intestino grosso.",
      "Intestino delgado.",
      "Pulmão.",
      "Fígado."
    ],
    correctAnswer: 2
  },
  {
    id: 13,
    question: "A forma de transmissão da teníase em humanos ocorre pela ingestão de:",
    options: [
      "Ovos de *Taenia solium* em alimentos contaminados.",
      "Larvas de *Strongyloides* no solo.",
      "Carne suína ou bovina crua/malcozida contendo cisticercos.",
      "Trofozoítos de *Giardia* na água.",
      "Ovos de *Enterobius vermicularis* em fômites."
    ],
    correctAnswer: 2
  },
  {
    id: 14,
    question: "A estrutura morfológica geral da *Taenia* é caracterizada por:",
    options: [
      "Corpo cilíndrico e hermafrodita.",
      "Corpo achatado dorsoventralmente e dioico.",
      "Corpo achatado dorsoventralmente e hermafrodita.",
      "Presença de esôfago longo e filiforme.",
      "Ausência de escólex na fase adulta."
    ],
    correctAnswer: 2
  },
  {
    id: 15,
    question: "O segmento do corpo da *Taenia* que se desprende carregado de ovos é chamado de:",
    options: [
      "Escólex",
      "Estróbilo",
      "Rostelo",
      "Proglote",
      "Pescoço"
    ],
    correctAnswer: 3
  },
  {
    id: 16,
    question: "Na autoinfecção externa por *Taenia*, o indivíduo:",
    options: [
      "Ingere cisticercos presentes na carne.",
      "Contamina as mãos com ovos das próprias fezes e os ingere.",
      "Inala ovos presentes na poeira.",
      "É picado por um vetor infectado.",
      "Tem larvas que penetram a mucosa intestinal."
    ],
    correctAnswer: 1
  },
  {
    id: 17,
    question: "Um dos medicamentos utilizados para tratar a teníase é:",
    options: [
      "Ivermectina",
      "Metronidazol",
      "Praziquantel",
      "Anfotericina B",
      "Mebendazol"
    ],
    correctAnswer: 2
  },
  {
    id: 18,
    question: "No ciclo biológico de *Enterobius vermicularis*, a oviposição ocorre principalmente na(o):",
    options: [
      "Intestino delgado",
      "Ceco",
      "Região perianal",
      "Fígado",
      "Pulmões"
    ],
    correctAnswer: 2
  },
  {
    id: 19,
    question: "A principal sintomatologia da infecção por *Enterobius vermicularis* é:",
    options: [
      "Diarreia sanguinolenta.",
      "Prurido anal/perianal intenso, especialmente à noite.",
      "Hepatoesplenomegalia.",
      "Lesões ulceradas na pele.",
      "Febre de longa duração."
    ],
    correctAnswer: 1
  },
  {
    id: 20,
    question: "O método diagnóstico mais adequado para *Enterobius vermicularis* é o(a):",
    options: [
      "Exame parasitológico de fezes (EPF) convencional.",
      "Cultura em placa de ágar.",
      "Método da fita adesiva ou de Graham.",
      "Punção de vísceras.",
      "Sorologia."
    ],
    correctAnswer: 2
  },
  {
    id: 21,
    question: "Qual das seguintes NÃO é uma forma de transmissão de *Enterobius vermicularis*?",
    options: [
      "Ingestão de ovos por alimentos.",
      "Autoinfecção externa.",
      "Penetração de larvas pela pele.",
      "Retroinfecção.",
      "Contato direto via fômites."
    ],
    correctAnswer: 2
  },
  {
    id: 22,
    question: "Qual medida profilática é crucial para prevenir a disseminação de *Enterobius vermicularis*?",
    options: [
      "Uso de calçados em áreas contaminadas.",
      "Controle de flebotomíneos.",
      "Lavagem diária de roupas íntimas e de cama em água fervente.",
      "Inspeção rigorosa da carne.",
      "Tratamento de cães infectados."
    ],
    correctAnswer: 2
  },
  {
    id: 23,
    question: "O ciclo direto de *Strongyloides stercoralis* envolve o desenvolvimento de larvas filarioides (L3) que:",
    options: [
      "São ingeridas e se desenvolvem no estômago.",
      "Penetram a pele e migram para os pulmões.",
      "Se reproduzem sexuadamente no solo.",
      "São eliminadas nas fezes na forma adulta.",
      "Se encistam em tecidos musculares."
    ],
    correctAnswer: 1
  },
  {
    id: 24,
    question: "No ciclo indireto de *Strongyloides stercoralis*, as larvas rabditoides (L1) eliminadas nas fezes podem:",
    options: [
      "Penetrar a pele diretamente.",
      "Desenvolver-se em fêmeas e machos de vida livre no solo.",
      "Causar autoinfecção interna na luz intestinal.",
      "Formar cistos resistentes no ambiente.",
      "Serem ingeridas por um hospedeiro intermediário."
    ],
    correctAnswer: 1
  },
  {
    id: 25,
    question: "A transmissão de *Strongyloides stercoralis* por heteroinfecção primária ocorre por:",
    options: [
      "Ingestão de ovos embrionados.",
      "Contato com água contaminada por cistos.",
      "Penetração de larvas L3 através da pele.",
      "Picada de um vetor.",
      "Retroinfecção anal."
    ],
    correctAnswer: 2
  },
  {
    id: 26,
    question: "Um mecanismo patogênico cutâneo de *Strongyloides stercoralis* é:",
    options: [
      "Hepatoesplenomegalia.",
      "Lesões mucocutâneas.",
      "Prurido, eritema e urticária no local da penetração.",
      "Diarreia sanguinolenta.",
      "Nódulos subcutâneos."
    ],
    correctAnswer: 2
  },
  {
    id: 27,
    question: "A hiperinfecção por *Strongyloides stercoralis* é uma condição grave que ocorre principalmente em:",
    options: [
      "Indivíduos com boa imunidade.",
      "Crianças pequenas com desnutrição.",
      "Idosos sedentários.",
      "Indivíduos imunocomprometidos.",
      "Gestantes no terceiro trimestre."
    ],
    correctAnswer: 3
  },
  {
    id: 28,
    question: "Qual dos seguintes métodos é considerado de escolha para o diagnóstico de *Strongyloides stercoralis*?",
    options: [
      "Exame de fezes direto.",
      "Biópsia intestinal.",
      "Cultura em placa de ágar.",
      "Sorologia ELISA.",
      "Pesquisa de ovos pelo método de Kato-Katz."
    ],
    correctAnswer: 2
  },
  {
    id: 29,
    question: "O agente etiológico da Leishmaniose pertence ao gênero:",
    options: [
      "*Trypanosoma*",
      "*Plasmodium*",
      "*Leishmania*",
      "*Entamoeba*",
      "*Toxoplasma*"
    ],
    correctAnswer: 2
  },
  {
    id: 30,
    question: "O vetor biológico da Leishmaniose é a fêmea do:",
    options: [
      "Aedes aegypti",
      "Anopheles darlingi",
      "Triatoma infestans",
      "Flebotomíneo",
      "Culex quinquefasciatus"
    ],
    correctAnswer: 3
  },
  {
    id: 31,
    question: "A forma amastigota da *Leishmania* é caracterizada por ser:",
    options: [
      "Móvel e extracelular.",
      "Imóvel e intracelular em macrófagos.",
      "Flagelada e encontrada no vetor.",
      "Cística e resistente no ambiente.",
      "A forma infectante para o vetor."
    ],
    correctAnswer: 1
  },
  {
    id: 32,
    question: "A Leishmaniose Tegumentar (LT) é caracterizada por:",
    options: [
      "Acometimento sistêmico com hepatoesplenomegalia.",
      "Febre de longa duração e anemia.",
      "Lesões cutâneas e mucocutâneas.",
      "Prolapso retal e desnutrição grave.",
      "Prurido anal noturno."
    ],
    correctAnswer: 2
  },
  {
    id: 33,
    question: "Na Leishmaniose Visceral (LV), um dos sintomas principais é:",
    options: [
      "Úlcera de Bauru.",
      "Lesões destrutivas no nariz.",
      "Hepatoesplenomegalia.",
      "Tosse com hemorragia.",
      "Prurido vulvovaginal."
    ],
    correctAnswer: 2
  },
  {
    id: 34,
    question: "O ciclo biológico do agente etiológico da Leishmaniose é:",
    options: [
      "Monoxênico.",
      "Autoinfectante.",
      "Heteroxênico.",
      "Apenas sexual no hospedeiro.",
      "Apenas assexuado no vetor."
    ],
    correctAnswer: 2
  },
  {
    id: 35,
    question: "No ciclo da *Leishmania*, as promastigotas metacíclicas são inoculadas no hospedeiro vertebrado por qual via?",
    options: [
      "Ingestão de cistos.",
      "Penetração ativa na pele.",
      "Picada da fêmea do flebotomíneo.",
      "Contato sexual.",
      "Transfusão sanguínea."
    ],
    correctAnswer: 2
  },
  {
    id: 36,
    question: "Um teste utilizado no diagnóstico da Leishmaniose Tegumentar (LT) é o(a):",
    options: [
      "Cultura em placa de ágar.",
      "Método de Baermann-Moraes.",
      "Teste intradérmico de Montenegro (IDRM).",
      "Punção de medula óssea.",
      "Exame direto de esfregaços a fresco."
    ],
    correctAnswer: 2
  },
  {
    id: 37,
    question: "Para o diagnóstico da Leishmaniose Visceral (LV), um método parasitológico comum é:",
    options: [
      "Escarificação de lesão cutânea.",
      "Biópsia de gânglios linfáticos.",
      "Punção de vísceras (baço, medula óssea).",
      "Teste intradérmico de Montenegro (IDRM).",
      "Pesquisa de anticorpos no líquor."
    ],
    correctAnswer: 2
  },
  {
    id: 38,
    question: "No ciclo biológico de *Trichuris trichiura*, os ovos são eliminados nas fezes e se tornam infectantes após:",
    options: [
      "Eclosão de larvas rabditoides.",
      "Penetração na pele.",
      "Condições ambientais favoráveis para embrionamento.",
      "Serem ingeridos por um vetor mecânico.",
      "Apenas após a passagem por um hospedeiro intermediário."
    ],
    correctAnswer: 2
  },
  {
    id: 39,
    question: "A infecção por *Trichuris trichiura* ocorre predominantemente pela:",
    options: [
      "Penetração de larvas filarioides na pele.",
      "Ingestão de carne malcozida.",
      "Picada de insetos.",
      "Ingestão de ovos embrionados.",
      "Autoinfecção."
    ],
    correctAnswer: 3
  },
  {
    id: 40,
    question: "O desenvolvimento de vermes adultos de *Trichuris trichiura* ocorre principalmente no(a):",
    options: [
      "Intestino delgado.",
      "Estômago.",
      "Pulmões.",
      "Intestino grosso (ceco, cólon ascendente).",
      "Fígado."
    ],
    correctAnswer: 3
  },
  {
    id: 41,
    question: "O prolapso retal, uma complicação de infecções graves por *Trichuris trichiura*, é causado por:",
    options: [
      "Obstrução intestinal devido à massa de vermes.",
      "Inflamação crônica e irritação da mucosa do reto.",
      "Perfuração do intestino.",
      "Compressão de nervos pélvicos.",
      "Reação alérgica sistêmica."
    ],
    correctAnswer: 1
  },
  {
    id: 42,
    question: "A desnutrição e a perda de tônus muscular contribuem para o prolapso retal em casos de tricuriose grave ao:",
    options: [
      "Aumentar a imunidade local.",
      "Fortalecer os tecidos que suportam o reto.",
      "Facilitar a exteriorização da mucosa retal durante esforços.",
      "Reduzir o tenesmo.",
      "Promover a cicatrização da mucosa."
    ],
    correctAnswer: 2
  },
  {
    id: 43,
    question: "Qual das seguintes formas NÃO é encontrada no ciclo biológico de *Trichomonas vaginalis*?",
    options: [
      "Trofozoíto",
      "Cisto",
      "Flagelada",
      "Com membrana ondulante",
      "Com axóstilo"
    ],
    correctAnswer: 1
  },
  {
    id: 44,
    question: "A tricomoníase masculina frequentemente se apresenta como:",
    options: [
      "Vaginite grave.",
      "Prostatite dolorosa.",
      "Completamente assintomática.",
      "Secreção matinal e prurido uretral quando sintomática.",
      "Dores abdominais e náuseas."
    ],
    correctAnswer: 2
  },
  {
    id: 45,
    question: "Em relação à morfologia da *Taenia*, o escólex de *T. saginata* é caracterizado por ser:",
    options: [
      "Dotado de rostelo com ganchos.",
      "Inerme (sem ganchos).",
      "Achatado dorsoventralmente.",
      "Um segmento reprodutor.",
      "A forma larvária infectante."
    ],
    correctAnswer: 1
  },
  {
    id: 46,
    question: "A *Taenia solium* difere da *Taenia saginata* principalmente pelo seu:",
    options: [
      "Habitat no hospedeiro.",
      "Tipo de ciclo biológico.",
      "Hospedeiro intermediário.",
      "Morfologia do ovo.",
      "Modo de transmissão da teníase."
    ],
    correctAnswer: 2
  },
  {
    id: 47,
    question: "A forma de transmissão da cisticercose em humanos por heteroinfecção ocorre pela ingestão de ovos de *T. solium* provenientes de:",
    options: [
      "Fezes do próprio indivíduo.",
      "Carne suína contaminada.",
      "Alimentos ou água contaminados pelas fezes de outro indivíduo.",
      "Larvas na luz intestinal.",
      "Vetores mecânicos."
    ],
    correctAnswer: 2
  },
  {
    id: 48,
    question: "A autoinfecção interna na tricuriose (infecção por *Trichuris trichiura*) é considerada:",
    options: [
      "O principal modo de transmissão.",
      "Causada pela ingestão de larvas L3.",
      "Inexistente.",
      "Relacionada à transformação de ovos na mucosa intestinal.",
      "Associada à ingestão de alimentos contaminados."
    ],
    correctAnswer: 2
  },
  {
    id: 49,
    question: "Uma manifestação pulmonar comum na infecção por *Strongyloides stercoralis* devido à migração das larvas é:",
    options: [
      "Nódulos pulmonares calcificados.",
      "Tosse, febre e broncopneumonia.",
      "Hipertensão pulmonar.",
      "Hemoptise maciça isolada.",
      "Fibrose cística."
    ],
    correctAnswer: 1
  },
  {
    id: 50,
    question: "Qual das seguintes opções é uma característica do ciclo biológico de *Leishmania*?",
    options: [
      "Apenas a forma amastigota é encontrada no vetor.",
      "Apenas a forma promastigota é encontrada no hospedeiro vertebrado.",
      "O ciclo é monoxênico, ocorrendo em um único hospedeiro.",
      "As amastigotas se transformam em promastigotas no intestino do flebotomíneo.",
      "As promastigotas são fagocitadas por macrófagos e se transformam em cistos."
    ],
    correctAnswer: 3
  }
];
