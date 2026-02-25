// Logic -> 
function getData(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataid)
            resolve("Success")
        }, 2000);
    })
}


function getData1(dataid) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data : ", dataid)
            reject("network errror")
        }, 2000);
    })
}



// Await -> u have to be wait  - function -> 


async function democall() {

    console.log("Fetch 1")
    await getData(101) // u have to wait for 1 one to go to next one

    try{
        console.log("Fetch 2")
        await getData1(102) // promise -> okay , not okay 
        
    }

    catch{
        console.log("Exception")
    }
    console.log("Fetch 3")
    await getData(103)

    console.log("Fetch 4")
    await getData(104)

}

democall()