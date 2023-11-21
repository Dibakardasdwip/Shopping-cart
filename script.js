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
            let row = document.querySelector('.row');
            row.innerHTML = "";
            data.forEach(item=>{
                if(row !== ""){
                   row.innerHTML += `
                            <div class="col-4 py-4" style="width:280px">
                            <div class="card ">
                                <div class="card-body text-center">
                                    <img src="${item.image}" id="product-img" class="image img-fluid " alt="">
                                  <p id="product-name">${item.name}</p >
                                  <h5 id="product-price">$${item.price}</h5>
                                  <button class="btn btn-primary">Add to cart</button>
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





// let row = document.querySelector('.row');
// items.forEach(item=>{
//     row.innerHTML =""

//     console.log(item);
    
//     if(row !=""){
//         row.innerHTML += `
//         <div class="col-4" style="width:260px">
//         <div class="card">
//             <div class="card-body text-center">
//                 <img src="${item.image}" id="product-img" class="image img-fluid " alt="">
//               <h4 id="product-name">${item.name}</h4>
//               <h5 id="product-price">$${item.price}</h5>
//               <button class="btn btn-primary">Add to cart</button>
//             </div>
//           </div>
//     </div>
//         `
//     }

    
// })