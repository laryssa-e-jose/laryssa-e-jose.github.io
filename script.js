const seloBotao =
  document.querySelector("#selo-botao");

const selo =
  document.querySelector("#selo");

const abaEnvelope =
  document.querySelector("#aba-envelope");

const envelopeConjunto =
  document.querySelector("#envelope-conjunto");

const carta =
  document.querySelector("#carta");

const texto =
  document.querySelector("#texto");

const botaoSite =
  document.querySelector("#botao-site");

let conviteAberto = false;
let indoParaSite = false;


/* =========================
   ABERTURA DO CONVITE
========================= */

seloBotao.addEventListener(
  "click",
  function () {

    if (conviteAberto) {
      return;
    }

    conviteAberto = true;

    /* Para a respiração do envelope */
    envelopeConjunto.classList.add(
      "aberto"
    );

    /* Texto desaparece */

    texto.classList.add(
      "sumindo"
    );

    /* Selo desaparece */

    selo.classList.add(
      "abrindo"
    );

    /* Aba abre */

    setTimeout(
      function () {

        abaEnvelope.classList.add(
          "aberta"
        );

      },
      450
    );

    /* Carta começa a sair */

    setTimeout(
      function () {

        carta.classList.add(
          "saindo"
        );

      },
      950
    );

    /* Carta termina de sair */

    setTimeout(
      function () {

        carta.classList.remove(
          "saindo"
        );

        carta.classList.add(
          "aberta"
        );

      },
      1500
    );

    /* Botão aparece */

    setTimeout(
      function () {

        botaoSite.hidden = false;

        requestAnimationFrame(
          function () {

            botaoSite.classList.add(
              "visivel"
            );

          }
        );

      },
      2300
    );

  }
);


/* =========================
   REDIRECIONAMENTO
========================= */

botaoSite.addEventListener(
  "click",
  function (event) {

    event.preventDefault();

    if (indoParaSite) {
      return;
    }

    indoParaSite = true;

    const destino =
      botaoSite.href;

    document.body.classList.add(
      "saindo-site"
    );

    setTimeout(
      function () {

        window.location.href =
          destino;

      },
      450
    );

  }
);