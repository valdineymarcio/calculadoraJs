import {expressao} from "./expressao.js";
import {limpar} from "./expressao.js";
import { adicionaHistorico} from "./historico.js";

export function calcular(x) {
    try {
        x = eval(x);
        document.getElementById('resultado').value = x;
        console.log(x);
        if ((isFinite(x))) {
            adicionaHistorico(expressao);
        }

        if (!(isFinite(x))) {
            window.alert("nao foi possivel!");
            document.getElementById('resultado').value = '';
            limpar();
        }
    } catch (e) {
        if (e instanceof SyntaxError) {
            console.log(expressao);
            console.log('nao é numero');
        } else if (e instanceof ReferenceError) {
            console.log("deu erro aqui :/ ");
            limpar();
        } else {
            throw e;
        }
    }
}



