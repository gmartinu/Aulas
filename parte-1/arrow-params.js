// let NovaComParametros = (a, b) => {
//     console.log(a+b); // 30
// }
// NovaComParametros(10, 20);

// // Função com parametros pré definidos.
// let Func = (a, b = 10) => {
//     return a + b; 
// }
// Func(20); // 20 + 10 = 30
// Func(20, 20); // 20 + 20 = 40

let FuncaoInativa = (a = 10, b) => {
    return a + b;
}
FuncaoInativa(20); // NAN. 