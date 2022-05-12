$(document).ready(function () {
  $("#Message").on("click", function () {
    $("#target").fadeToggle(500).fadeToggle(500);
    //  $(".message").html("Here is the message ");
  });
});

var showText = function (target, message, index, interval) {
  if (index < message.length) {
    $(target).append(message[index++]);
    setTimeout(function () {
      showText(target, message, index, interval);
    }, interval);
  }
};

$(function () {
  showText("#target1", "-by ihbagsh karen karenovskii", 0, 200);
});

$("button").click(function () {
  randomSong();
});

function randomSong() {
  var $target = $("#target");
  var random = Math.floor(Math.random() * items.length);
  var item = items[random];
  var word = words[random];
  $target.html(
    "<h4 id='my' class='text-center'>" +
      `<a href=${item}>${word}</a>` +
      "</h4><p id='para'>"
  );
}

var items = Array(
  "https://www.youtube.com/watch?v=RI4h-cs450o",
  "https://www.youtube.com/watch?v=lCrO__-MH6E",
  "https://www.youtube.com/watch?v=xU-pLTx3Jq8",
  "https://www.youtube.com/watch?v=S13Q3XjbVPI",
  "https://www.youtube.com/watch?v=_k3jUpb9t2k",
  

);
var words = Array(
  "KennyHoopla - Lost Cause//",
  "DOPE LEMON vs. CEDRIC GERVAIS - HEY YOU",
  "CYANIDE",
  "rusowsky - so so",
  "STAY UP",
);
