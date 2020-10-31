(function calendario(win, doc) {
  "use strict";

  let calendario = doc.querySelector("#calendario");
  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getUTCFullYear();

  if (day < 10) {
    day = "0" + day;
  }

  if (month < 10) {
    month = "0" + month;
  }

  calendario.innerHTML = `${day}/${month}/${year}`;
})(window, document);
