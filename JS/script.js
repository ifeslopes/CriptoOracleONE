/* Regras Codificador:
"e" é convertido para "enter"
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação
*/

/* Regras Decodificador:
"enter" é convertido para "e"
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação
*/

var botaocript = document.querySelector("#btn-cripto")
var nome;
botaocript.addEventListener("click", function(event) {
  event.preventDefault();
  var textoNormal = document.querySelector("#input-texto");

  var erro = document.querySelector(".erro");

  nome = textoNormal.value;
  if (!nome) {
    // verificar se caixa texto esta vazia

    erro.textContent = "insira um valor válido!"
  } else {
    var teste = remover_acentos_espaco(nome)

    if (teste) {
      var textoCripto = document.querySelector("#msg");
      textoCripto.value = criptoDescripto(nome);
      textoNormal.value = "";

      erro.textContent = "";
    } else {

      erro.textContent = "Erro! Sistema só é aceito letrassem acento e minúsculo";
    }
  }
});

var botaodescript = document.querySelector("#btn-descripto")
botaodescript.addEventListener("click", function (event) {
  event.preventDefault();
  var textoCripto = document.querySelector("#input-texto");
  var nome = textoCripto.value;
  textoCripto.value = "";
  textoCripto.value = descripiti(nome);
})



//Função sem replace
function criptoDescripto(palavra) {
  var  vogais = ["a", "e", "i", "o", "u"];
  var  cript = ["ai", "enter", "imes", "ober", "ufat"];
  var nome = vogais.indexOf(palavra.charAt(0));

  var nomecrip = '';
  for (var i = 0; i < palavra.length; i++) {
    nomecrip += (vogais.indexOf(palavra.charAt(i)) >= 0)?
    cript[vogais.indexOf(palavra.charAt(i))]:
    palavra.charAt(i);
  }

  return nomecrip;

}
//Função com replaceAll
function descripiti(palavra) {
  var  vogais = ["a", "e", "i","o","u"];
  var  cript = ["ai","enter","imes","ober","ufat"];
  var nomecrip = palavra;
  for (var i = 0; i < cript.length+1; i++) {
    nomecrip = nomecrip.replaceAll(cript[i], vogais[i])

  }

  return nomecrip;
}

//função copiar
var botaoCopia = document.querySelector('#btn-copy');
botaoCopia.addEventListener('click', execCopy);
function execCopy(event) {
  event.preventDefault();
  document.querySelector("#msg").select();
  document.execCommand("copy");
}

//testar se tem maiúsculas números com regex
function remover_acentos_espaco(str) {
  const regex = /[a-z ]{1,}/

  for (var i = 0; i < str.length; i++) {
    var teste = str.charAt(i);
    if (!regex.test(teste)) {
      return false;
    }
  }

  return true;
}