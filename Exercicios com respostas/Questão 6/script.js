(function cronometro(win, doc) {
  "use strict";
  let cronometro = doc.querySelector("#cronometro");

  function relo() {
    let tempo = new Date();
    let Segundos = tempo.getSeconds();
    if (Segundos < 10) {
      Segundos = "0" + Segundos;
    }
    cronometro.innerHTML = Segundos;
  }
  setInterval(relo, 1000);
})(window, document);
