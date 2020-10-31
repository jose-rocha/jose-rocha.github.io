(function form(win, doc) {
  "use strict";
  let nameEmail = doc.querySelector(".result");
  let name = doc.querySelector("#name");
  let email = doc.querySelector("#email");
  let btn = doc.querySelector("#btn");

  function enviar(e) {
    e.preventDefault();
    nameEmail.innerHTML = `Meu nome é ${name.value} e meu email é: ${email.value}<br /><br />`;
  }

  btn.addEventListener("click", enviar, false);

  /*  console.log(nameEmail);
  console.log(name);
  console.log(email); */
})(window, document);
