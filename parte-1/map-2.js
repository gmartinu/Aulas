var map = new Map();
map.set('nome', 'João');
map.set('nome', 'André');
map.set(1, 'número 1');
map.set(NaN, 'Sem valor');

map.get('nome'); // André. João foi substituído pelo André.
map.get(1); // número 1
map.get(NaN); // Sem valor