const letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o",
"p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0","1","2","3","4","5","6","7","8","9"];
const symbols = ["!","@","#","$","%","&"]
const submit = document.getElementById("submit")
const result = document.getElementById("result")

let randomstring = ""
let generated_password = ""
submit.onclick = function(){
let letters_amount = Number(document.getElementById("letter").value)
let numbers_amount = Number(document.getElementById("number").value)
let symbols_amount = Number(document.getElementById("symbol").value)

if(numbers_amount > numbers.length || symbols_amount > symbols.length){
    result.textContent = "Your amount of numbers/symbols cannot be higher than available"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}

else if(letters_amount + numbers_amount + symbols_amount > 20){
    result.textContent = "Your password may not have more than 20 characters"
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

while(randomstring.length < numbers_amount + letters_amount){
    let random_numbers = Math.floor(Math.random() * numbers.length)
    let number = numbers[random_numbers]
    if(randomstring.includes(number)){continue}
    else{randomstring += number}
}
while(randomstring.length < symbols_amount + numbers_amount + letters_amount){
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
    result.textContent = generated_password
    result.style.backgroundColor = "yellow"
    result.style.display = "inline-block"
}
}
