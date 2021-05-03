alert("Seja Bem Vindo!")

let nameVelha = prompt("Qual o nome da pessoa mais velha?")

let ageVelha = prompt("Qual a idade da pessoa mais velha?")

alert("Obrigado " + nameVelha)

let nameNew = prompt("Qual o nome da pessoa mais nova?")

let ageNew = prompt("Qual a idade da pessoa mais nova")

alert("Obrigado " + nameNew)

let diferetAge =  (ageVelha - ageNew)

alert(
    nameVelha + " você é a pessoa mais velha!" + 
    "\nIdade: " + ageVelha + " anos\n\n" + nameNew + " você é a pessoa mais nova!" + "\nIdade: " + ageNew + " anos\n\n" + 
    "A diferença de idade entre as duas pessoas é de " + diferetAge + " anos")

    //o resultado será o nome e idade da pessoa mais velha e da mais nova e a difença de idade entre elas