const modalFunc = () => {
    const modal = document.querySelector(".cart-modal__overlay");
    const cartBtn = document.querySelector("#cart-button");

    const openModal = () => {
        modal.classList.add("open");
    }

    const closeModal = () => {
        modal.classList.remove("open");
    }

    cartBtn.addEventListener("click", () => {
        openModal();
    })

    modal.addEventListener("click", (event) => {
        if (
          event.target.classList.contains("cart-modal__overlay") ||
          event.target.closest(".cart-modal__header--close")
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector("#rests-container");

    const restArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizza_plus.jpg'
        },
        {
            id: 1,
            title: 'Тануки',
            time: 40,
            rating: 4.3,
            price: 700,
            type: 'Пицца',
            image: 'tanuki.jpg'
        },
        {
            id: 2,
            title: 'FoodBand',
            time: 45,
            rating: 4.1,
            price: 750,
            type: 'Пицца',
            image: 'foodband.jpg'
        },
        {
            id: 3,
            title: 'Жадина-пицца',
            time: 52,
            rating: 4.5,
            price: 1000,
            type: 'Пицца',
            image: 'pizza_greedy.jpg'
        },
        {
            id: 4,
            title: 'Точка еды',
            time: 45,
            rating: 4.1,
            price: 750,
            type: 'Пицца',
            image: 'point_food.jpg'
        },
        {
            id: 5,
            title: 'PizzaBurger',
            time: 50,
            rating: 4.5,
            price: 900,
            type: 'Пицца',
            image: 'pizzaburger.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = "<p style='width: 100%; text-align: center;'>Загрузка</p>";
    }

    const renderRests = (array) => {
        container.innerHTML = "";

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id=${card.id}" class="products-card">
                <div class="products-card__image">
                    <img src="./images/rests/${card.image}" alt="${card.image}">
                </div>
                <div class="products-card__description">
                    <div class="products-card__description-row">
                        <h4 class="products-card__description--title">${card.title}</h4>
                        <div class="products-card__description--badge">${card.time} мин</div>
                    </div>
                    <div class="products-card__description-row">
                        <div class="products-card__description-info">
                            <div class="products-card__description-info--raiting">
                                <img src="./images/icons/star.svg" alt="star">
                                ${card.rating}
                            </div>
                            <div class="products-card__description-info--price">
                                От ${card.price} ₽
                            </div>
                            <div class="products-card__description-info--group">
                                ${card.type}
                            </div>
                        </div>
                    </div>
                </div>
            </a>
            `)
        })
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderRests(restArray);
        }, 1000)
    }
}

const goodsFunc = () => {
    const container = document.querySelector("#goods-container");

    const goodsArray = [
        {
            id: 0,
            title: 'Пицца плюс',
            description: 'Рис, угорь, соус унаги, кунжут, водоросли нори.',
            price: 250,
            image: 'eel_roll_standard.jpg'
        },
        {
            id: 1,
            title: 'Калифорния лосось стандарт',
            description: 'Рис, лосось, авокадо, огурец, майонез, икра масаго, водоросли нори.',
            price: 395,
            image: 'california_salmon_standard.jpg'
        },
        {
            id: 2,
            title: 'Окинава стандарт',
            description: 'Рис, креветка отварная, сыр сливочный, лосось, огурец свежий...',
            price: 250,
            image: 'okinawa_standard.jpg'
        },
        {
            id: 3,
            title: 'Цезарь маки хl',
            description: 'Рис, куриная грудка копченая, икра масаго, томат, айсберг, соус цезарь...',
            price: 250,
            image: 'caesar_poppies_xl.jpg'
        },
        {
            id: 4,
            title: 'Ясай маки стандарт 185 г',
            description: 'Рис, помидор свежий, перец болгарский, авокадо, огурец, айсберг',
            price: 250,
            image: 'yasai_maki_standard.jpg'
        },
        {
            id: 5,
            title: 'Ролл с креветкой стандарт',
            description: 'Рис, водоросли нори, креветки отварные, сыр сливочный, огурцы',
            price: 250,
            image: 'shrimp_roll_standard.jpg'
        }
    ]

    const loading = () => {
        container.innerHTML = "<p style='width: 100%; text-align: center;'>Загрузка</p>";
    }

    const renderGoods = (array) => {
        container.innerHTML = "";

        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <div class="products-card">
                <div class="products-card__image">
                    <img src="./images/goods/${card.image}" alt="${card.image}">
                </div>
                <div class="products-card__description">
                    <div class="products-card__description-row">
                        <h5 class="products-card__description--name">
                            ${card.title}
                        </h5>
                    </div>
                    <div class="products-card__description-row">
                        <p class="products-card__description--text">
                            ${card.description}
                        </p>
                    </div>
                    <div class="products-card__description-row">
                        <div class="products-card__description--controls">
                            <button class="btn btn-primary">
                                В корзину
                                <img src="images/icons/icon-basket-white.svg" alt="icon-basket">
                            </button>

                            <span class="products-card__description-controls--price">
                                ${card.price} ₽
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            `)
        })
    }

    if (container) {
        loading();
        setTimeout(() => {
            renderGoods(goodsArray);
        }, 1000)
    }
}



modalFunc();
restsFunc();
goodsFunc();