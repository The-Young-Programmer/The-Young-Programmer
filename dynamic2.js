var sec1__menuIcon = document.querySelector(".sec1__menuIcon");
      var menuBar = document.querySelector(".menuBar");
      sec1__menuIcon.addEventListener("click", function () {
        sec1__menuIcon.classList.toggle("active");
        menuBar.classList.toggle("active");
      });