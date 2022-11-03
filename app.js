//inDrop 
const inSelect = document.getElementById("inputSelec");
//outDrop
const outSelect = document.getElementById("outputSelec");
//inputBox
const inputBox = document.getElementById("txtInput");
//outputBox
const outputBox = document.getElementById("txtOutput");

//inBase
var inBase = Number(inSelect.value) ;
//outBase
var outBase =  Number(outSelect.value) ;
//generalized Number 
var generalizedNumber ;
inSelect.oninput =()=> {
    inBase = Number(inSelect.value)  ;
} 
outSelect.oninput =()=> {
    outBase = Number(outSelect.value) ; 
}

inputBox.oninput = ()=>{
    generalizedNumber= anyNumberToDecimal(inputBox.value,inBase);
    console.log(generalizedNumber)
    let final = decimalToNumberConvertor(generalizedNumber,outBase);
    outputBox.innerText = final ;
}


