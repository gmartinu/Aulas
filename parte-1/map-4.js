var map = new Map();
map.set('nome', 'João');
map.set('id', 10);

for (let element of map) {
    console.log(element);
}

for (let [key, value] of map) {
    console.log(key+" - "+value);
}