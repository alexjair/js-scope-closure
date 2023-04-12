
/*const vGlobal = 0;

function funVerClosure(){
    const vNomber = 1;
    console.log(vGlobal);

    function funParent(){
        const vInner = 2;
        console.log(vNomber, vGlobal);

        function funChild(){
            console.log(vInner, vNomber, vGlobal);
        }

        return funChild();
    }

    return funParent();
}

funVerClosure();
*/


//export 
function sumWithClosure(firstNum = 0) {

    function funSuma(secNum = 0) {
      let vSuma = firstNum + secNum;
      return vSuma;
    }
  
    let vResult = funSuma;
    return vResult;
  }
  
  vClosure = sumWithClosure(2)(3);
  console.log(vClosure);
  vClosure = sumWithClosure(90)();
  console.log(vClosure);
  