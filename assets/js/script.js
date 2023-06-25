getProduct("https://fakestoreapi.com/products");

const products = document.getElementById("table_body")

async function getProduct(file) {
  try{
    let myObject = await fetch(file);
    let myText = await myObject.json();

    // for(let i=0; i<myText.length; i++){
    //     products.innerHTML +=`
    //     <tr>
    //     <td>${myText[i].id}</td>
    //     <td>${myText[i].title}</td>
    //     <td>${myText[i].description}</td>
    //     <td>${myText[i].price}</td>
    //     <td><img src="${myText[i].image}"></td>
    //     <tr>`
    // }

        let tableData = "";
        myText.map((values) =>{
        tableData += `
            <tr>
                <td>${values.id}</td>
                <td>${values.title}</td>
                <td>${values.description}</td>
                <td>${values.price}</td>
                <td><img src="${values.image}"></td>
            <tr>
        `

        document.getElementById('table_body').innerHTML = tableData;
    })

  
  }catch(err){
    console.log(err);
  }
}