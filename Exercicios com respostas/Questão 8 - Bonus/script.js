(function bf(win, doc) {
  "use strict";

  let btn = doc.querySelector("#btn");
  let resultado = doc.querySelector(".resultado");
  let resultado2 = doc.querySelector(".resultado2");

  function clique() {
    let ajax = new XMLHttpRequest();
    // console.log(ajax.status);
    ajax.open("GET", "DB.json");
    ajax.send();
    ajax.onreadystatechange = function () {
      // console.log(ajax.status);
      if (ajax.status == 200 && ajax.readyState == 4) {
        // console.log(ajax.readyState);
        /* alert(
          `O estado é ${ajax.status} e o estado final é ${ajax.readyState}`
        ); */

        let result = JSON.parse(ajax.responseText);
        let stack = result.Programador;
        let stack2 = result.Programador2;

        for (let i = 0; i < stack.length; i++) {
          resultado.innerHTML = `Estava estudando a Stack <h style="color: green">${stack2[i].Stack}</h> e estou assistindo o canal <h style="color: green">  ${stack2[i].Status}</h>,`;
          resultado2.innerHTML = `aonde estou estudando e aprendendo a Stack <h style="color: green"> ${stack[i].Stack} </h> para tentar ser <h style="color: green"> ${stack[i].Status} </h>`;
        }

        // console.log(result);
      } /* else {
        console.log(`O arquivo não foi  encontrado ou não existe!`);
      } */
    };
  }

  btn.addEventListener("click", clique, false);
})(window, document);
