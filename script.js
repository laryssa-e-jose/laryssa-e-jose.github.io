const seloBotao = document.querySelector("#selo-botao");
const selo = document.querySelector("#selo");
const abaEnvelope = document.querySelector("#aba-envelope");
const envelopeConjunto = document.querySelector("#envelope-conjunto");
const carta = document.querySelector("#carta");
const texto = document.querySelector("#texto");

let conviteAberto = false;

seloBotao.addEventListener("click", function () {
  if (conviteAberto) {
    return;
  }

  conviteAberto = true;

  /* 1. O texto desaparece */
  texto.classList.add("sumindo");

  /* 2. O selo diminui e desaparece */
  selo.classList.add("abrindo");

  /* 3. A aba recebe a classe de abertura */
  setTimeout(function () {
    abaEnvelope.classList.add("aberta");
  }, 450);


  /* 5. A carta sobe e passa para frente */
setTimeout(function () {
  carta.classList.add("saindo");
}, 950);

setTimeout(function () {
  carta.classList.remove("saindo");
  carta.classList.add("aberta");
}, 1450);