export const site = {
  name: 'Cavalcante Assessoria Jurídica',
  shortName: 'Cavalcante',
  tagline: 'Laudo grafotécnico e documentoscópico que resiste ao contraditório',
  heroSubtitle:
    'Assinatura contestada, documento adulterado ou laudo da parte contrária: o exame técnico responde com fundamento, não com opinião.',
  description:
    'Perícia grafotécnica e documentoscópica, assistência técnica pericial, impugnação de laudo e cálculos jurídicos. Brasília e atendimento em todo o Brasil.',
  location: 'Brasília — DF',
  email: 'italocavalcanteperito@gmail.com',
  phone: {
    display: '(61) 99000-1494',
    tel: '+5561990001494',
  },
  whatsapp: 'https://wa.me/message/LE7TPO4TBWEYC1',
  instagram: {
    handle: '@cavalcanteassessoria',
    url: 'https://www.instagram.com/cavalcanteassessoria',
  },
  miniBook: 'https://pay.kiwify.com.br/hQaGGBz',
} as const;

export const nav = [
  { label: 'Início', href: '#inicio' },
  { label: 'Sobre', href: '#sobre' },
  { label: 'Serviços', href: '#servicos' },
  { label: 'Depoimentos', href: '#depoimentos' },
  { label: 'Contato', href: '#contato' },
] as const;

export const about = {
  lead: 'Trabalho com prova documental. O documento é examinado, a conclusão é escrita e o que se sustenta em juízo sai do exame — não de um palpite sobre a autoria.',
  mission:
    'Cada caso começa pela leitura do papel: tinta, traço, suporte, sequência de escrita, indícios de rasura ou substituição. O laudo descreve o método, responde aos quesitos e diz até onde a análise chega. Quando a outra parte produz laudo, o trabalho é o mesmo ao contrário — quesitos, parecer de assistente técnico e impugnação ponto a ponto.',
  credentials: [
    'Perito documentoscópico',
    'Perícia judicial e extrajudicial',
    'Assistência técnica',
    'Graduando em Direito',
  ],
};

export const differentiators = [
  'Laudo com o método descrito, item por item',
  'Quesitos e impugnação escritos para o processo',
  'Cálculo com memória de cálculo anexa',
  'Atendimento a advogados em todo o Brasil',
] as const;

export const services = [
  {
    id: 'pericia',
    title: 'Perícia Judicial e Extrajudicial',
    body: 'Exame grafotécnico e documentoscópico: autenticidade de assinatura, adulteração, rasura, substituição de conteúdo e data. Laudo e parecer técnico, com elaboração de quesitos.',
  },
  {
    id: 'assistencia',
    title: 'Assistência Técnica',
    body: 'Acompanhamento da fase de perícia ao lado de quem contrata: quesitos ao perito, parecer de assistente técnico e impugnação do laudo. Inclui correspondência jurídica, acompanhamento processual, petições, audiências e diligências administrativas.',
  },
  {
    id: 'consultoria',
    title: 'Consultoria Jurídica Empresarial',
    body: 'Análise das operações da empresa sob o ângulo do risco jurídico, com orientação documentada antes do litígio.',
  },
  {
    id: 'calculos',
    title: 'Cálculos Jurídicos',
    body: 'Cálculos previdenciários — restituição de INSS e análise previdenciária —, além de cível, trabalhista, bancário, tributário e penal. Entrega com memória de cálculo.',
  },
  {
    id: 'contratos',
    title: 'Contratos',
    body: 'Elaboração e revisão de contratos empresariais e de pessoas físicas, inclusive contratos digitais.',
  },
  {
    id: 'trabalhista',
    title: 'Direito Trabalhista',
    body: 'Orientação em questões trabalhistas e conformidade com a legislação vigente.',
  },
] as const;

export const testimonials = [
  {
    quote:
      'A equipe da Cavalcante Assessoria Jurídica é incrível! Suas soluções são precisas e rápidas, proporcionando tranquilidade em momentos desafiadores. O atendimento é sempre atencioso e transparente, garantindo confiança em cada etapa do processo. Altamente recomendados!',
    author: 'Carlos Ferreira',
    role: 'Cliente',
  },
  {
    quote:
      'Cavalcante Assessoria Jurídica é excelente! Recebi atendimento personalizado e soluções eficazes para meu caso. A equipe é cordial e altamente qualificada, demonstrando domínio em todos os aspectos legais abordados. Sem dúvidas, a melhor escolha!',
    author: 'Mariana Silva',
    role: 'Cliente',
  },
  {
    quote:
      'A Cavalcante Assessoria Jurídica superou minhas expectativas com seu profissionalismo e eficiência. A equipe é extremamente competente e dedicada, oferecendo soluções rápidas para questões complexas. Recomendo fortemente seus serviços a qualquer pessoa em Brasília!',
    author: 'Cliente em Brasília',
    role: 'Cliente',
  },
] as const;
