// 1. Write a program that checks if a given number is even or odd.

function oddevennumber(a){
    if (a%2!=0){
        console.log("odd")
    }else{
        console.log("even")
    }
}
oddevennumber(3)

// 2. Create a function that takes two numbers as parameters and returns the larger one.

function largernumber(a,b){
    if (a>b){
        console.log("a");
    }else{
        console.log("b");
    }
}
largernumber(24,69);

// 3. Write a function that determines if a given year is a leap year.

function leapyear(a){
    if ((a%4==0 && a%100 !==0) || (a%400==0)){
        console.log("yes")
    }else{
        console.log("no")
    }
}
leapyear(1947);
// 4. Implement a program that checks whether a given character is a vowel or consonant.

function characters(char){
    char=char.toLowerCase();
    if (char=="a" || char=="e" || char == "i" || char == "o" || char =="u"){
        console.log("vowel");

    }
    else if (char=="A" || char=="E" || char == "I" || char == "O" || char =="U"){
        console.log("vowel");
    }
    else {
        console.log("consonant");
    } 
}
characters("r");
// 5. Create a function that takes three numbers as input and returns the largest among them.
function  largestnumber(a,b,c){
    if (a>b && a>c){
        console.log("largest -:",a)
    }
    else if(b>a && b>c){
        console.log("largest - :",b)
    }
    else{
        console.log("largest -:", c)
    }
}
largestnumber(6,9,-2);

// 6. Write a program that checks if a given number is positive, negative, or zero.
function numbertype(num){
    if (num >0){
        console.log("positive");
    }
    else if (num < 0){
        console.log("negative");
    }
    else{
        console.log("Zero")
    }
}
numbertype(5)

// 7. Implement a function that calculates the grade of a student based on their score.


function Getgrade(numbers){
    if (numbers>=90){
        console.log("A")
    }
    else if(numbers>=80 ){
        console.log("B")
    }
    else if (numbers>=70){
        console.log("C")
    }
    else if (numbers>=60){
        console.log("D")
    }
    else{
        console.log("E")
    }
}
Getgrade(79);

// 8. Create a program that determines if a given string is a palindrome.
function palindrome(str) {
    let reverse = "";
    for (let i = str.length -1; i >= 0; i--) {
        reverse += str[i];
    }
    if (str === reverse) {
        console.log("palindrome");
    } else { 
        console.log("not a palindrome");
    }
}
palindrome("Rajkumar"); 

// 9. Write a function that checks whether a person is eligible to vote based on their age.

function vote(age){
    if (age>=18){
        console.log("eligible")
    }
    else{
        console.log("not eligible ")
    }
    
}
vote(2);
// 10. Implement a program that determines the type of a triangle based on the lengths of its sides.

function TypeOftriangle(a, b, c) {
    if (a == b && b == c) {
        console.log("equilateral");
    }
     else if (a == b || b == c || c == a) {
        console.log("isosceles");
    } 
    else {
        console.log("scalene");
    }
}
TypeOftriangle(13, 3, 32);