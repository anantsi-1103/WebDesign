// let promise = new Promise((resolve,reject)=>{
//     console.log("I am a Promise")
//     reject("Network Error")
// })

// console.log("work Started")
// let promise = new Promise((resolve, reject)=>{
//     setTimeout(() => {
//         console.log("I am a Promise")
//         resolve("Success")
//     }, 5000);

// })

// function getData(data, getNextData) {

//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             // first execution
//             console.log("Data : ", data)
//             resolve("Success")
//             // dusra argument kya uske andr koi value exist hai??
//             if (getNextData) {
//                 // getdata(200)
//                 getNextData();
//             }
//         }, 2000)
//     })
// }

// promise creation 
// const getProm = ()=>{
//     return new Promise((resolve,reject)=>{
//         console.log("I am a Promise")
//         reject("Network error")
//     })
// }
// let prom1 = getProm()

// then  => resolve ko handle krna ho 
// catch  => reject  ko handle ho
// promise handle krna hota hai 


// prom1.then((res)=>{
//     console.log("Fullfilled", res)
// })

// prom1.catch((rej)=>{
//     console.log("rejected", rej)
// })


// Async function -> be default promise ko return krtha hai

function asyncFunc1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("Success")
        }, 2000);
    })
}

function asyncFunc2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data2")
            resolve("Success")
        }, 2000);
    })
}


function asyncFunc3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data3")
            resolve("Success")
        }, 2000);
    })
}


// console.log("Fetching Data1 .......")
// let p1 = asyncFunc1()
// p1.then((res) => {
//     console.log(res)
// })

// console.log("Fetching Data2 .......")
// let p2 = asyncFunc2()
// p2.then((res) => {
//     console.log(res)
// })

// console.log("Fetching Data3 .......")
// let p3 = asyncFunc3()
// p3.then((res) => {
//     console.log(res)
// })

// console.log("Fetching Data1 .......")
// let p1 = asyncFunc1()

// p1.then((res) => {
//     console.log(res)
//     // dusra
//     console.log("Fetching Data2.......")
//     let p2 = asyncFunc2()

//     p2.then((res) => {
//         console.log(res)

//         // third
//         console.log("Fetching Data3.......")
//         let p3 = asyncFunc3()

//         p3.then((res) => {
//             console.log(res)
//         })

//     })
// })



console.log("Fetching Data1 .......")
asyncFunc1().then((res) => {
    console.log(res) // 2s

    // dusra
    console.log("Fetching Data2.......")
    asyncFunc2().then((res) => {
        console.log(res) // 2s

        // third
        console.log("Fetching Data3.......")
        asyncFunc3().then((res) => {
            console.log(res) // 2s
        })

    })
})