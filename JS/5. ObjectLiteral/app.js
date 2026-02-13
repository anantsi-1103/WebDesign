// let info = ["Aman" , 98 , 24]

// complex understanding ko easy krne k liye object literal -> 
// apke data ko key : value - pairs -> JSON -> JavaScript Object Notation

// Python - dictionary 
//  MongoDB -

// key : value ->Property
// Collection of properties - object 

// let info = {
//     name : "Aman",
//     age : 24,
//     marks : 98
// }

// mutable -> value ko reassign -> key ke threw kr sakthe ho 

// console.log(info)
// // info.marks = 100
// info["marks"] = 100

// console.log(info)

// // key present nhi hai

// info.gender = "Male"
// console.log(info)


// object of objects - nested of object  - 
// let info = {
//     name : "Aman",
//     age : 24,
//     marks : {
//         maths : 98,
//         hindi : 56,
//         comp  : 67
//     }
// }

// console.log(info)
// info.marks.hindi = 65
// // info["marks"]["hindi"] = 65
// console.log(info)

// info.marks.chem = 78
// console.log(info)


// const classinfo = {
// 	Aman : {
// 		Age : 28,
// 		City : "Delhi"
// 		},

// 	Mukesh : {
// 		Age : 23 ,
// 		City : "Gurugram"
// 		},

// 	Sahil : {
// 		Age : 26,
// 		City : "Gurugram"
// 		}
// 		};

// console.log(classinfo)
// classinfo.Sahil.City = "Delhi"
// console.log(classinfo)

// Array of Object
// const classinfo2 = [
// {
// 	Name : "Mukesh",
// 	Age : 23 ,
// 	City : "Gurugram"
// },
// {
// 	Name : "Sahil",
// 	Age : 23 ,
// 	City : "Gurugram"

// },
// {
// 	Name : "Aman",
// 	Age : 23 ,
// 	City : "Gurugram"
// },
// {
// 	Name : "Karan",
// 	Age : 23 ,
// 	City : "Gurugram"
// }
// ]


// 3.14 - 22/7
// console.log(Math.PI)
// console.log(Math.E)
// console.log(Math.random())
// // absolute only positive - decimal/decimal
// console.log(Math.abs(-10.5))
//  0 - 1 -> 1 not included 
// let a = 5
// console.log(a * a  * a)
// console.log(a ** 3)
// console.log(Math.pow(a,3))


// Exception Handling -> 

// Exception -> ek unexcepted error jo apke normal flow ko khrb krd

// try -> risky code 
// catch, -> catch ke passs akr apka catch us galti ko handle krlega 
//  finally -> try m galti ho ya na ho finally hamesha 



// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")

// try {
//     console.log("a") // risky code
// }
// catch {
//     console.log("Exception Handled")
// }
// finally{
//     console.log("Always Executed")
// }
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")
// console.log("hello")

// customized galti ko likhna ho -> throw raise an exception
// 
// let n =9
// if(n<=18){
//     throw new "age nhi hai 18 se under hai"
// }
// else{
//     console.log("Allowed")
// }

// recursion -> function ke andr dubara ussi function ko call krlethe ho 
// recursion -> time/space < loop
// loop - si , ei , update 

// base case / kaam

function sum_of_natural(n) { // 5
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum = sum + i
    }
    return sum
}

// var + loop n + hr iteration pr sum ki value ko lekr aa rhe or + plus bhi kr rhe ho


function sum_rec(n) {
    //base case 
    if (n == 0) {
        return n
        // jo kaam bola woh krdo
        // isse phele jitna bhi call stack fill kra hai utna pura apko khali krna hoga
    }
    // kaam
    return n + sum_rec(n - 1)

}

// fibo + asc + DOM



function factorial(n) {
    if (n == 1) {
        return n
    }

    return n * factorial(n - 1);
}


// fibonacci -> 0 1 1 2 3 5

function fibo(n) {
    if (n == 1 || n == 0) {
        return n
    }
    return fibo(n - 1) + fibo(n - 2)
}

console.log(fibo(6))