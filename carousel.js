!(function ($) {
  window.onload = function () {
    var gradComment = [["MUCH DATA HERE"]];
    var randoNum = Math.floor(Math.random() * 1200 + 1);
    var comment = $(".one");
    var commentTwo = $(".two");
    var commentThree = $(".three");
    $(comment).append(gradComment[i]);
    $(commentTwo).append(gradComment[i + 1]);
    $(commentThree).append(gradComment[i + 2]);
    function postGrad(i) {
      var quote = Object.values($(".quote"));
      quote.forEach(function (text) {
        if (text.innerText === "") {
          text.innerText = "Congratulations!";
        }
      });
      if (gradComment[i] === undefined) {
        postGrad(randoNum);
      }
      if (i < gradComment.length) {
        setTimeout(function () {
          $(".student").remove();
          $(".quote").remove();
          $(".author").remove();
          i++;
          $(comment).append(gradComment[i]);
          $(commentTwo).append(gradComment[i + 1]);
          $(commentThree).append(gradComment[i + 2]);
          postGrad(i + 3);
        }, 10000);
      }
    }
    postGrad(randoNum);
  };
})(jQuery);
