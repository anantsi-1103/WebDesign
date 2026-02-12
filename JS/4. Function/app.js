// function creation
// function hello() {
//     console.log("hello JS")
// }


// arguments 
// function hello_count(n) {

//     for (let i = 1; i <= n; i++) {
//         console.log("Hello JS")
//     }
// }


// function evenCheck(n){
//     if(n % 2 == 0){
//         console.log("Even")
//     }
//     else{
//         console.log("Odd")
//     }
// }
// function calling
// parameters -> value provide during function calling
// hello_count(50)
// function help in code reusability -> 

// evenCheck(23)
// evenCheck(65)
// evenCheck(20)
// evenCheck(1)
// evenCheck(8)
// evenCheck(76)
// evenCheck(99)

// function - type - normal, return (int , string , boolean)
// block scope , function scope , lexical scope

// functuion creation
// function sum(a, b) {
//     console.log(a + b)
// }

// normal => para -> args -> logic -> display -> end to end 
// int , string , boolean

// return - int 
function sum_int(a, b) {
    return a + b
}

// return - string
function check(n) {
    if (n >= 18) {
        return "True"
    }
    else {
        return "False"
    }
}

// return - boolean
function check_bool(n) {
    if (n >= 18) {
        return true
    }
    else {
        return false
    }
}

function Pallindrome(n) {
    let temp = n // 121 12 1 0
    let sum = 0 // 0 1 12 121
    while (temp != 0) { // T T T

        let rem = temp % 10 // rem = 1%10 = 1
        sum = sum * 10 + rem // sum = 12 * 10 + 1 = 121
        temp = parseInt(temp / 10) // 121/10 - 12/10 -> 1/10 -> 0
    }

    if (sum == n) {
        return true
    }
    else {
        return false
    }
}


function leapYear(n) {
    // 4 % ==0 && 100 != 0 || 400 % ==0 
    if (n % 4 == 0 && (n % 100 != 0 || n % 400 == 0)) {
        return "Leap Year"
    }
    else {
        return "Not a Leap Year"
    }
}

// function calling
// console.log(Pallindrome(123))
// console.log(Pallindrome(121))
// console.log(Pallindrome(154))
// console.log(Pallindrome(65432))
// console.log(Pallindrome(1234))

// console.log(leapYear(2004))
// console.log(leapYear(1999))
// console.log(leapYear(2021))
// console.log(leapYear(2025))
// console.log(leapYear(2029))
// console.log(leapYear(2088))


// Variable ko Access krne ka Tarika ya range
// Block scope 
// Function Scope
    // jo var apne func me andr define kra hai toh woh var func ke andr hi use hoga
// Lexical Scope


// // global variable
// let a = 100
// {
//     // local variable
//     let a = 10

// }

// console.log(a)


// function cal(a,b){
//     let sum = a+b
//     return sum
// }


// console.log(cal(10,20))


// lexical scope
// function -> function call hoga tbhi kaam hoga
// function outerfunc(){
//     let a = 10
//     let b = 20

//     function innerfunc(){
//         console.log(a)
//         console.log(b)
//     }
//     innerfunc()
// }

// outerfunc()