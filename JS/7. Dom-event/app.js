// dom -> select

// btn select
// let btn = document.querySelectorAll('button')
// btn.onclick = function
//     hello() {
//     console.log("button is clicked")
// };

// anonynmous -> lambda expression
// arrow function 
// btn.onclick = ()=>{
//     console.log("button is clicked")
// }

// b mera btn -[]
// for(let k of btn){
//     k.ondblclick = ()=>{
//         console.log("button is clicked")
//     }
// }

// AddEventListeners -> 

// var.addEvent....("event", callback)

// onclick , ondblclick

// for(b of btn){
//     b.addEventListener("click", ()=>{
//         console.log("button is clicked")
//     })
// }

// mouseeneter, mousemove, mouseleave

// let hello = document.querySelector('#hello')
// let bye = document.querySelector('#bye')


// hello.addEventListener('mouse', ()=>{
//     console.log("Hello From JS")
// })

// bye.addEventListener('click', ()=>{
//     console.log("Bye From JS")
// })


// Math.random() -> 0 - 1 -> 1 

// rgb -> - 0-255

function generateColor() {

    let red = Math.floor(Math.random() * 255) + 1
    let green = Math.floor(Math.random() * 255) + 1
    let blue = Math.floor(Math.random() * 255) + 1

    // back : rgb(red,green,blue)

    let color = `rgb(${red},${green},${blue})`
    return color
}


// let btn = document.querySelector("button")

// btn.addEventListener('click',()=>{

//     // head get
//     let head = document.querySelector('h2')

//     // function ko call krke ek variable store
//     let newColor = generateColor()

//     // head ke text ke 
//     head.innerText = newColor


//     // container
//     let box = document.querySelector('.container')

//     // box ke style ka background - new color 
//     box.style.backgroundColor = newColor

// })


// let box1 = document.querySelector('#box')

// box1.addEventListener('mouseenter', ()=>{
//     box1.style.backgroundColor = 'green'
// })

// box1.addEventListener('mouseleave', ()=>{
//     box1.style.backgroundColor = 'red'
// })


// keyboard -> keydown - key press , key up - key release  , key press  - character key


// let inp = document.querySelector("#input")

// inp.addEventListener('keyup' , (e)=>{
//     console.log("button is clicked")

//     console.log(e.key) // key 
//     console.log(e.code) // proper name - , / , *


// })


// let form = document.querySelector('form')

// let inp = document.querySelector('input')

// let p = document.querySelector('p')



// form.addEventListener('submit' , (e)=>{
//     e.preventDefault() // to prevent from navigation 
//     // e.stopPropagation()

//     console.log(inp.value)


//     // alert("hello " + inp.value)
//     p.innerText = inp.value

// })

// click , dblclick , mouseeneter, mouseleave, mousemove , key * 3 , submit 

// let form = document.querySelector('form')

// form.addEventListener('submit', (e) => {
//     e.preventDefault()


//     let user = document.querySelector('#username')
//     let data = user.value
//     if (data == "") {
//         alert("Username Required")
//     }
//     else {

//         alert("Welcome : " + data)
//     }
// })

// let form = document.querySelector("form")
// form.addEventListener("submit", function (event) {
//     event.preventDefault(); // apke action ko bhejne se rok deta hai
// })


// let user = document.querySelector('#user')
// user.addEventListener("change", function () {
//     console.log("Input changed")
//     console.log("New value is : ", user.value)
// })


// let inp = document.querySelector('#user')
// let p = document.querySelector('p')
// inp.addEventListener("input", function () {
//      console.log(inp.value)
//     p.innerText = inp.value
// })