// =========================================
// DADOS DAS ARMAS
// =========================================

// Este objeto armazena todas as informações das armas do jogo
// Cada arma tem uma chave (ex: "usp") que conecta com o HTML através do atributo data-weapon
const weaponsData = {
    // UTILITÁRIOS
    // Objetos com informações de cada item utilitário
    zeus: {
        name: "Zeus x27",  // Nome que aparece no painel de detalhes
        price: "$200",  // Preço do item
        teams: ["ct", "tr"],  // Array com os times que podem usar (ct = Counter-Terrorists, tr = Terrorists)
        damage: 100,  // Valor de dano (0 a 100) - usado para a barra de estatísticas
        accuracy: 50,  // Valor de precisão (0 a 100)
        firerate: 30,  // Taxa de disparo (0 a 100)
        mobility: 100,  // Mobilidade (0 a 100)
        description: "Arma elétrica de um tiro. Kill instantâneo em close range, mas tem apenas uma bala. Alto risco, alta recompensa com $300 por kill."
    },
    defuse: {
        name: "Kit de Desarme",
        price: "$400",
        teams: ["ct"],  // Apenas CTs podem comprar
        damage: 0,
        accuracy: 0,
        firerate: 0,
        mobility: 0,
        description: "Reduz o tempo de desarme da bomba de 10 para 5 segundos. Item essencial para CTs em situações de clutch. Não afeta a velocidade do jogador."
    },
    kevlar: {
        name: "Colete",
        price: "$650",
        teams: ["ct", "tr"],
        damage: 0,
        accuracy: 0,
        firerate: 0,
        mobility: 0,
        description: "Proteção corporal que reduz o dano recebido no tronco e braços em aproximadamente 50%. Não protege contra headshots. Durabilidade de 100 pontos."
    },
    helmet: {
        name: "Colete + Capacete",
        price: "$1000",
        teams: ["ct", "tr"],
        damage: 0,
        accuracy: 0,
        firerate: 0,
        mobility: 0,
        description: "Proteção completa incluindo capacete. Previne one-shot kills de pistolas e rifles como AK-47 na cabeça. Essencial contra rifles inimigos."
    },

    // PISTOLAS
    usp: {
        name: "USP-S",
        price: "$200",
        teams: ["ct"],
        damage: 85,
        accuracy: 90,
        firerate: 70,
        mobility: 95,
        description: "Pistola silenciada padrão dos CTs. Ótima precisão e baixo recuo, perfeita para headshots no início da rodada. O silenciador pode ser removido para aumentar a velocidade de recarga."
    },
    p2000: {
        name: "P2000",
        price: "$200",
        teams: ["ct"],
        damage: 85,
        accuracy: 88,
        firerate: 75,
        mobility: 95,
        description: "Alternativa à USP-S, oferece mais munição no carregador (13 vs 12 balas). Sem silenciador, mas com maior capacidade de fogo sustentado."
    },
    glock: {
        name: "Glock-18",
        price: "$200",
        teams: ["tr"],
        damage: 75,
        accuracy: 75,
        firerate: 85,
        mobility: 95,
        description: "Pistola padrão dos TRs. Possui modo de rajada de 3 tiros e alta capacidade de munição. Ideal para rushes agressivos e situações de close range."
    },
    p250: {
        name: "P250",
        price: "$300",
        teams: ["ct", "tr"],
        damage: 80,
        accuracy: 85,
        firerate: 80,
        mobility: 92,
        description: "Pistola econômica versátil para ambos os times. Boa penetração de armadura e letalidade em curta distância. Escolha popular para eco rounds."
    },
    fiveseven: {
        name: "Five-SeveN",
        price: "$500",
        teams: ["ct"],
        damage: 78,
        accuracy: 87,
        firerate: 82,
        mobility: 90,
        description: "Pistola CT de alto calibre com 20 balas. Excelente penetração de armadura e precisão, permitindo duelos a média distância contra rifles."
    },
    tec9: {
        name: "Tec-9",
        price: "$500",
        teams: ["tr"],
        damage: 78,
        accuracy: 70,
        firerate: 90,
        mobility: 92,
        description: "Pistola semi-automática TR com alta mobilidade. Perfeita para rushes agressivos e run-and-gun. Grande capacidade de munição (24 balas)."
    },
    cz75: {
        name: "CZ75-Auto",
        price: "$500",
        teams: ["ct", "tr"],
        damage: 88,
        accuracy: 82,
        firerate: 95,
        mobility: 88,
        description: "Pistola automática com alta taxa de disparo. Ideal para emboscadas e situações de surpresa. Munição limitada requer precisão nos tiros."
    },
    deagle: {
        name: "Desert Eagle",
        price: "$700",
        teams: ["ct", "tr"],
        damage: 100,
        accuracy: 88,
        firerate: 60,
        mobility: 85,
        description: "A pistola mais letal do jogo. One-shot kill com headshot em qualquer distância. Alto recuo e cadência lenta exigem precisão e controle."
    },
    revolver: {
        name: "R8 Revolver",
        price: "$600",
        teams: ["ct", "tr"],
        damage: 95,
        accuracy: 92,
        firerate: 55,
        mobility: 85,
        description: "Revólver de alto calibre com disparo especial. Requer tempo de carregamento para tiro principal, mas possui modo secundário rápido."
    },

    // INTERMEDIÁRIAS (SMGs)
    mac10: {
        name: "MAC-10",
        price: "$1050",
        teams: ["tr"],
        damage: 65,
        accuracy: 70,
        firerate: 95,
        mobility: 98,
        description: "SMG TR de alta cadência e mobilidade. Perfeita para rushes rápidos e situações de close range. Baixo custo e boa recompensa por kill."
    },
    mp9: {
        name: "MP9",
        price: "$1250",
        teams: ["ct"],
        damage: 68,
        accuracy: 72,
        firerate: 92,
        mobility: 98,
        description: "Equivalente CT da MAC-10. Alta taxa de disparo e mobilidade excelente. Ideal para retakes e duelos em curta distância."
    },
    mp7: {
        name: "MP7",
        price: "$1500",
        teams: ["ct", "tr"],
        damage: 70,
        accuracy: 80,
        firerate: 88,
        mobility: 95,
        description: "SMG equilibrada com boa precisão. Versatilidade para várias situações de combate. Penetração de armadura decente para sua categoria."
    },
    mp5: {
        name: "MP5-SD",
        price: "$1500",
        teams: ["ct", "tr"],
        damage: 72,
        accuracy: 82,
        firerate: 85,
        mobility: 95,
        description: "Versão silenciada da clássica MP5. Precisão superior entre as SMGs. Perfeita para jogadas furtivas e controle de mapa."
    },
    ump: {
        name: "UMP-45",
        price: "$1200",
        teams: ["ct", "tr"],
        damage: 75,
        accuracy: 75,
        firerate: 75,
        mobility: 92,
        description: "SMG de médio alcance com bom dano. Custo-benefício excelente para rodadas econômicas. Boa penetração de armadura para uma SMG."
    },
    p90: {
        name: "P90",
        price: "$2350",
        teams: ["ct", "tr"],
        damage: 65,
        accuracy: 78,
        firerate: 98,
        mobility: 93,
        description: "SMG premium com 50 balas no carregador. Taxa de disparo extremamente alta. Ideal para rushes e situações onde spray é necessário."
    },
    bizon: {
        name: "PP-Bizon",
        price: "$1400",
        teams: ["ct", "tr"],
        damage: 60,
        accuracy: 72,
        firerate: 90,
        mobility: 96,
        description: "SMG com maior capacidade de munição (64 balas). Baixo dano mas excelente para eco rounds inimigos. Controle de spray fácil."
    },

    // RIFLES
    famas: {
        name: "FAMAS",
        price: "$2050",
        teams: ["ct"],
        damage: 78,
        accuracy: 82,
        firerate: 82,
        mobility: 88,
        description: "Rifle econômico CT com modo burst. Boa precisão e versatilidade. Escolha popular para force-buys e anti-eco."
    },
    galil: {
        name: "Galil AR",
        price: "$1800",
        teams: ["tr"],
        damage: 80,
        accuracy: 80,
        firerate: 85,
        mobility: 88,
        description: "Rifle econômico TR com bom custo-benefício. Precisão decente e dano consistente. Alternativa acessível à AK-47."
    },
    m4a4: {
        name: "M4A4",
        price: "$3100",
        teams: ["ct"],
        damage: 85,
        accuracy: 90,
        firerate: 87,
        mobility: 82,
        description: "Rifle principal CT com 30 balas. Precisão excelente e padrão de spray controlável. Não mata com um headshot contra capacete."
    },
    m4a1s: {
        name: "M4A1-S",
        price: "$2900",
        teams: ["ct"],
        damage: 88,
        accuracy: 95,
        firerate: 85,
        mobility: 82,
        description: "Versão silenciada da M4. Maior precisão mas apenas 20 balas. Ideal para jogadores que priorizam precisão sobre volume de fogo."
    },
    ak47: {
        name: "AK-47",
        price: "$2700",
        teams: ["tr"],
        damage: 100,
        accuracy: 85,
        firerate: 82,
        mobility: 80,
        description: "O rifle mais letal do jogo. One-shot kill com headshot mesmo contra capacete. Spray pattern difícil mas extremamente recompensador."
    },
    sg553: {
        name: "SG 553",
        price: "$3000",
        teams: ["tr"],
        damage: 95,
        accuracy: 92,
        firerate: 80,
        mobility: 78,
        description: "Rifle TR com mira telescópica. Alta precisão e dano. Padrão de spray mais fácil que a AK-47. One-shot kill com headshot."
    },
    aug: {
        name: "AUG",
        price: "$3300",
        teams: ["ct"],
        damage: 88,
        accuracy: 92,
        firerate: 85,
        mobility: 78,
        description: "Rifle CT com mira telescópica. Precisão superior e zoom 1.25x. Excelente para duelos a média e longa distância."
    },
    awp: {
        name: "AWP",
        price: "$4750",
        teams: ["ct", "tr"],
        damage: 100,
        accuracy: 100,
        firerate: 45,
        mobility: 60,
        description: "Sniper rifle icônica. One-shot kill em qualquer parte do corpo (exceto pernas). Requer posicionamento e aim preciso. Alta mobilidade sacrificada."
    },
    ssg08: {
        name: "SSG 08",
        price: "$1700",
        teams: ["ct", "tr"],
        damage: 88,
        accuracy: 95,
        firerate: 70,
        mobility: 95,
        description: "Scout econômica com alta mobilidade. One-shot kill com headshot. Movimento rápido permite agressividade. Favorita para AWPers móveis."
    },

    // PESADAS
    nova: {
        name: "Nova",
        price: "$1050",
        teams: ["ct", "tr"],
        damage: 90,
        accuracy: 65,
        firerate: 60,
        mobility: 88,
        description: "Shotgun econômica com boa recompensa. One-shot kill em close range. Spread preciso permite kills a distâncias maiores que outras shotguns."
    },
    xm1014: {
        name: "XM1014",
        price: "$2000",
        teams: ["ct", "tr"],
        damage: 85,
        accuracy: 60,
        firerate: 85,
        mobility: 85,
        description: "Shotgun semi-automática com 7 balas. Alta taxa de disparo. Perfeita para segurar ângulos fechados e rushes inimigos."
    },
    mag7: {
        name: "MAG-7",
        price: "$1300",
        teams: ["ct"],
        damage: 88,
        accuracy: 70,
        firerate: 65,
        mobility: 90,
        description: "Shotgun CT exclusiva. Carregamento único. Extremamente letal em close range. Popular para segurar posições apertadas."
    },
    sawedoff: {
        name: "Sawed-Off",
        price: "$1100",
        teams: ["tr"],
        damage: 92,
        accuracy: 50,
        firerate: 60,
        mobility: 92,
        description: "Shotgun TR de cano serrado. Spread amplo e alcance curto. Devastadora em distâncias extremamente próximas. Mobilidade alta."
    },
    m249: {
        name: "M249",
        price: "$5200",
        teams: ["ct", "tr"],
        damage: 82,
        accuracy: 75,
        firerate: 88,
        mobility: 65,
        description: "Metralhadora leve com 100 balas. Supressão de fogo massiva. Raramente usada competitivamente devido ao alto custo e baixa mobilidade."
    },
    negev: {
        name: "Negev",
        price: "$1700",
        teams: ["ct", "tr"],
        damage: 88,
        accuracy: 70,
        firerate: 95,
        mobility: 60,
        description: "Metralhadora pesada com 150 balas. Precisão aumenta após disparos contínuos. Extremamente letal quando posicionada, mas mobilidade muito baixa."
    }
};

// =========================================
// CONTROLE DE ABAS (CATEGORIAS)
// =========================================

// document.querySelectorAll() - Busca TODOS os elementos que correspondem ao seletor CSS
// Retorna uma NodeList (similar a um array) com todos os botões que têm a classe 'tab-btn'
const tabButtons = document.querySelectorAll('.tab-btn');

// Busca todos os elementos com a classe 'weapons-grid' (os containers de armas)
const weaponGrids = document.querySelectorAll('.weapons-grid');

// .forEach() - Percorre cada elemento da NodeList (como um loop for)
// Para cada botão encontrado, executa a função abaixo
tabButtons.forEach(button => {
    // addEventListener() - Adiciona um "ouvinte" de eventos ao elemento
    // Primeiro parâmetro: tipo de evento ('click' = quando clicar)
    // Segundo parâmetro: função que será executada quando o evento acontecer
    button.addEventListener('click', function() {
        // 'this' - Refere-se ao elemento que foi clicado (o botão atual)
        // getAttribute() - Pega o valor de um atributo HTML
        // Aqui pegamos o valor do atributo 'data-category' do botão clicado
        const category = this.getAttribute('data-category');
        
        // Remove a classe 'active' de TODOS os botões
        // Isso "desliga" visualmente todos os botões
        tabButtons.forEach(btn => btn.classList.remove('active'));
        
        // classList.add() - Adiciona uma classe CSS ao elemento
        // Adiciona 'active' apenas no botão que foi clicado
        // Isso "liga" visualmente o botão clicado
        this.classList.add('active');
        
        // Esconde todos os grids de armas removendo a classe 'active'
        weaponGrids.forEach(grid => grid.classList.remove('active'));
        
        // document.querySelector() - Busca UM elemento que corresponde ao seletor
        // Template string (``) - Permite inserir variáveis usando ${}
        // Busca o grid que tem data-category igual à categoria do botão clicado
        // E adiciona a classe 'active' para mostrá-lo
        document.querySelector(`.weapons-grid[data-category="${category}"]`).classList.add('active');
    });
});

// =========================================
// CONTROLE DE SELEÇÃO DE ARMAS
// =========================================

// Busca todos os cards de armas (cada quadradinho de arma)
const weaponCards = document.querySelectorAll('.weapon-card');

// Busca o elemento que mostra a mensagem "Selecione uma arma"
const detailsPlaceholder = document.querySelector('.details-placeholder');

// Busca o elemento que contém todas as informações detalhadas da arma
const detailsContent = document.querySelector('.weapon-details-content');

// Para cada card de arma, adiciona um evento de clique
weaponCards.forEach(card => {
    // Quando clicar em um card de arma...
    card.addEventListener('click', function() {
        // Pega o ID da arma do atributo 'data-weapon' do card
        // Exemplo: se clicar na USP, weaponId será "usp"
        const weaponId = this.getAttribute('data-weapon');
        
        // Usa o weaponId para buscar as informações da arma no objeto weaponsData
        // weaponsData[weaponId] é o mesmo que weaponsData.usp (se weaponId for "usp")
        const weaponInfo = weaponsData[weaponId];
        
        // Remove a classe 'selected' de todos os cards
        // Isso "desmarca" visualmente todos os cards
        weaponCards.forEach(c => c.classList.remove('selected'));
        
        // Adiciona 'selected' apenas no card clicado
        // Isso "marca" visualmente o card selecionado
        this.classList.add('selected');
        
        // Chama a função que mostra os detalhes da arma
        // Passa as informações da arma e o elemento do card clicado
        showWeaponDetails(weaponInfo, this);
    });
});

// =========================================
// FUNÇÃO PARA MOSTRAR DETALHES DA ARMA
// =========================================

// function - Declara uma função (bloco de código reutilizável)
// Esta função recebe dois parâmetros:
// - weapon: objeto com as informações da arma
// - cardElement: o elemento HTML do card que foi clicado
function showWeaponDetails(weapon, cardElement) {
    // style.display - Controla se o elemento está visível ou não
    // 'none' = esconde o elemento
    detailsPlaceholder.style.display = 'none';
    
    // 'block' = mostra o elemento
    detailsContent.style.display = 'block';
    
    // querySelector() dentro de um elemento - Busca apenas dentro daquele elemento
    // Pega a tag <img> que está dentro do card clicado
    // .src - Acessa o atributo 'src' da imagem (o caminho/URL da imagem)
    const weaponImg = cardElement.querySelector('.weapon-img').src;
    
    // getElementById() - Busca um elemento pelo seu ID (atributo id="")
    // Pega a imagem no painel de detalhes e muda seu src para a imagem da arma clicada
    document.getElementById('detailsWeaponImg').src = weaponImg;
    
    // textContent - Muda o texto dentro de um elemento HTML
    // Atualiza o nome da arma usando a propriedade 'name' do objeto weapon
    document.getElementById('detailsWeaponName').textContent = weapon.name;
    
    // Atualiza o preço usando a propriedade 'price' do objeto weapon
    document.getElementById('detailsWeaponPrice').textContent = weapon.price;
    
    // Busca os badges (medalhas) dos times CT e TR
    const ctBadge = document.getElementById('teamCT');
    const trBadge = document.getElementById('teamTR');
    
    // Remove a classe 'active' de ambos os badges
    // Inicialmente, ambos ficam "apagados"
    ctBadge.classList.remove('active');
    trBadge.classList.remove('active');
    
    // .includes() - Verifica se um array contém um valor específico
    // Retorna true ou false
    // weapon.teams é um array, exemplo: ["ct", "tr"]
    // Se o array weapon.teams contém "ct"...
    if (weapon.teams.includes('ct')) {
        // ...adiciona a classe 'active' no badge CT
        // Isso "acende" o badge CT
        ctBadge.classList.add('active');
    }
    
    // Se o array weapon.teams contém "tr"...
    if (weapon.teams.includes('tr')) {
        // ...adiciona a classe 'active' no badge TR
        trBadge.classList.add('active');
    }
    
    // Chama a função updateStat 4 vezes, uma para cada estatística
    // Passa o nome da estatística e o valor dela
    updateStat('Damage', weapon.damage);
    updateStat('Accuracy', weapon.accuracy);
    updateStat('FireRate', weapon.firerate);
    updateStat('Mobility', weapon.mobility);
    
    // Atualiza o texto da descrição com a descrição da arma
    document.getElementById('detailsDescription').textContent = weapon.description;
}

// =========================================
// FUNÇÃO PARA ATUALIZAR ESTATÍSTICAS
// =========================================

// Esta função atualiza as barras de progresso e os números das estatísticas
// Recebe dois parâmetros:
// - statName: nome da estatística (ex: "Damage", "Accuracy")
// - value: valor numérico da estatística (0 a 100)
function updateStat(statName, value) {
    // Busca a barra de progresso da estatística
    // Template string concatena 'stat' + statName
    // Exemplo: se statName for "Damage", busca o elemento com id="statDamage"
    const statBar = document.getElementById(`stat${statName}`);
    
    // Busca o elemento que mostra o número da estatística
    // Exemplo: se statName for "Damage", busca id="statDamageValue"
    const statValue = document.getElementById(`stat${statName}Value`);
    
    // Define a largura da barra usando o valor
    // Concatenação: value + '%' transforma o número em porcentagem
    // Exemplo: se value for 85, a largura será "85%"
    statBar.style.width = value + '%';
    
    // Atualiza o texto do número
    // Exemplo: se value for 85, o texto será "85"
    statValue.textContent = value;
}

// =========================================
// INICIALIZAÇÃO
// =========================================

// Quando a página carregar, o placeholder "Selecione uma arma" estará visível
// E a categoria "Utilitários" estará selecionada por padrão
// O usuário precisa clicar em uma arma para ver os detalhes