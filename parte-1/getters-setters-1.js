class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    get Nome() {
        return this.nome;
    }
    set Nome(nome) {
        this.nome = nome;
    }
}

let pessoa = new Pessoa("João das Neves");
console.log(pessoa.Nome);

pessoa.Nome = "Muié dos dragão";
console.log(pessoa.Nome);