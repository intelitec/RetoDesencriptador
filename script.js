const inputTexto = document.querySelector(".cuadrotxt")
const mensaje = document.querySelector(".msg")

function btnEncriptar(){
    const txtLeer= encriptar(inputTexto.value);
    inputTexto.value="";
    mensaje.style.backgroundImage="none";
    mensaje.value=txtLeer;
}

function encriptar(txtEncriptar){
    let matRule = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    txtEncriptar = txtEncriptar.toLowerCase();

    for(let i=0; i<matRule.length;i++){
        if(txtEncriptar.includes(matRule[i][0])){
            txtEncriptar=txtEncriptar.replaceAll(matRule[i][0],matRule[i][1]);
            console.log(i);
        }
    }
    return txtEncriptar
}

function btnDesencriptar(){
    const txtLeer= Desencriptar(inputTexto.value);
    inputTexto.value="";
    mensaje.style.backgroundImage="none";
    mensaje.value=txtLeer;
}

function Desencriptar(txtEncriptar){
    let matRule = [["e", "enter"], ["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    txtEncriptar = txtEncriptar.toLowerCase();

    for(let i=0; i<matRule.length;i++){
        if(txtEncriptar.includes(matRule[i][1])){
            txtEncriptar=txtEncriptar.replaceAll(matRule[i][1],matRule[i][0]);
            console.log(i);
        }
    }
    return txtEncriptar
}

function btnCopiar(){
    navigator.clipboard.writeText(mensaje.value);
    alert("Texto copiado.");
    mensaje.value="";

}