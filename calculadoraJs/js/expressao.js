import {calcular} from "./calculos.js";

export var expressao = '';

export function adicionaExpressao(digito) {
    expressao = expressao + digito;
    expressao = expressao.toString();
    document.getElementById('expressao').value = expressao;
    calcular(expressao);
}

export function adicionaExpressaoInput(digito) {
    document.getElementById('expressao').value = digito;
    expressao = document.getElementById('expressao').value;
    calcular(expressao);
}
export function limpar() {
    expressao = '';
    document.getElementById('expressao').value = expressao;
}