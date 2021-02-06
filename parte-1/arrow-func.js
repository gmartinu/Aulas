// Syntax Antiga
function antiga() {
    console.log("Olá Mundo Antigo..!");
}

// Syntax Nova

// var nova = -> Declaração de variável
// () -> Definição dos parametros da função
// => {...} Corpo da função
var nova = () => {
    console.log("Olá Mundo novo..!");
}

// // Função comum porém quando está sem o { } o valor após => é retornado automáticamente.
// var nova_retorno = () => "Olá Mundo..!";
// var olaMundo = nova_retorno();
// console.log(olaMundo)

// // Função anônima utilizada para call única sync ou async. 
// (() => console.log("Olá Mundo Anonônimo..!"))();

// antiga();
nova();