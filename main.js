let num1 = parseFloat(prompt('Please enter the first number : (e.g. 1, 2, 3)'))
let operation = prompt('Enter in the operation sign : (e.g. +, -, *, /)')
let num2 = parseFloat(prompt('Please enter in the second number : (e.g. 1, 2, 3)'))

if (operation == '+') {
    alert(num1 + num2)
}else if (operation == "-"){
    alert(num1 - num2)
}else if (operation == "*"){
    alert(num1 * num2)
}else if (operation == "/"){
    alert(num1 / num2)
}else{
    alert("Invalid operation sign. Refresh and try again.")
}
