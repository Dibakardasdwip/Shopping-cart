class Product{
    constructor(){
        this.productImg = document.querySelector("#product-img");
        this.productName = document.querySelector("#product-name");
        this.productPrice = document.querySelector("#product-price");
    }

    getData(){
        fetch("product.json")
         .then(res=>res.json())
         .then(data=> {
            let row = document.querySelector('.row-product');
            row.innerHTML = "";
            data.forEach((item,index)=>{
                if(row !== ""){
                   row.innerHTML += `
                            <div class="col-4 py-4" style="width:280px">
                            <div class="card ">
                                <div class="card-body text-center">
                                    <img src="${item.image}" id="product-img" class="image img-fluid " alt="">
                                  <p id="product-name">${item.name}</p >
                                  <h5 id="product-price">$${item.price}</h5>
                                  <button class="btn btn-primary btn-cart" id="add-btn-${index}">Add to cart</button>
                                </div>
                              </div>
                        </div>
                            `
                }else{

                }
                
                
            })           

         })       
    }


}

let a = new Product();
a.getData()

// Add to cart Button
document.addEventListener('click', (e)=>{
    if(e.target.className === "btn btn-primary btn-cart"){
        console.log(e.target);
        

        let parent = e.target.parentElement;
        let cartImg = parent.firstElementChild;
        let productName = cartImg.nextElementSibling;
        let price = productName.nextElementSibling;
        let sidebar = document.querySelector(".car-item");
        console.log(sidebar);
        

        sidebar.innerHTML += `
        <div class="row mx-0 p-0">
        <div class="col-3">
        <img class="image img-fluid cart-img" ${cartImg.outerHTML.split(" ")[1]} alt="">
        </div>
        <div class="col-sm-2">
        <h5 class="fs-6">${productName.textContent}</h5>
        </div>
        <div class="col-2">
          <h5>${price.textContent}</h5>
        </div>
        <div class="col-auto  px-5">
          <h5><a href="#">X</a></h5>
        </div>
      </div>
    </div>
      `
    }
    
})



// remove from cart
let sidebar = document.querySelector('.sidebar');

sidebar.addEventListener('click', e=>{
    if(e.target.hasAttribute("href")){
        console.log(e.target.parentElement.parentElement.parentElement);
        
        e.target.parentElement.parentElement.parentElement.remove()
    }
    
})




// <div class="col-12 cart-list text-left">
// <div class="container-fluid cart-items text-center"> //d-flex
// <img class="image img-fluid cart-img" ${cartImg.outerHTML.split(" ")[1]} alt="">
// <h5>${productName.textContent}</h5>
// <h5>${price.textContent}</h5>
// <h5><a href="#">X</a></h5>
// </div>
// </div>




