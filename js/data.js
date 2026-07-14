/* ============================================================
   G4BIKES BIKE SHOP — Dados da loja, produtos e conteúdo
   ============================================================ */

const LOJA = {
  nome: "G4bikes Bike Shop",
  slogan: "Sua próxima aventura começa aqui.",
  telefone: "(11) 94702-4219",
  whatsapp: "5511947024219",
  email: "contato@g4bikes.com.br",
  endereco: "Av. Primavera de Caiena, 568 - Parque Santa Madalena, São Paulo - SP, 03981-010",
  instagram: "@g4bikes",
  instagramUrl: "https://instagram.com/g4bikes",
  horario: [
    { dias: "Segunda a Sexta", horas: "09:00 – 18:00" },
    { dias: "Sábado", horas: "09:00 – 14:00" },
    { dias: "Domingo", horas: "Fechado" }
  ],
  avaliacao: 5.0,
  numAvaliacoes: 289,
  mapsQuery: "G4bikes Bike Shop, Av. Primavera de Caiena, 568, Parque Santa Madalena, São Paulo"
};

const CATEGORIAS = [
  { id: "mtb",        nome: "Mountain Bike",        desc: "Para trilhas e aventuras off-road", icone: "mountain", tipo: "bike" },
  { id: "urbana",     nome: "Bicicletas Urbanas",   desc: "Mobilidade com estilo na cidade",   icone: "city", tipo: "bike" },
  { id: "eletrica",   nome: "Bicicletas Elétricas", desc: "Pedale mais longe com menos esforço", icone: "bolt", tipo: "bike" },
  { id: "estrada",    nome: "Bicicletas de Estrada", desc: "Velocidade pura no asfalto",       icone: "road", tipo: "bike" },
  { id: "infantil",   nome: "Bicicletas Infantis",  desc: "Diversão segura para os pequenos",  icone: "kid", tipo: "bike" },
  { id: "bmx",        nome: "BMX",                  desc: "Manobras e adrenalina",             icone: "bmx", tipo: "bike" },
  { id: "pecas",      nome: "Peças e Componentes",  desc: "Upgrade para sua bike",             icone: "gear", tipo: "acessorio" },
  { id: "capacetes",  nome: "Capacetes",            desc: "Proteção com tecnologia",           icone: "helmet", tipo: "acessorio" },
  { id: "roupas",     nome: "Roupas para Ciclismo", desc: "Conforto e performance",            icone: "shirt", tipo: "acessorio" },
  { id: "acessorios", nome: "Acessórios",           desc: "Tudo para o seu pedal",             icone: "light", tipo: "acessorio" }
];

/* Paleta usada nas artes dos produtos */
const PRODUTOS = [
  {
    id: "g4-trail-pro-29", nome: "G4 Trail Pro 29", marca: "G4bikes", categoria: "mtb",
    preco: 4299, precoAntigo: 5199, selo: "OFERTA", estoque: 7, vendidos: 148, avaliacao: 5.0, numAvaliacoes: 62,
    cor: "#a3e635", cores: ["Verde Neon", "Preto Grafite", "Cinza Fosco"], tamanhos: ["S", "M", "L", "XL"],
    lancamento: false,
    specs: { peso: "12,8 kg", quadro: "Alumínio 6061", suspensao: "Dianteira 120 mm (ar)", freios: "Hidráulico a disco", marchas: "1x12 Shimano Deore", aro: "29\"", modalidade: "Trail / XC", garantia: "5 anos (quadro)" },
    desc: "A queridinha das trilhas paulistas. Quadro leve em alumínio 6061 com geometria moderna, suspensão a ar com trava no guidão e grupo Shimano Deore 1x12 para encarar qualquer subida. Freios hidráulicos com rotores de 180 mm garantem controle total nas descidas."
  },
  {
    id: "g4-vertex-carbon", nome: "G4 Vertex Carbon", marca: "G4bikes", categoria: "mtb",
    preco: 12990, precoAntigo: 14990, selo: "LANÇAMENTO", estoque: 3, vendidos: 21, avaliacao: 5.0, numAvaliacoes: 9,
    cor: "#22d3ee", cores: ["Azul Elétrico", "Preto Stealth"], tamanhos: ["M", "L", "XL"],
    lancamento: true,
    specs: { peso: "10,4 kg", quadro: "Carbono T800", suspensao: "Full suspension 130/120 mm", freios: "Hidráulico a disco 4 pistões", marchas: "1x12 SRAM GX Eagle", aro: "29\"", modalidade: "Trail / Enduro leve", garantia: "Vitalícia (quadro)" },
    desc: "Nossa top de linha em carbono. Full suspension com cinemática progressiva, cockpit integrado e SRAM GX Eagle. Feita para quem quer pódio no fim de semana e diversão máxima o ano inteiro."
  },
  {
    id: "g4-rock-21", nome: "G4 Rock 21v", marca: "G4bikes", categoria: "mtb",
    preco: 1899, precoAntigo: 2299, selo: "MAIS VENDIDA", estoque: 15, vendidos: 312, avaliacao: 4.8, numAvaliacoes: 118,
    cor: "#f97316", cores: ["Laranja", "Preto", "Vermelho"], tamanhos: ["S", "M", "L"],
    lancamento: false,
    specs: { peso: "14,9 kg", quadro: "Alumínio", suspensao: "Dianteira 100 mm", freios: "Disco mecânico", marchas: "3x7 Shimano Tourney", aro: "29\"", modalidade: "MTB iniciante", garantia: "2 anos (quadro)" },
    desc: "A porta de entrada perfeita para o mundo do mountain bike. Robusta, confiável e com o melhor custo-benefício da categoria. Montada e revisada pela nossa oficina antes da entrega."
  },
  {
    id: "g4-urban-flow", nome: "G4 Urban Flow", marca: "G4bikes", categoria: "urbana",
    preco: 2490, precoAntigo: 2890, selo: null, estoque: 11, vendidos: 96, avaliacao: 4.9, numAvaliacoes: 41,
    cor: "#e2e8f0", cores: ["Branco Perola", "Grafite", "Verde Oliva"], tamanhos: ["M", "L"],
    lancamento: false,
    specs: { peso: "12,1 kg", quadro: "Alumínio", suspensao: "Rígida", freios: "Disco mecânico", marchas: "1x8 Shimano Altus", aro: "700c", modalidade: "Urbana / Commuter", garantia: "3 anos (quadro)" },
    desc: "Desenhada para o dia a dia na cidade: leve, ágil e com posição confortável. Vem com paralamas, suporte para bagageiro e pneus antifuro. Do trabalho ao parque com estilo."
  },
  {
    id: "g4-volt-e500", nome: "G4 Volt E-500", marca: "G4bikes", categoria: "eletrica",
    preco: 8990, precoAntigo: 10490, selo: "OFERTA", estoque: 5, vendidos: 57, avaliacao: 5.0, numAvaliacoes: 28,
    cor: "#a78bfa", cores: ["Grafite/Neon", "Preto Total"], tamanhos: ["M", "L"],
    lancamento: false,
    specs: { peso: "22,5 kg", quadro: "Alumínio com bateria integrada", suspensao: "Dianteira 100 mm", freios: "Hidráulico a disco", marchas: "1x9 Shimano Alivio", aro: "29\"", modalidade: "E-bike urbana/trilha leve", garantia: "2 anos (motor e bateria)", extra: "Motor 500W · Autonomia até 70 km" },
    desc: "Motor de 500W, bateria removível integrada ao quadro e autonomia de até 70 km. Cinco níveis de assistência e painel LCD. A cidade (e a trilha) nunca foi tão fácil."
  },
  {
    id: "g4-volt-mtb", nome: "G4 Volt MTB Full", marca: "G4bikes", categoria: "eletrica",
    preco: 15990, precoAntigo: null, selo: "LANÇAMENTO", estoque: 2, vendidos: 8, avaliacao: 5.0, numAvaliacoes: 4,
    cor: "#4ade80", cores: ["Verde/Preto"], tamanhos: ["M", "L", "XL"],
    lancamento: true,
    specs: { peso: "23,8 kg", quadro: "Alumínio full suspension", suspensao: "Full 140/130 mm", freios: "Hidráulico 4 pistões", marchas: "1x12 Shimano Deore", aro: "29\"", modalidade: "E-MTB", garantia: "2 anos (motor e bateria)", extra: "Motor central 250W torque 85Nm" },
    desc: "E-MTB full suspension com motor central de alto torque. Suba montanhas sorrindo e desça com segurança total. A revolução elétrica chegou às trilhas."
  },
  {
    id: "g4-aero-speed", nome: "G4 Aero Speed 105", marca: "G4bikes", categoria: "estrada",
    preco: 7490, precoAntigo: 8590, selo: null, estoque: 6, vendidos: 44, avaliacao: 4.9, numAvaliacoes: 19,
    cor: "#f43f5e", cores: ["Vermelho/Preto", "Branco/Azul"], tamanhos: ["50", "52", "54", "56"],
    lancamento: false,
    specs: { peso: "9,2 kg", quadro: "Alumínio aero", suspensao: "Rígida", freios: "Hidráulico a disco", marchas: "2x11 Shimano 105", aro: "700c", modalidade: "Estrada / Speed", garantia: "5 anos (quadro)" },
    desc: "Perfil aerodinâmico, grupo Shimano 105 completo e freios a disco hidráulicos. Quilômetros de asfalto vão passar voando."
  },
  {
    id: "g4-kids-16", nome: "G4 Kids Aro 16", marca: "G4bikes", categoria: "infantil",
    preco: 749, precoAntigo: 899, selo: "OFERTA", estoque: 20, vendidos: 203, avaliacao: 5.0, numAvaliacoes: 87,
    cor: "#fbbf24", cores: ["Amarelo", "Rosa", "Azul"], tamanhos: ["Único (3-6 anos)"],
    lancamento: false,
    specs: { peso: "7,8 kg", quadro: "Aço carbono", suspensao: "Rígida", freios: "V-brake", marchas: "Única", aro: "16\"", modalidade: "Infantil", garantia: "1 ano" },
    desc: "Com rodinhas removíveis, protetor de corrente e freios ajustados para mãos pequenas. A primeira bike inesquecível, montada com todo o cuidado da nossa oficina."
  },
  {
    id: "g4-kids-20", nome: "G4 Kids Trail Aro 20", marca: "G4bikes", categoria: "infantil",
    preco: 1190, precoAntigo: null, selo: null, estoque: 9, vendidos: 76, avaliacao: 4.9, numAvaliacoes: 33,
    cor: "#38bdf8", cores: ["Azul/Verde", "Preto/Laranja"], tamanhos: ["Único (6-9 anos)"],
    lancamento: false,
    specs: { peso: "9,5 kg", quadro: "Alumínio", suspensao: "Dianteira 50 mm", freios: "V-brake", marchas: "1x7", aro: "20\"", modalidade: "Infantil / Trilha leve", garantia: "2 anos" },
    desc: "Mini mountain bike de verdade, com suspensão e 7 marchas. Para os pequenos aventureiros acompanharem os pais na trilha."
  },
  {
    id: "g4-street-bmx", nome: "G4 Street BMX", marca: "G4bikes", categoria: "bmx",
    preco: 1590, precoAntigo: 1890, selo: null, estoque: 8, vendidos: 61, avaliacao: 4.8, numAvaliacoes: 26,
    cor: "#c084fc", cores: ["Roxo", "Preto Fosco", "Cromado"], tamanhos: ["Único"],
    lancamento: false,
    specs: { peso: "11,2 kg", quadro: "Cromoly", suspensao: "Rígida", freios: "U-brake traseiro", marchas: "Única", aro: "20\"", modalidade: "BMX Street/Park", garantia: "1 ano" },
    desc: "Quadro cromoly resistente a impactos, rotor de 360° e pegs inclusos. Feita para o skate park e para as ruas."
  },
  {
    id: "g4-gravel-x", nome: "G4 Gravel X", marca: "G4bikes", categoria: "estrada",
    preco: 6290, precoAntigo: null, selo: "LANÇAMENTO", estoque: 4, vendidos: 17, avaliacao: 5.0, numAvaliacoes: 7,
    cor: "#2dd4bf", cores: ["Verde Petróleo", "Areia"], tamanhos: ["52", "54", "56"],
    lancamento: true,
    specs: { peso: "10,1 kg", quadro: "Alumínio gravel", suspensao: "Rígida", freios: "Hidráulico a disco", marchas: "1x11 Shimano GRX", aro: "700c (pneu 40mm)", modalidade: "Gravel / Aventura", garantia: "5 anos (quadro)" },
    desc: "Asfalto, terra, cascalho: a Gravel X vai onde você quiser. Grupo Shimano GRX, pneus largos e pontos de fixação para alforjes e viagens longas."
  },
  {
    id: "g4-urban-fold", nome: "G4 Urban Fold Dobrável", marca: "G4bikes", categoria: "urbana",
    preco: 1990, precoAntigo: 2390, selo: null, estoque: 12, vendidos: 84, avaliacao: 4.7, numAvaliacoes: 35,
    cor: "#94a3b8", cores: ["Grafite", "Vermelho"], tamanhos: ["Único"],
    lancamento: false,
    specs: { peso: "12,9 kg", quadro: "Alumínio dobrável", suspensao: "Rígida", freios: "Disco mecânico", marchas: "1x7 Shimano", aro: "20\"", modalidade: "Urbana / Multimodal", garantia: "2 anos" },
    desc: "Dobra em 10 segundos e cabe no porta-malas, no metrô ou embaixo da mesa. Liberdade total para a mobilidade urbana."
  },
  /* ------ Acessórios ------ */
  {
    id: "capacete-g4-pro", nome: "Capacete G4 Pro MIPS", marca: "G4bikes", categoria: "capacetes",
    preco: 389, precoAntigo: 459, selo: "OFERTA", estoque: 25, vendidos: 174, avaliacao: 5.0, numAvaliacoes: 71,
    cor: "#a3e635", cores: ["Verde Neon", "Preto", "Branco"], tamanhos: ["M", "G"],
    lancamento: false,
    specs: { peso: "290 g", modalidade: "MTB / Estrada", garantia: "2 anos", extra: "Tecnologia MIPS · 22 entradas de ar · Certificado INMETRO" },
    desc: "Proteção de nível profissional com tecnologia MIPS contra impactos rotacionais. Leve, ventilado e com regulagem de precisão."
  },
  {
    id: "farol-g4-1000", nome: "Farol G4 1000 Lúmens USB", marca: "G4bikes", categoria: "acessorios",
    preco: 189, precoAntigo: 249, selo: "OFERTA", estoque: 30, vendidos: 226, avaliacao: 4.9, numAvaliacoes: 93,
    cor: "#fde047", cores: ["Preto"], tamanhos: ["Único"],
    lancamento: false,
    specs: { peso: "120 g", modalidade: "Universal", garantia: "1 ano", extra: "1000 lúmens · Recarregável USB-C · À prova d'água IPX6" },
    desc: "Ilumine qualquer trilha ou ciclovia com 1000 lúmens reais, 5 modos e bateria para até 8 horas."
  },
  {
    id: "camisa-g4-team", nome: "Camisa G4 Team Edition", marca: "G4bikes", categoria: "roupas",
    preco: 159, precoAntigo: null, selo: null, estoque: 40, vendidos: 138, avaliacao: 4.8, numAvaliacoes: 54,
    cor: "#22d3ee", cores: ["Verde/Preto", "Azul/Grafite"], tamanhos: ["P", "M", "G", "GG"],
    lancamento: false,
    specs: { peso: "140 g", modalidade: "MTB / Estrada", garantia: "90 dias", extra: "Tecido dry-fit UV50+ · 3 bolsos traseiros · Zíper completo" },
    desc: "A camisa oficial da equipe G4bikes. Tecido respirável com proteção UV, corte ergonômico e estampa exclusiva."
  },
  {
    id: "kit-transmissao-deore", nome: "Kit Transmissão Shimano Deore 12v", marca: "Shimano", categoria: "pecas",
    preco: 1290, precoAntigo: 1490, selo: null, estoque: 10, vendidos: 47, avaliacao: 5.0, numAvaliacoes: 22,
    cor: "#94a3b8", cores: ["Preto"], tamanhos: ["Único"],
    lancamento: false,
    specs: { peso: "1,8 kg (kit)", modalidade: "MTB", garantia: "1 ano", extra: "Câmbio + trocador + cassete 10-51 + corrente · Instalação grátis na loja" },
    desc: "Dê um upgrade definitivo na sua MTB. Kit completo 1x12 com instalação e regulagem gratuitas na nossa oficina."
  },
  {
    id: "bomba-g4-suspensao", nome: "Bomba de Suspensão G4 300psi", marca: "G4bikes", categoria: "acessorios",
    preco: 149, precoAntigo: null, selo: null, estoque: 18, vendidos: 39, avaliacao: 4.7, numAvaliacoes: 15,
    cor: "#f97316", cores: ["Preto/Laranja"], tamanhos: ["Único"],
    lancamento: false,
    specs: { peso: "210 g", modalidade: "MTB", garantia: "1 ano", extra: "Manômetro de precisão · Válvula sem perda de ar" },
    desc: "Calibre sua suspensão como um mecânico profissional. Manômetro preciso e engate que não perde pressão."
  },
  {
    id: "luva-g4-gel", nome: "Luva G4 Gel Comfort", marca: "G4bikes", categoria: "roupas",
    preco: 89, precoAntigo: 119, selo: "OFERTA", estoque: 35, vendidos: 187, avaliacao: 4.9, numAvaliacoes: 64,
    cor: "#4ade80", cores: ["Preto/Verde", "Preto Total"], tamanhos: ["P", "M", "G"],
    lancamento: false,
    specs: { peso: "60 g", modalidade: "Universal", garantia: "90 dias", extra: "Palma em gel · Compatível com touchscreen" },
    desc: "Amortecimento em gel nos pontos de pressão e dedos compatíveis com touchscreen. Conforto para pedais longos."
  }
];

const SERVICOS = [
  { id: "montagem",     nome: "Montagem de Bicicletas",       desc: "Montagem profissional com torque calibrado e ajuste fino de todos os componentes.", preco: "A partir de R$ 80", icone: "wrench" },
  { id: "preventiva",   nome: "Manutenção Preventiva",        desc: "Check-up completo de 20 pontos para evitar problemas antes que aconteçam.", preco: "R$ 90", icone: "shield" },
  { id: "revisao",      nome: "Revisão Completa",             desc: "Desmontagem, limpeza, lubrificação e regulagem geral. Sua bike volta como nova.", preco: "R$ 180", icone: "sparkles" },
  { id: "freios",       nome: "Regulagem de Freios e Marchas", desc: "Ajuste de precisão em câmbios e freios, incluindo sangria hidráulica.", preco: "A partir de R$ 50", icone: "brake" },
  { id: "pecas",        nome: "Troca de Peças",               desc: "Substituição de qualquer componente com peças originais e garantia de serviço.", preco: "Sob consulta", icone: "gear" },
  { id: "limpeza",      nome: "Limpeza e Lubrificação",       desc: "Lavagem técnica com produtos específicos e lubrificação de toda a transmissão.", preco: "R$ 60", icone: "drop" },
  { id: "acessorios",   nome: "Instalação de Acessórios",     desc: "Instalação de suportes, ciclocomputadores, luzes, bagageiros e mais.", preco: "A partir de R$ 30", icone: "plus" },
  { id: "personalizacao", nome: "Personalização",             desc: "Monte a bike dos seus sonhos: cores, componentes e detalhes exclusivos.", preco: "Sob consulta", icone: "paint" },
  { id: "bikefit",      nome: "Bike Fit",                     desc: "Ajuste biomecânico completo para pedalar com mais conforto, potência e sem dores.", preco: "R$ 250", icone: "ruler" },
  { id: "leva-traz",    nome: "Retirada e Entrega",           desc: "Buscamos e devolvemos sua bike em casa. Comodidade total na região.", preco: "A partir de R$ 40", icone: "truck" }
];

const DEPOIMENTOS = [
  { nome: "Carlos Mendes", inicial: "C", cor: "#a3e635", estrelas: 5, produto: "G4 Trail Pro 29", texto: "Atendimento impecável! Me ajudaram a escolher o tamanho certo do quadro e ainda fizeram o bike fit. A Trail Pro é sensacional nas trilhas de Paranapiacaba." },
  { nome: "Fernanda Souza", inicial: "F", cor: "#22d3ee", estrelas: 5, produto: "G4 Volt E-500", texto: "Comprei a elétrica para ir ao trabalho e mudou minha vida. Equipe super atenciosa, me deixaram testar antes de comprar. Recomendo demais!" },
  { nome: "Roberto Alves", inicial: "R", cor: "#f97316", estrelas: 5, produto: "Revisão Completa", texto: "Levei minha bike em outra oficina duas vezes e não resolveram. Na G4bikes acharam o problema em 10 minutos. Oficina de altíssimo nível." },
  { nome: "Juliana Castro", inicial: "J", cor: "#c084fc", estrelas: 5, produto: "G4 Kids Aro 16", texto: "A bike da minha filha chegou montada, regulada e com um laço! Esse cuidado no atendimento faz toda a diferença. Cliente fiel daqui pra frente." },
  { nome: "Marcio Tavares", inicial: "M", cor: "#f43f5e", estrelas: 5, produto: "G4 Aero Speed 105", texto: "Pesquisei muito antes de comprar minha speed. O pessoal da G4 entende do assunto de verdade, não empurram produto. Preço justo e pós-venda nota 10." },
  { nome: "Patrícia Lima", inicial: "P", cor: "#4ade80", estrelas: 5, produto: "Bike Fit", texto: "Sofria com dores no joelho há meses. Depois do bike fit na G4bikes, pedalei 80 km sem dor nenhuma. Profissionais que realmente entendem de biomecânica." }
];

const BLOG_POSTS = [
  { id: "escolher-bike-ideal", titulo: "Como escolher a bicicleta ideal para você", resumo: "Tamanho do quadro, modalidade, orçamento: o guia definitivo para não errar na compra da sua próxima bike.", categoria: "Guia de Compra", data: "10 Jul 2026", tempo: "8 min", cor: "#a3e635" },
  { id: "cuidados-bicicleta", titulo: "10 cuidados essenciais com a sua bicicleta", resumo: "Pequenos hábitos que dobram a vida útil dos componentes e evitam dores de cabeça no meio do pedal.", categoria: "Manutenção", data: "02 Jul 2026", tempo: "6 min", cor: "#22d3ee" },
  { id: "dicas-iniciantes", titulo: "Ciclista iniciante: por onde começar", resumo: "Equipamentos básicos, primeiros percursos e erros comuns que você pode evitar desde o primeiro dia.", categoria: "Iniciantes", data: "25 Jun 2026", tempo: "7 min", cor: "#f97316" },
  { id: "seguranca-transito", titulo: "Segurança no trânsito: pedale protegido", resumo: "Sinalização, posicionamento na via e equipamentos obrigatórios para pedalar com segurança na cidade.", categoria: "Segurança", data: "18 Jun 2026", tempo: "5 min", cor: "#f43f5e" },
  { id: "melhores-trilhas-sp", titulo: "As 7 melhores trilhas de MTB perto de São Paulo", resumo: "Do Pico do Urubu à Serra do Mar: rotas testadas e aprovadas pela equipe G4bikes para todos os níveis.", categoria: "Rotas e Trilhas", data: "10 Jun 2026", tempo: "10 min", cor: "#4ade80" },
  { id: "beneficios-ciclismo", titulo: "Os benefícios do ciclismo para corpo e mente", resumo: "O que a ciência diz sobre pedalar regularmente: coração, músculos, sono e saúde mental.", categoria: "Saúde", data: "01 Jun 2026", tempo: "6 min", cor: "#c084fc" }
];

const FAQ_PRODUTO = [
  { p: "Posso retirar na loja?", r: "Sim! Retirada gratuita na Av. Primavera de Caiena, 568 - Parque Santa Madalena. Sua bike é entregue montada, regulada e pronta para pedalar." },
  { p: "A bicicleta vem montada?", r: "Toda bike comprada na G4bikes passa pela nossa oficina antes da entrega: montagem profissional, regulagem de freios e marchas e torque calibrado, sem custo adicional." },
  { p: "Qual o prazo de entrega?", r: "Para São Paulo capital, entregamos em 1 a 3 dias úteis. Demais regiões, calcule o frete pelo CEP na página do produto." },
  { p: "Quais as formas de pagamento?", r: "Pix (5% de desconto), cartão de crédito em até 12x e boleto bancário. Pagamento 100% seguro." },
  { p: "Como funciona a garantia?", r: "Além da garantia de fábrica de cada produto, oferecemos a primeira revisão gratuita em até 90 dias após a compra." },
  { p: "Posso trocar se não servir?", r: "Sim, você tem até 30 dias para troca de tamanho ou modelo, com o produto sem uso. Nosso time ajuda você a acertar o tamanho antes da compra." }
];

/* ---------- utilidades ---------- */
const fmtBRL = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const parcela = v => `12x de ${fmtBRL(v / 12)} sem juros`;
const pixPreco = v => fmtBRL(v * 0.95);
const waLink = (msg) => `https://wa.me/${LOJA.whatsapp}?text=${encodeURIComponent(msg || "Olá! Vim pelo site da G4bikes e gostaria de um atendimento.")}`;
const getProduto = id => PRODUTOS.find(p => p.id === id);
const getCategoria = id => CATEGORIAS.find(c => c.id === id);
const isBike = p => (getCategoria(p.categoria) || {}).tipo === "bike";
