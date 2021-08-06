import {adicionaExpressao} from "./expressao.js";
import {adicionaExpressaoInput} from "./expressao.js";
import {limpar} from "./expressao.js";


const alg = document.getElementsByClassName("bt");

for (var i =0; i< alg.length;i++){
if(alg[i].value === "limpar"){
        alg[i].addEventListener("click", function () {
            limpar();
        })
    }else
    {
        alg[i].addEventListener("click", function () {
            adicionaExpressao(this.value);
        })
    }
}

const expressao = document.getElementById("expressao");

try {
    expressao.addEventListener("keyup", function () {
        adicionaExpressaoInput(this.value)
    })
}catch (e) {
    console.log(e)
}

