const seloBotao = document.querySelector("#selo-botao");
const selo = document.querySelector("#selo");
const abaEnvelope = document.querySelector("#aba-envelope");
const carta = document.querySelector("#carta");
const texto = document.querySelector("#texto");
const botaoSite = document.querySelector("#botao-site");

let conviteAberto = false;
let indoParaSite = false;

seloBotao.addEventListener("click", function () {
  if (conviteAberto) {
    return;
  }

  conviteAberto = true;

  texto.classList.add("sumindo");

  selo.classList.add("abrindo");

  setTimeout(function () {
    abaEnvelope.classList.add("aberta");
  }, 450);

  setTimeout(function () {
    carta.classList.add("saindo");
  }, 950);

  setTimeout(function () {
    carta.classList.remove("saindo");
    carta.classList.add("aberta");
  }, 1500);

  setTimeout(function () {
    botaoSite.hidden = false;

    setTimeout(function () {
      botaoSite.classList.add("visivel");
    }, 50);
  }, 2300);
});

botaoSite.addEventListener("click", function (event) {
  event.preventDefault();

  if (indoParaSite) {
    return;
  }

  indoParaSite = true;

  const destino = botaoSite.href;

  document.body.classList.add("saindo-site");

  setTimeout(function () {
    window.location.href = destino;
  }, 450);
});