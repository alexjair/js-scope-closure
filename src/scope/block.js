function funVerFrutas(){
    
    if(true){
        var vFruta01 = "Platano"; //function scope
        let vFruta02 = "Manzana"; //block scope
        const vFruta03 = "Pera"; //block scope
        vFruta04 = "kiwi"; //Global scope

        console.log(vFruta02);
        console.log(vFruta03);
    }

    console.log(vFruta01);
    //console.log(vFruta02);
    //console.log(vFruta03);
    console.log(vFruta04);
}

funVerFrutas();