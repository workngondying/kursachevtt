
const data = [
    {
        title: 'Скелет птицы',
        article: '41235',
        description: ' Красиво украсит вашу комнату, добавив в нее элементы гордой птицы из США.',
        filter: 'Scenery',
        img: './assets/images/bird-image.png'
    },
    {
        title: 'Блестки',
        article: '52512',
        description: 'Наполнит комнату светоотрадающими красками.',
        filter: 'Scenery',
        img: './assets/images/blestki-image.png'
    },
    {
        title: 'Фигурки сердец',
        article: '67723',
        description: ' Добавит романтики в любой интерьер!',
        filter: 'Scenery',
        img: './assets/images/serdtsa-image.png',
    },
    {
        title: 'Воздушный шар',
        article: '51262',
        description: ' Долетит до самой луны и обратно.',
        filter: 'Scenery',
        img: './assets/images/shar-image.png',
    },
    {
        title: 'Стразы',
        article: '88342',
        description: ' Современное решение для артхаус вечеринок.',
        filter: 'Scenery',
        img: './assets/images/strazi-image.png',
    },
    {
        title: 'Шар Бегемот',
        article: '15612',
        description: ' Большое африканское животное с милой мордой.',
        filter: 'Balloons',
        img: './assets/images/begemot-image.png',
    },
    {
        title: 'Шар Буба',
        article: '82341',
        description: ' Добряк дедок буба скрасит грустный день.',
        filter: 'Balloons',
        img: './assets/images/buba-image.png',
    },
    {
        title: 'Шар Радуга',
        article: '21361',
        description: ' Расписаные ворота в которые не войти никак.',
        filter: 'Balloons',
        img: './assets/images/raduga-image.png',
    },
    {
        title: 'Шар Шампанское',
        article: '27612',
        description: ' Для любителей спиртных напитков. Продажа с 18 лет.',
        filter: 'Balloons',
        img: './assets/images/shampanskoe-image.png',
    },
    {
        title: 'Шар Бегемот',
        article: '51235',
        description: ' Это самый милый надувной шарик в вашей жизни.',
        filter: 'Balloons',
        img: './assets/images/slonik-image.png',
    },
    {
        title: 'Шар Свинка',
        article: '15612',
        description: ' Хрю-хрю, все дети любят свинок!.',
        filter: 'Balloons',
        img: './assets/images/svinya-image.png',
    },
    {
        title: 'Костюм клоуна',
        article: '61236',
        description: ' Для забавных вечеринок и всяких движений!.',
        filter: 'Suits',
        img: './assets/images/cloun-image.png',
    },
    {
        title: 'Костюм мафиози',
        article: '61235',
        description: ' Для серьезных вечеринок где принято стрелять!',
        filter: 'Suits',
        img: './assets/images/mafiozi-image.png',
    },
    {
        title: 'Костюм жениха',
        article: '71236',
        description: ' Хотите обладать успехом у женщин? Это решение для вас!',
        filter: 'Suits',
        img: './assets/images/jenix-image.png',
    },
    {
        title: 'Пингвиненок',
        article: '32151',
        description: ' Если попасть в Антарктиду вас могут принять за своего.',
        filter: 'Suits',
        img: './assets/images/pingvin-image.png',
    },
    {
        title: 'Костюм царя',
        article: '61235',
        description: ' Иногда нужно показать кто тут главный.',
        filter: 'Suits',
        img: './assets/images/tsar-image.png',
    },
    {
        title: 'Маска Анонимус',
        article: '61251',
        description: ' Скрытый, тихий и опасный.',
        filter: 'Masks',
        img: './assets/images/anonimus-image.png',
    },
    {
        title: 'Маска лошади',
        article: '87123',
        description: ' Для вечеринок хобби-хорсеров и просто любителей лошадей.',
        filter: 'Masks',
        img: './assets/images/loshad-image.png',
    },
    {
        title: 'Маска шрека',
        article: '23712',
        description: ' Большой и зеленый, удиви свою Фиону.',
        filter: 'Masks',
        img: './assets/images/shrek-image.png',
    },
    {
        title: 'Маска усатого',
        article: '21362',
        description: ' Усатый-полосатый, мало кто вас узнает.',
        filter: 'Masks',
        img: './assets/images/tsar-image.png',
    },
    {
        title: 'Зеленая маска',
        article: '82352',
        description: ' Удивительная маска из нашумевшего фильма.',
        filter: 'Masks',
        img: './assets/images/zelenayamaska-image.png',
    }
    
    
]

const container = document.getElementById('grid');
const getCard = (title, article, description, img) => `<div class="card">
    <img src="${img}" />
    <div class="content">
        <h1 class="title">${title}</h1>
        <p class="subtitle">Артикул: ${article}</p>
        <p class="description">
           ${description}
        </p>
        <button onclick="onClickCard('${article}')">
            <p >
                Подробнее
            </p>
        </button>
    </div></div>`

const modal = document.getElementById("modal");
const productContainer = document.getElementById('product__view');

const openModal = () => {
    modal.className = "modal__active";
}

const closeModel = () => {
    modal.className = "modal__disable";
}

const getProductCard = (title, article, description, img) => `
<div class="product">
                <img src="${img}" />
                <div class="content">
                    <h1 class="title">${title}</h1>
                    <p class="subtitle">Артикул: ${article}</p>
                    <p class="description">
                        ${description}
                    </p>
                    <button onclick="openModal()">
                        <p class = "about">
                            Отложить на складе
                        </p>
                    </button>
                </div>
`



const setCategory = (filter) => {
    if (container !== null) {
        setCard(filter);
    }
}

const setProduct = () => {
    const store = localStorage.getItem("article");
    console.log(store)
    if(store !== null){
        const product = data.find((item) => item.article === store);
        productContainer.innerHTML = getProductCard(product.title, product.article, product.description, product.img);
    }
}

const setCard = (filter) => {
    const filterData = data.filter((item) => item.filter === filter);
    filterData.forEach((item) => {
        container.innerHTML += getCard(item.title, item.article, item.description, item.img);
    })
}

const onClickCard = (article) => {
    localStorage.setItem("article", `${article}`);
    window.location.href = 'product-view.html'
}

