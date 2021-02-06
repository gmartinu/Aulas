var sets = new Set();
sets.add('a');
sets.add('b');
sets.add('a'); // Adicionando valores duplicados;

for (let element of sets) {
    console.log(element);
}