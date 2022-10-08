let strings1 = ["i", "will", "be", "uppercase"];
let strings2 = ["I","WILL","BE","LOWERCASE"];
console.log(strings1+`-->`+(strings1.map(strings1=>strings1.toUpperCase())));
console.log(strings2+`-->`+(strings2.map(strings2=>strings2.toLocaleLowerCase())));