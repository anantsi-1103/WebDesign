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


// let choice = parseInt(prompt("Enter your Number"))

// switch (choice) {

//     case 1: {
//         console.log("Monday")
//         break;
//     }

//      case 2: {
//         console.log("Tuesday")
//         break;
//     }

//      case 3: {
//         console.log("Wednesday")
//         break;
//     }

//      case 4: {
//         console.log("Thursday")
//         break;
//     }

//      case 5: {
//         console.log("Friday")
//         break;
//     }

//      case 6: {
//         console.log("Saturday")
//         break;
//     }

//      case 7: {
//         console.log("Sunday")
//         break;
//     }

//      default: {
//         console.log("Invalid Choice")
//         break;
//     }
// }



//  2 number  - CALCUALTOR -> SWITCH 


// Assignment - unary - incr/dec
// ternary - condition ko single logic m likhna ho -> 


// if(n % 2 == 0){
//     console.log("Even")
// }

// else{
//     console.log("Odd")
// }


// variable = condition? true : false;

// let result = n % 2 == 0? "Even":"Odd"
// console.log(result)

// 1 > = pos
// 1 < neg
// zero
// if else if 
// let n = 0
// let result = n > 0 ? "Positive" : n < 0 ? "Negative" : "Zero";
// console.log(result)


// switch - calculator of 2 number 

//  2 + 2 

// let n1 = Number(prompt("Enter your First number "))
// let operator = prompt("Enter your Operator ('+,-,/,*,%')")
// let n2 = Number(prompt("Enter your Second number "))


// switch (operator) {

//     case '+':
//         console.log(`${n1} + ${n2} = ${n1 + n2}`)
//         break


//     case '-':
//         console.log(`${n1} - ${n2} = ${n1 < n2 ? n2 - n1 : n1 - n2}`)
//         break


//     case '*':
//         console.log(`${n1} * ${n2} = ${n1 * n2}`)
//         break


//     case '/':
//         console.log(`${n1} / ${n2} = ${n1 / n2}`)
//         break


//     case '%':
//         console.log(`${n1} % ${n2} = ${n1 % n2}`)
//         break


//     default:
//         console.log(`Invalid Choice / Operator `)
//         break
// }


//  A string is a golden string if it starts with the character 'A' or 'a' 
// and has a total length greater than 5.


// let n = "aarsh"

// if((n[0] == "A" || n[0] == "a") && (n.length >= 5)){
//     console.log("Golden")
// }
// else{
//     console.log("Not Golden")
// }


// let n = 3245332
// let m = 23452

// let rem1= n%10
// let rem2= m%10

// if(rem1 == 2 && rem2 == 2){
//     console.log("Yes")
// }
// else{
//     console.log("No")
// }



// LOOP


// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")
// console.log("hello world")


// si
// while(condition){
// logic
// updation
//}

// 1 - 100

// while
// let i = 1 // 6
// while (i <= 5) { // 
//     console.log(i) //1 2 3 4 5
//     i++; // update 
// }


// Do while
// let i = 1 //1
// do {
//     console.log(i) // 1
//     i++; // 2
// } while (i <= 5); // 


// for loop
// for (let i = 1; i <= 5; i++) {
//     console.log(i)
// }

// infinity / endless loop
// for(let i = 10 ; i>= 1 ; i--){
//     console.log(i)
// }

// break - when it occur it auto- terminate the condition
// continue  - when it occur it bypass the logic and auto- go to the continue

// for (let i = 1; i <= 5; i++) { //1 2 3 4

//         if(i==3){ // F F T F
//             continue; // for loop 
//         }
//         console.log(i) // 1 2 4 5
// }

// let i = 1 // 1 2 3 
// while(i<=5){
//     if(i==3){// 3
//         i++;
//         continue;
//     }
//     console.log(i); //1 2
//     i++;
// }

// Multiplication table -> 
//  user number -> 6
// 6 * 1 = 6
// 6(n) * 2(i) = 12(n*i)


// let n = 6

// for (let i = 1; i <= 10; i++) {
//     console.log(`${n} x ${i} = ${n * i}`)
// }

// sum of n natural number -> 
// 5 -> 1 ----- 5

// 1 + 2 + 3 + 4 + 5

// let n = 5

// let i = 1 // 
// let sum = 0 // 
// while(i<=n){ //
//     sum = sum + i //
//     // sum = 10 + 5 
//     i++ // 
// }

// console.log(sum)

// factorial => 
// 1 * 2 * 3 * 4 * 5


// let n = 6

// let i = 0 //  0 1 2
// let sum = 1 // 0 0 0
// while(i<=n){ 
//     sum = sum * i //
//     // sum = 0 * 2
//     i++
// }

// console.log(sum)

//  0 + 1 = 1
//  0 * 1 = 0

// Prime number -> 
// 1 

// brute force -> end result -> all possible way laga diye hai
// let n = 7

// if (n <= 1) {
//     console.log("Not a prime")
// }
// else {
//     // loop
//     let count = 0; // 0
//     for (let i = 2; i < n; i++) { // 2,3,4,5,6
//         if (n % i == 0) {
//             // 6 % 2 == 0
//             count++;
//         }
//     }
//     if (count == 0) {
//         console.log("Prime number")
//     }
//     else {
//         console.log("Not a prime")
//     }
// }

// Armstrong number - 
// 153 ->  1^3 + 5^3 + 3^3 = 153 
let n = 1532

let temp = n // 153 15 1
let sum = 0 // 0 27 152 153
while (temp != 0) { // T T T

    let rem = temp % 10 // 1/10 = 1
    sum = sum + rem ** 3 // sum = 152 + 1  
    temp = parseInt(temp/10) // 1/10 -> 0
}

if(sum == n){
    console.log("Armstrong")
}
else{
    console.log("Not a Armstrong")
}

// Pallindrome , fibonacci , 1,11,111,1111 -> Array -> Array method 