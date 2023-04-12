//saveCoins = 0;

/*
function moneyBox(coins) {
    let saveCoins = 0;
    saveCoins += coins;
    console.log(`MoneyBox: S/.${saveCoins}`);
}

moneyBox(5);
moneyBox(5);
*/


function funMoneyBox(){
    let vAhorro = 0;

    function funAgruparMoney(vMoneyIngreso){
        vAhorro = vAhorro + vMoneyIngreso;
        console.log(`Dinero ingresado: ${vMoneyIngreso}`);
        return vAhorro;
    }
    return funAgruparMoney;
}

const vChancho = funMoneyBox();
console.log(vChancho(5));
console.log(vChancho(5));
console.log(vChancho(15));


//--------------------------------------


function moneyBox(){
    let saveCoins = 0;

    function countCoins(coins){
        saveCoins += coins;
        console.log(`MoneyBox: $${saveCoins}`);
    }
    return countCoins;
}

const myMoneyBox = moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const myMoneyBoxAna = moneyBox();
myMoneyBoxAna(10);
myMoneyBoxAna(20);
myMoneyBoxAna(5);

//--------------------------------------------------------

function funMostarMascotas(){
    let vRow = [];

    function funAgruparMascotas(vMascotas = ""){
        if(vMascotas == ""){
            console.log(`No se Ingreso Mascota`);
        }else{
            vRow.push(vMascotas);
            console.log(`Mascota ingresado: ${vMascotas}`);
        }
        return vRow;
    }
    return funAgruparMascotas;
}

const vMisMascotas = funMostarMascotas();
console.log(vMisMascotas("michi"));
console.log(vMisMascotas("firulais"));
console.log(vMisMascotas([22,22]));
console.log(vMisMascotas(""));


