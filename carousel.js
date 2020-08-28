!(function ($) {
  window.onload = function () {
    var gradComment = [
      [
        '<p class="student">Tom Cruise</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Denzel Washington</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Brad Pitt</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Harrison Ford</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Michael Jordan</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Will Smith</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Leonardo Dicaprio</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">George Washington</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Abraham Lincoln</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Franklin Roosevelt</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Barack Obama</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
      [
        '<p class="student">Zeus</p><p class="quote">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p><p class="author">Lorem ipsum</p>',
      ],
    ];

    var comment = $(".one");
    var commentTwo = $(".two");
    var commentThree = $(".three");
    console.log(gradComment);
    function postGrad(i) {
      var quote = Object.values($(".quote"));
      quote.forEach(function (text) {
        if (text.innerText === "") {
          text.innerText = "Congratulations!";
        }
      });
      if (gradComment[i] === undefined) {
        postGrad(0);
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
        }, 4000);
      }
    }
    postGrad(0);
  };
})(jQuery);
