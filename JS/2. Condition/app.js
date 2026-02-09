// Decision Making 

// if 

// let age = 20

// if(condition){
// true statement
//}

// if else -> 

// if(age >= 18){
//     console.log("Above 18")
// }
// else{
//      console.log("Below 18")
// }


// let n = 9

// if(n % 2 == 0){
//     console.log("Even")
// }
// else{
//     console.log("Odd")
// }

// if else if 
// 18+ => 18+
// 13 - 17 => Teenager
// 13 -> Not allowed

// let n = parseInt(prompt("Enter your Age: ")) // 21

// if(n >= 18){
//     console.log("18+")
// }
// else if(n >= 13){
//     console.log("Teenager")
// }
// else {
//     console.log("Not allowed")
// }


// Nested if -> 

// let marks = 86

// if(marks >= 33){
//     console.log("Pass")
//     // pass
//     if(marks >= 90){
//         console.log("Above 90")
//     }
//     else{
//         console.log("Below 90")
//     }
// }
// else{
//     console.log("FAIL")
// }

// Operator -> 

// greatest of 3 number -> 

// let a = parseInt(prompt("Enter your A Value: ")) // 
// let b = parseInt(prompt("Enter your B Value: ")) // 
// let c = parseInt(prompt("Enter your C Value: ")) //

// // Logical - AND && , OR || , Not !
// // condition((T),(T)) -> T
// if ((a > b) && (a > c)) {
//     console.log("A is greatest")
// }
// else if ((b > a) && (b > c)) {
//     console.log("B is greatest")
// }
// else{
//     console.log("C is greatest")
// }


// let marks = 90

// if(marks >= 33){
//     console.log("pass")
// }
// else if(marks >= 33 && marks <= 50){
//     console.log("Above 33 but below 50")
// }
// else if(marks >= 51 && marks <= 80){

// }

// 90 ->A
// 80- 89 -> B
// 70-79 -> C


// let choice = prompt("Enter your Number")

// switch (choice) {

//     case "red":
//         console.log("STOP")
//         break;

//     case "yellow":
//         console.log("HOLD")
//         break;

//     case "green":
//         console.log("GO")
//         break;

//     default:
//         console.log("Invalid")
//         break;
// }


let choice = parseInt(prompt("Enter your Number"))

switch (choice) {

    case 1: {
        console.log("Monday")
        break;
    }

     case 2: {
        console.log("Tuesday")
        break;
    }

     case 3: {
        console.log("Wednesday")
        break;
    }

     case 4: {
        console.log("Thursday")
        break;
    }

     case 5: {
        console.log("Friday")
        break;
    }

     case 6: {
        console.log("Saturday")
        break;
    }

     case 7: {
        console.log("Sunday")
        break;
    }

     default: {
        console.log("Invalid Choice")
        break;
    }
}



//  2 number  - CALCUALTOR -> SWITCH 

