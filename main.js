function showSubHeader() {
    const subheader = document.querySelector(".subheader")
    if (subheader.style.display === "none") {
        subheader.style.display = "block"
    } else {
        subheader.style.display = "none"
    }
}

const discount = document.querySelector("#discount")

const news = document.querySelector("#news")

const bought = document.querySelector("#bought")


const filteredProducts = products.filter(item => item.discount > 20)
const slicedArray = filteredProducts.slice(0, 4)
const newsArray = products.slice(-4)
const sortedTopRating = products.sort((a, b) => a.rating - b.rating).reverse()
const boughtArray = sortedTopRating.slice(0, 4)
console.log(boughtArray);

function getDiscountCard(item) {

    function getRating(rating) {
        let res = ''
        let star_count = 0
        let full_star = parseInt(rating)
        let rest_star = rating - full_star
        star_count = full_star
        res = Array(full_star)
            .fill( `<p class="star_gold">&starf;</p>`)
            .join('')
        if (0.25 <= rest_star && rest_star <= 0.5) {
            star_count++
            res += `<p class="star_half">&starf;</p>`
        }
        if (0.5 < rest_star) {
            star_count++
            res += `<p class="star_half">&starf;</p>`
        }
        free_star = 5 - star_count
        res += Array(free_star)
            .fill( `<p>&starf;</p>`)
            .join('')
        return res
    }

    return `          
    <div class="col-md-3">
    <div class="promotion-bottom">
        <div class="bottom_img">
            <img src="${item.image}" alt="blinchik" height="200px" width="100%" />
        </div>
        <div class="bottom_text">
            <div class="text_normal">
                <div class="norm_first">
                    <h3>${item.price} ₽</h3>
                    <p>${item.name}</p>
                </div>
                <div class="norm_second">
                    <h3>50,50₽</h3>
                    <p>${item.category}</p>
                </div>
            </div>
            <p class="text_pancake">
                ${item.description}
            </p>
            <div class="text_star">
                ${getRating(item.rating)}
            </div>
            <div>
                <button class="btn btn-outline-success btn-block">В корзину</button>
            </div>
        </div>
    </div>
    </div>`
}


function getProducts(products) {
    discount.innerHTML = ''
    for (item of products) {
        discount.innerHTML += getDiscountCard(item)
    }
    // results.innerHTML = products.length
    // 	? `${products.length} ta mahsulot topildi !`
    // 	: 'Mahsulot topilmadi'
}

getProducts(slicedArray)

function getNews(products) {
    news.innerHTML = ''
    for (item of products) {
        news.innerHTML += getDiscountCard(item)
    }
    // results.innerHTML = products.length
    // 	? `${products.length} ta mahsulot topildi !`
    // 	: 'Mahsulot topilmadi'
}

getNews(newsArray)

function getBought(products) {
    bought.innerHTML = ''
    for (item of products) {
        bought.innerHTML += getDiscountCard(item)
    }
    // results.innerHTML = products.length
    // 	? `${products.length} ta mahsulot topildi !`
    // 	: 'Mahsulot topilmadi'
}

getBought(boughtArray)
