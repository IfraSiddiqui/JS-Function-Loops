// ANSWER#1
for (var i = 200; i >= 0; i -= 3) {
    console.log(i);
}

 // ANSWER#2
n = 10;
i = 1;
while (i <= n) {
    console.log("Ifra siddiqui")
    i++;
}

 // ANSWER#3
let even = 1;
let num = 10;
let sum = 0;
while (even <= num) {
    if (even % 2 == 0) {
        sum = sum + even;
    }
    even++;
}
console.log("The sum of even numbers from 1 - 10 is:", sum);
 // ANSWER#4

let number = 1;
do {
    console.log(number);
    number = number + 1;
} while (number <= 5)

 // ANSWER#5
function add(a, b) {
    console.log("The sum of two numbers is ", a + b);
}
add(2, 9);

 // ANSWER#6
function areaOfrect(width, height) {

    var area = (width * height);
    console.log("The Area of a Rectangle is:", area);
}
var avg = areaOfrect(30, 10);