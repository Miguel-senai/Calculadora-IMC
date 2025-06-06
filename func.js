function calcular_imc() {
    var nome = document.getElementById('nome').value;
    var peso = parseFloat(document.getElementById('peso').value);
    var altura = parseFloat(document.getElementById('altura').value);
    var sexo = '';
    var masculino = document.getElementById('masculino');
    var feminino = document.getElementById('feminino');

    if (masculino.checked) {
        sexo = masculino.value;
    } else if (feminino.checked) {
        sexo = feminino.value;
    }

    var calculo = peso / (altura * altura);
    calculo = calculo.toFixed(1);

    var resultado = 'Oi, ' + nome + ' Seu IMC é: ' + calculo + '. ';

    if (sexo === "Masculino") {
        if (calculo < 20.7) {
            resultado += 'Você está abaixo do peso.';
        } else if (calculo >= 20.7 && calculo <= 26.4) {
            resultado += 'Peso normal.';
        } else if (calculo >= 26.4 && calculo <= 27.8) {
            resultado += 'pouco acima do peso';
        } else if (calculo >= 27.8 && calculo <= 31.1) {
            resultado += 'acima do peso';
        } else if (calculo > 31.1) {
            resultado += 'obeso';
        }
    } else if (sexo === "Feminino") {
        if (calculo < 19.1) {
            resultado += 'Você está abaixo do peso.';
        } else if (calculo >= 19.1 && calculo <= 25.8) {
            resultado += 'Você está no peso normal.';
        } else if (calculo >= 25.8 && calculo <= 27.3) {
            resultado += 'Você está pouco acima do peso';
        } else if (calculo >= 27.3 && calculo <= 32.3) {
            resultado += 'Você está acima do peso';
        } else if (calculo > 32.3) {
            resultado += 'Você é obesa.';
        }
    }

    document.getElementById('resultado').textContent = resultado;
}