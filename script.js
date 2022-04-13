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
  var item = items[Math.floor(Math.random() * items.length)];
  var word = words[Math.floor(Math.random() * items.length)];
  $target.html(
    "<h4 id='my' class='text-center'>" +
      <a href={item}> {word} </a> +
      "</h4><p id='para'>"
  );
}

var items = Array(
  "https://www.youtube.com/watch?v=l4UkYBr1NnA&ab_channel=Fredagain..",
  "https://youtu.be/G04fG-4JcrI",
  "https://youtu.be/oZ4Wu-1jBsA",
  "https://www.youtube.com/watch?v=zPrUtko9jMs",
  "https://youtu.be/sZd-t5-I5uA",
  "https://youtu.be/6VFoh5AbpBM",
  "https://www.youtube.com/watch?v=EtMb1MYjdDQ",
  "https://www.youtube.com/watch?v=Sp6idnemeE0",
  "https://www.youtube.com/watch?v=WGbLX4u6kyk",
  "https://youtu.be/prR9YVj2Ip8",
  "https://youtu.be/wMRFp9zBBwY",
  "https://www.youtube.com/watch?v=sOS9aOIXPEk",
  "https://www.youtube.com/watch?v=q3drqHDn1bs",
  "https://youtu.be/usuHRa9MNIc",
  "https://www.youtube.com/watch?v=tidhZ1YBR-A&ab_channel=Elderbrook-Topic",
  "https://www.youtube.com/watch?v=U2JMCxOmjRk",
  "https://www.youtube.com/watch?v=cTMucy4PR2k"
);
var words = [
  "hewe you go",
  "moi",
  "ilysm ymbf",
  "broccoli",
  "sotd",
  "akulchev",
];
