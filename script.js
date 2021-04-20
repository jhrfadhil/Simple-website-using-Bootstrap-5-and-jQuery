// parralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  // Jumbotron
  $(".jumbotron img").css({
    transform: "translate(0px, " + wScroll / 3 + "%)",
  });

  $(".jumbotron h1").css({
    transform: "translate(0px, " + wScroll + "%)",
  });

  $(".jumbotron p").css({
    transform: "translate(0px, " + wScroll / 0.45 + "%)",
  });
  //Akhir Jumbutron

  // About
  if (wScroll > $(".pkiri").offset().top - 400) {
    $(".pkiri").addClass("pmuncul");
    $(".pkanan").addClass("pmuncul");
  }
  // Akhir About

  // Gallery
  if (wScroll > $(".card").offset().top - 390) {
    $(".card").each(function (i) {
      setTimeout(function () {
        $(".card").eq(i).addClass("muncul");
      }, 500 * i);
    });
  }
  // Akhir Gallery
});
// Akhir Parallax
