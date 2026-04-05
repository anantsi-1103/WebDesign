let id = document.querySelector('.id')
let name1 = document.querySelector('.name')
let des = document.querySelector('.des')
let price = document.querySelector('.price')
let img = document.querySelector('.img')

let form = document.querySelector('#productForm')

let productInput = document.querySelector('#productId')
const url = 'https://fake-store-api.mock.beeceptor.com/api/products'



form.addEventListener('submit', async function (e) {
    e.preventDefault() // stop page to reload - action

    try {
        let c = parseInt(productInput.value)

        console.log("Fetching Data")

        let res = await fetch(url)

        let data = await res.json()

        if (c >= 0 && c < data.length) {
            id.innerHTML = "Product ID : " + data[c].product_id
            name1.innerHTML = "Product Name : " + data[c].name
            des.innerHTML = "Description : " + data[c].description
            price.innerHTML = "Price : " + data[c].price
            img.src = data[c].image
        }

        else {
            alert("Improper ID")
        }



    }
    catch {
        console.log("Handled")
    }

})








// const getData = async () => {

//     try {

//         let c = parseInt(prompt("Enter your Product ID"))
//         console.log("Fetching Data")
//         let res = await fetch(url)

//         //    convert krna json -> data - key : value ---- Store 

//         let data = await res.json()

//         id.innerHTML = "Product ID : " + data[c].product_id
//         name1.innerHTML = "Product Name : " + data[c].name
//         des.innerHTML = "Description : " +data[c].description
//         price.innerHTML = "Price : "+data[c].price
//         img.src = data[c].image

//         console.log()
//     }
//     catch {
//         console.log("Handled")
//     }

// }