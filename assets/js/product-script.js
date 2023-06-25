document.addEventListener('DOMContentLoaded', function() {

    let product = document.getElementById('products');

    async function getProduct(file) {
    try{
        let myObject = await fetch(file);
        let response = await myObject.json();


        for(let i=0; i<response.length; i++){
            let title = response[i].title;
            let description =response[i].description;

            product.innerHTML +=`
            <div class="product">
                <img  src="${response[i].image}" alt="image" class="product-img" class="product-img">
                <div class="product-content">
                    <h2 class="product-title">
                    ${title.length > 18 ? title.substring(0, 18).concat(' ...') : title}
                    </h2>
                    <h4 class="product-category">${response[i].category}</h4>
                    <p class="product-description">${description.length >80 ? description.substring(0, 80).concat('.....') : description}</p>
                    <div class="product-price-container mohi">
                        <h3 class="product-price">$${response[i].price}</h3>
                        <a href="#!" data-productId="${
                        response[i].id
                        }" class="add-to-cart"><ion-icon name="cart-outline"></ion-icon></a>
                    </div>
                </div>
            </div>
            `;
        }
    
    }catch(err){
        console.log(err);
    }
}
getProduct("https://fakestoreapi.com/products");
})