let divData= document.getElementById("divData")

function getData(){
    const promesa = fetch("https://freetestapi.com/api/v1/products",{method:"GET"})
    promesa.then(
        (Response)=>{
            Response.json().then(
                (data)=>{
                    createCards(data)
                })
            .catch((error)=> console.log("error con el JSON",error))
        })
    .catch((err)=>console.log("Existio un promebla con la solicitud",err))
}

function createCards(products){
    //crear una card para cada uno de los productos con un forEach
    products.forEach(p=>{
        divData.insertAdjacentHTML("beforeend",
            `<div class=card col">
            <img src="${p.image}" class="card-img-top" style="object-fit: contain;witdh:100%;height:250px;">
            <div class="card-body">
              <p class="card-text">${p.name}</p>
              <br>
              <p class="card-text">${p.brand}</p>
              <br>
              <p class=""card-text>${p.description}</p>
              <br>
              <p class=""card-text>${p.rating}</p>

            </div>
          </div>`
        )
      
    })
}

getData();