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
const passwordList = document.getElementById("passwordList")
const typePasswords = document.getElementById("typePasswords")
const maximum_length = 50
let password = "";


let randomstring = ""
let generated_password = ""
submit.onclick = function(){
    let password_amount = Number(document.getElementById("amount").value)
    if(password_amount == 1){
    result.textContent = "Password generated successfully"
    result.style.backgroundColor = "green"
    }
    else{
    result.textContent = "Password/s generated successfully"
    result.style.backgroundColor = "green"
    }
    passwordList.textContent = ""
    result.textContent = ""
    generated_password = ""
    extracted_char = ""
    randomarray = []
    randomstring = ""

if(password_amount > 100){
    result.textContent = "You may not generate more than 100 passwords at once"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}

else{
for(let i = 0; i < password_amount;i++){


    if(typePasswords.value == "repeated"){
        password = repeatedPassword()
    }
    else if(typePasswords.value == "unique"){
        password = uniquePassword()
    }
     const li = document.createElement("li")
    li.textContent = password
    li.style.backgroundColor = "yellow"
    passwordList.appendChild(li)

         password = ""
         generated_password = ""
    extracted_char = ""
    randomarray = []
    randomstring = ""
}


}



}

        function uniquePassword(){
                        let letters_amount = Number(document.getElementById("letter").value)
let big_letters_amount = Number(document.getElementById("bigletter").value)
let numbers_amount = Number(document.getElementById("number").value)
let symbols_amount = Number(document.getElementById("symbol").value)
            if(!letters_amount && !big_letters_amount && !numbers_amount && !symbols_amount){
    result.textContent = "Complete the generation form above"
    result.style.backgroundColor = "red"
}
else{

        if(letters_amount + numbers_amount + symbols_amount + letters_amount > maximum_length){
    result.textContent = `Your unique password may not be higher than ${maximum_length} characters`
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
    }
        else if(numbers_amount > numbers.length || symbols_amount > symbols.length || letters_amount > letters.length || big_letters_amount > big_letters.length){
    result.textContent = "Your amount of numbers/symbols/letters cannot be higher than available"
    result.style.backgroundColor = "red"
    result.style.display = "inline-block"
}
    else if(letters_amount + numbers_amount + symbols_amount + letters_amount > maximum_length){
    result.textContent = `Your unique password may not be higher than ${maximum_length} characters`
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

    randomstring += letter
    
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
  }}
return generated_password
    }   
  
    


        function repeatedPassword(){
                        let letters_amount = Number(document.getElementById("letter").value)
let big_letters_amount = Number(document.getElementById("bigletter").value)
let numbers_amount = Number(document.getElementById("number").value)
let symbols_amount = Number(document.getElementById("symbol").value)
            if(!letters_amount && !big_letters_amount && !numbers_amount && !symbols_amount){
    result.textContent = "Complete the generation form above"
    result.style.backgroundColor = "red"
}
else if(letters_amount + big_letters_amount + numbers_amount + symbols_amount > maximum_length){
    result.textContent = `Your password may not be higher than ${maximum_length} characters`
    result.style.backgroundColor = "red"
}
else{

  
  
while(randomstring.length < letters_amount){
    let random_letters = Math.floor(Math.random() * letters.length)
    let letter = letters[random_letters]
    randomstring += letter
    
}

while(randomstring.length < big_letters_amount + letters_amount){
    let random_bigletters = Math.floor(Math.random() * big_letters.length)
    let bigletter = big_letters[random_bigletters]
    randomstring += bigletter
    
}

while(randomstring.length < numbers_amount + letters_amount + big_letters_amount){
    let random_numbers = Math.floor(Math.random() * numbers.length)
    let number = numbers[random_numbers]
    randomstring += number
}
while(randomstring.length < symbols_amount + numbers_amount + letters_amount + big_letters_amount){
    let random_symbols = Math.floor(Math.random() * symbols.length)
    let symbol = symbols[random_symbols]
    randomstring += symbol
}

let randomarray = randomstring.split("")



while(generated_password.length < randomarray.length){
    let randindex = Math.floor(Math.random() * randomarray.length)
    let extracted_char = randomarray.slice(randindex,randindex + 1)
    generated_password += extracted_char
}}
return generated_password
    }   
  





