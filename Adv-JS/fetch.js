let heading = document.querySelector('#heading')
let btn = document.querySelector('#btn')
let price = document.querySelector('#price')

let id = parseInt(prompt("Enter your ID"))



const url = `https://fakestoreapi.com/products/${id}`


const getData = async () => {

    console.log("Fetching Data .......")
    let res = await fetch(url)
    // console.log(res) // promise -> 

    let data = await res.json()
    // console.log(data)


    heading.innerHTML = data.title
    price.innerHTML = data.price

}

btn.addEventListener('click', getData)



// const getData = async()=>{
//     console.log("Getting Data")
//     let res = await fetch(url)
//     console.log(res.json())
// }