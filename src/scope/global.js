//variables

var a; //declarando
var b = 'b';  //declarando y asignando

b = 'bb';  //reasignacion
var a = 'aa';  //redeclarando

//Global Scope
var fruit = 'Apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();

var vPera;

function funVer(){
    vPera = '333';
    console.log(vPera);
}

funVer();
console.log(vPera);