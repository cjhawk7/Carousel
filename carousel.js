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

    $(".search-button").click(function (e) {
      e.preventDefault();
      var slicedQuote;
      $(".student-searched").remove();
      $(".quote-searched").remove();
      $(".author-searched").remove();
      $(".error-msg").remove();
      var lastName = $("#fname").val().toLowerCase().replaceAll("[-+.^:,]", "");
      gradComment.forEach(function (comment) {
        var slicedComment = $(comment[0]).slice();
        if (lastName === "") {
          return;
        }
        if (comment) {
          if (slicedComment[0]) {
            if (slicedComment[0].innerText.toLowerCase().replaceAll("[-+.^:,]", "").includes(lastName)) {
              console.log($(".error-msg"));
              slicedQuote = '<p class="quote-searched">' + slicedComment[1].innerText + "</p>";
              slicedAuthor = '<p class="author-searched"> - ' + slicedComment[2].innerText + "</p>";
              if (slicedAuthor === "undefined") {
                slicedComment[2].innerText = "Yours truly"
              }
              $(slicedAuthor).insertAfter(".search-button")
              $(slicedQuote).insertAfter(".search-button")
              $(".error-msg").remove();
            } if (slicedComment[0].innerText.toLowerCase().replaceAll("[-+.^:,]", "").includes(lastName) === false) {
              var errorMessage = '<p class="error-msg">Could not find any messages!</p>'
              $(".error-msg").remove();
              $(errorMessage).insertAfter(".search-button")
              setTimeout(function () {
                $(".error-msg").remove();
              }, 1000);
            }
          }
        }
      })
    })

    var randoNum = Math.floor(Math.random() * 195 + 1);
    var comment = $(".one");
    var commentTwo = $(".two");
    var commentThree = $(".three");
    $(comment).append(gradComment[0]);
    $(commentTwo).append(gradComment[1]);
    $(commentThree).append(gradComment[2]);
    var count = 0;
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
          count++
          console.log($(".student").text())
          postGrad(i + 2);
        }, 10000);
      }
    }
    postGrad(randoNum);
  };
})(jQuery);
