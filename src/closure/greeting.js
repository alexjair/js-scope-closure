function greeting(){
    let username = "Oscar";

    function funDisplayName(){
        return `Soy ${username}`;
    }

    return funDisplayName;
}

const a = greeting();
let b = greeting();
const c = greeting;
let d = greeting;

console.log(a);
console.log(b);
console.log(c);
console.log(d);

console.log(a());
console.log(b());
console.log(c()());
console.log(d()());

