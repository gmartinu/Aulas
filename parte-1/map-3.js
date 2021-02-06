var map = new Map();
map.set('nome', 'João');
map.set('id', 10);

map.size; // 2. Retorna o tamanho do map.
map.keys(); // Retorna apenas as keys. 
map.values(); // Retorna apenas os valores.

for (let key of map.keys()) {
    console.log(key);
}