// console.log("hello")
// console.log("bye")
// console.log("ok")
// console.log("then")


// async - adv part m use krthe hai 

// console.log(1)
// console.log(2)

// setTimeout(()=>{
//     console.log("Hello")
// },3000)

// console.log(3)
// console.log(4)



// function calc(a, b, newCallBack) {
//     newCallBack(a, b)

// }

// calc(1, 2, (a,b)=>{
//     console.log(a+b)
// })

// Nested Callback , Callback Hell , Pyramid of Doom)


// for(){
//     for(){

//     }
// }


// if () {

//     if () {

//     }
//     else {

//     }

// }
// else {

// }

// function getData(data) {
//     console.log("Data : ", data)
// }

// calc(1,2,sum)

// getData(100)

// data1 ->
// data2 -> will wait for first one to complete 
// data3
// arrow function

function getData(data, getNextData) {
    setTimeout(() => {
        // first execution
        console.log("Data : ", data)

        // dusra argument kya uske andr koi value exist hai??
        if (getNextData) {
            // getdata(200)
            getNextData();
        }
    }, 2000)
}


getData(100, () => {
    console.log("Getting next")
    getData(200, () => {
        console.log("Getting next")
        getData(300, () => {
            console.log("Getting next")
            getData(400)
        })
    })
})
