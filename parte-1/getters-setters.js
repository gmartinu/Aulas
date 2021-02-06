class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
}

let pessoa = new Pessoa("João das Neves");
console.log(pessoa.getNome());

pessoa.setNome("Muié dos dragão");
console.log(pessoa.getNome());