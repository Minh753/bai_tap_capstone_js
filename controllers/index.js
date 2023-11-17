var arrSP = [];
function getDataApi() {

    var promise = axios({
        url: 'https://shop.cyberlearn.vn/api/Product',
        method: 'GET',
        responseType: 'json'
    });
    promise.then(function (res) {
        arrSP = res.data.content
        console.log(arrSP)
        renderCardSanPham(arrSP)
    });
    promise.catch(function (err) {
        console.log(err)
    })
}

function renderCardSanPham(arrSP) {
    var htmlString = '';
    for (var index = 0; index < arrSP.length; index++) {
        var sp = arrSP[index]
        htmlString += `
        <div class="card">
        <div class="card-body">
            <img src="${sp.image}" alt="...">
        </div>
        <div class="card-footer">
            <h1 class="product-name">${sp.name}</h1>
            <p class="product-info">${sp.shortDescription
            }</p>
            <div class="product-buy">
                <button class="btn-buy">Buy now</button>
                <p class="product-price">${sp.price
            }$</p>
            </div>
        </div>
    </div>
        `

    }
    document.querySelector('#product-list').innerHTML = htmlString;
    return htmlString
}
window.onload = function () {
    getDataApi()
}