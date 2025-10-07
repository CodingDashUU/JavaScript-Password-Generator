const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];
const big_letters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N",
    "O","P","Q","R","S","T","U","V","W","X","Y","Z"
]
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","&","?"]
const submit = document.getElementById("submit")
const result = document.getElementById("result")
const reset = document.getElementById("reset")


let randomstring = ""
let generated_password = ""
submit.onclick = function(){
    result.textContent = ""
    generated_password = ""
    extracted_char = ""
    randomarray = []
    randomstring = ""
let password_amount = Number(document.getElementById("amount").value)
if(password_amount > 10){
    result.textContent = "You may not generate more than 10 passwords at once"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}
else{
for(let i = 0; i < password_amount;i++){
let letters_amount = Number(document.getElementById("letter").value)
let big_letters_amount = Number(document.getElementById("bigletter").value)
let numbers_amount = Number(document.getElementById("number").value)
let symbols_amount = Number(document.getElementById("symbol").value)


if(numbers_amount > numbers.length || symbols_amount > symbols.length || letters_amount > letters.length || big_letters_amount > big_letters.length){
    result.textContent = "Your amount of numbers/symbols/letters cannot be higher than available"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}

else if(letters_amount + numbers_amount + symbols_amount + big_letters_amount > 69){
    result.textContent = "Your password may not have more than 69 characters"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}
else{
while(randomstring.length < letters_amount){
    let random_letters = Math.floor(Math.random() * letters.length)
    let letter = letters[random_letters]
    if(randomstring.includes(letter)){
        continue
    }
    else{
    randomstring += letter
    }
}

while(randomstring.length < big_letters_amount + letters_amount){
    let random_bigletters = Math.floor(Math.random() * big_letters.length)
    let bigletter = big_letters[random_bigletters]
    if(randomstring.includes(bigletter)){
        continue
    }
    else{
    randomstring += bigletter
    }
}

while(randomstring.length < numbers_amount + letters_amount + big_letters_amount){
    let random_numbers = Math.floor(Math.random() * numbers.length)
    let number = numbers[random_numbers]
    if(randomstring.includes(number)){continue}
    else{randomstring += number}
}
while(randomstring.length < symbols_amount + numbers_amount + letters_amount + big_letters_amount){
    let random_symbols = Math.floor(Math.random() * symbols.length)
    let symbol = symbols[random_symbols]
    if(randomstring.includes(symbol)){continue}
    else{randomstring += symbol}
}

let randomarray = randomstring.split("")



while(generated_password.length < randomarray.length){
    let randindex = Math.floor(Math.random() * randomarray.length)
    let extracted_char = randomarray.slice(randindex,randindex + 1)
    if(generated_password.includes(extracted_char)){continue}
    else{generated_password += extracted_char}
}
    result.textContent += `Password ${i + 1}: ${generated_password}  ||  `
    result.style.backgroundColor = "yellow"
    result.style.display = "inline-block"
    generated_password = ""
    extracted_char = ""
    randomarray = []
    randomstring = ""
}
}
}
}



