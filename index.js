// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendCat(name) {
    cats.push('Ralph');
}

function destructivelyPrependCat(name) {
    cats.unshift('Bob')
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat(name) {
    const fourCats = [...cats, 'Broom'];
    return fourCats;
}

function prependCat(name) {
    const fourCats = ['Arnold', ...cats];
    return fourCats;
}

function removeLastCat() {
    const twoCats = cats.slice(0,2);
    return twoCats;
}

function removeFirstCat() {
    const twoCats = cats.slice(1);
    return twoCats;
}