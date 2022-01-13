function verificar() {
    var data = new Date();
    var ano = data.getFullYear(); //full year pega os 4 digitos do ano por exemplo 2 0 2 1
    var nascimento = document.getElementById('txtano');
    var res = document.querySelector('div#res')
    if (nascimento.value.length == 0 || Number(nascimento.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente');
    } else {
        var sexo = document.getElementsByName('radsex');
        var idade = ano - Number(nascimento.value);
        var genero = '';
        var img = document.createElement('img');
        img.setAttribute('id', 'foto');
        if (sexo[0].checked) {
            genero = 'homem';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebem.png');
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemm.png');
            }
            else if (idade < 50) {
                img.setAttribute('src', 'adultom.png');
            } else {
                img.setAttribute('src', 'idosom.png');
            }
        } else if (sexo[1].checked) {
            genero = 'mulher';
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebef.png');
            }
            else if (idade < 21) {
                img.setAttribute('src', 'jovemf.png');
            }
            else if (idade < 50) {
                img.setAttribute('src', 'adultof.png');
            } else {
                img.setAttribute('src', 'idosaf.png');
            }
        }
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
        res.appendChild(img);
    }
}