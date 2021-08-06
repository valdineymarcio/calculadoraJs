import {adicionaExpressao} from "./expressao.js";
import {limpar} from "./expressao.js";


export function adicionaHistorico(c) {
    var pai = document.getElementById('hist');
    var filho = document.createElement('button');
    var neto = document.createTextNode(c);
    neto.value = c;
    filho.appendChild(neto);
    pai.appendChild(filho);
    filho.addEventListener('click', function () {
        limpar();
        adicionaExpressao(neto.value);
    })

}
