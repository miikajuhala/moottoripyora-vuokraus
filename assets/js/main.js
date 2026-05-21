(function () {
  var toggle = document.querySelector(".nav-toggle");
  var menu = document.querySelector(".nav-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      var isOpen = menu.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  var form = document.getElementById("message-form");
  var status = document.getElementById("form-status");

  if (!form || !status) {
    return;
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    var dates = document.getElementById("dates").value.trim() || "[päivämäärät]";
    var pickup = document.getElementById("pickup").value.trim() || "[noutopaikka]";
    var experience = document.getElementById("experience").value.trim() || "[ajokokemus]";
    var rentalWay = document.getElementById("rental-way").value;

    var message = [
      "Hei, olen kiinnostunut vuokraamaan Yamaha MT-09 ABS 2015 -pyörän.",
      "",
      "Toivotut päivät: " + dates,
      "Nouto: " + pickup,
      "Ajokokemus: " + experience,
      "Vuokraustapa: " + rentalWay,
      "",
      "Onnistuuko vuokraus näille päiville?"
    ].join("\n");

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(message).then(function () {
        status.textContent = "Viestipohja kopioitu.";
      }).catch(function () {
        status.textContent = message;
      });
    } else {
      status.textContent = message;
    }
  });
})();
