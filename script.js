let number = Number(prompt("Enter a number"))

let remainder = (number % 2);

console.log(remainder);

if (remainder == 0) {
    alert(number + ' is an Odd number.')
}
else {
    alert(number + ' is an Even number.')
}