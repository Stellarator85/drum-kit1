document.addEventListener("keydown", function (event1) {
  switch (event1.code) {
    case "KeyA":
      document.getElementById("aButton").classList.add("Key-button-onclick") +
        document
          .getElementById("clapA")
          .play((document.getElementById("clapA").currentTime = 0));
      break;
    case "KeyS":
      document.getElementById("sButton").classList.add("Key-button-onclick") +
        document
          .getElementById("hihatS")
          .play((document.getElementById("hihatS").currentTime = 0));
      break;
    case "KeyD":
      document.getElementById("dButton").classList.add("Key-button-onclick") +
        document
          .getElementById("kickD")
          .play((document.getElementById("kickD").currentTime = 0));
      break;
    case "KeyF":
      document.getElementById("fButton").classList.add("Key-button-onclick") +
        document
          .getElementById("openhatF")
          .play((document.getElementById("openhatF").currentTime = 0));
      break;
    case "KeyG":
      document.getElementById("gButton").classList.add("Key-button-onclick") +
        document
          .getElementById("boomG")
          .play((document.getElementById("boomG").currentTime = 0));
      break;
    case "KeyH":
      document.getElementById("hButton").classList.add("Key-button-onclick") +
        document
          .getElementById("rideH")
          .play((document.getElementById("rideH").currentTime = 0));
      break;
    case "KeyJ":
      document.getElementById("jButton").classList.add("Key-button-onclick") +
        document
          .getElementById("snareJ")
          .play((document.getElementById("snareJ").currentTime = 0));
      break;
    case "KeyK":
      document.getElementById("kButton").classList.add("Key-button-onclick") +
        document
          .getElementById("tomK")
          .play((document.getElementById("tomK").currentTime = 0));
      break;
    case "KeyL":
      document.getElementById("lButton").classList.add("Key-button-onclick") +
        document
          .getElementById("tinkL")
          .play((document.getElementById("tinkL").currentTime = 0));
      break;
    default:
      alert(
        `------ Please press another key or click the screen-button ------`
      );
  }
});

document.addEventListener("keyup", function (event2) {
  switch (event2.code) {
    case "KeyA":
      document.getElementById("aButton").classList.remove("Key-button-onclick");
      break;
    case "KeyS":
      document.getElementById("sButton").classList.remove("Key-button-onclick");
      break;
    case "KeyD":
      document.getElementById("dButton").classList.remove("Key-button-onclick");
      break;
    case "KeyF":
      document.getElementById("fButton").classList.remove("Key-button-onclick");
      break;
    case "KeyG":
      document.getElementById("gButton").classList.remove("Key-button-onclick");
      break;
    case "KeyH":
      document.getElementById("hButton").classList.remove("Key-button-onclick");
      break;
    case "KeyJ":
      document.getElementById("jButton").classList.remove("Key-button-onclick");
      break;
    case "KeyK":
      document.getElementById("kButton").classList.remove("Key-button-onclick");
      break;
    case "KeyL":
      document.getElementById("lButton").classList.remove("Key-button-onclick");
      break;
    default:
      null;
  }
});

document
  .getElementsByClassName("Key-button")[0]
  .addEventListener("mousedown", function (event3) {
    if (event3.which === 1)
      return (
        document
          .getElementById("clapA")
          .play((document.getElementById("clapA").currentTime = 0)) +
        document.getElementById("aButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[0]
  .addEventListener("mouseup", function (event4) {
    if (event4.which === 1)
      return document
        .getElementById("aButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[1]
  .addEventListener("mousedown", function (event5) {
    if (event5.which === 1)
      return (
        document
          .getElementById("hihatS")
          .play((document.getElementById("hihatS").currentTime = 0)) +
        document.getElementById("sButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[1]
  .addEventListener("mouseup", function (event6) {
    if (event6.which === 1)
      return document
        .getElementById("sButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[2]
  .addEventListener("mousedown", function (event7) {
    if (event7.which === 1)
      return (
        document
          .getElementById("kickD")
          .play((document.getElementById("kickD").currentTime = 0)) +
        document.getElementById("dButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[2]
  .addEventListener("mouseup", function (event8) {
    if (event8.which === 1)
      return document
        .getElementById("dButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[3]
  .addEventListener("mousedown", function (event9) {
    if (event9.which === 1)
      return (
        document
          .getElementById("openhatF")
          .play((document.getElementById("openhatF").currentTime = 0)) +
        document.getElementById("fButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[3]
  .addEventListener("mouseup", function (event10) {
    if (event10.which === 1)
      return document
        .getElementById("fButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[4]
  .addEventListener("mousedown", function (event11) {
    if (event11.which === 1)
      return (
        document
          .getElementById("boomG")
          .play((document.getElementById("boomG").currentTime = 0)) +
        document.getElementById("gButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[4]
  .addEventListener("mouseup", function (event12) {
    if (event12.which === 1)
      return document
        .getElementById("gButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[5]
  .addEventListener("mousedown", function (event13) {
    if (event13.which === 1)
      return (
        document
          .getElementById("rideH")
          .play((document.getElementById("rideH").currentTime = 0)) +
        document.getElementById("hButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[5]
  .addEventListener("mouseup", function (event14) {
    if (event14.which === 1)
      return document
        .getElementById("hButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[6]
  .addEventListener("mousedown", function (event15) {
    if (event15.which === 1)
      return (
        document
          .getElementById("snareJ")
          .play((document.getElementById("snareJ").currentTime = 0)) +
        document.getElementById("jButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[6]
  .addEventListener("mouseup", function (event16) {
    if (event16.which === 1)
      return document
        .getElementById("jButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[7]
  .addEventListener("mousedown", function (event17) {
    if (event17.which === 1)
      return (
        document
          .getElementById("tomK")
          .play((document.getElementById("tomK").currentTime = 0)) +
        document.getElementById("kButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[7]
  .addEventListener("mouseup", function (event18) {
    if (event18.which === 1)
      return document
        .getElementById("kButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementsByClassName("Key-button")[8]
  .addEventListener("mousedown", function (event19) {
    if (event19.which === 1)
      return (
        document
          .getElementById("tinkL")
          .play((document.getElementById("tinkL").currentTime = 0)) +
        document.getElementById("lButton").classList.add("Key-button-onclick")
      );
  });

document
  .getElementsByClassName("Key-button")[8]
  .addEventListener("mouseup", function (event20) {
    if (event20.which === 1)
      return document
        .getElementById("lButton")
        .classList.remove("Key-button-onclick");
  });

document
  .getElementById("background-switch-button")
  .addEventListener("mousedown", function () {
    if (
      document
        .getElementById("html")
        .classList.contains("Regular-background-html")
    ) {
      document.getElementById("html").classList.add("Light-background-html");
      document
        .getElementById("html")
        .classList.remove("Regular-background-html");
      document.getElementById("background-switch-button").innerHTML =
        "Dark mode";
      document
        .getElementById("background-switch-button")
        .classList.add("Background-button-light-mode");
      document.getElementById("aButton").classList.add("Key-button-light");
      document.getElementById("sButton").classList.add("Key-button-light");
      document.getElementById("dButton").classList.add("Key-button-light");
      document.getElementById("fButton").classList.add("Key-button-light");
      document.getElementById("gButton").classList.add("Key-button-light");
      document.getElementById("hButton").classList.add("Key-button-light");
      document.getElementById("jButton").classList.add("Key-button-light");
      document.getElementById("kButton").classList.add("Key-button-light");
      document.getElementById("lButton").classList.add("Key-button-light");
    } else {
      document.getElementById("html").classList.add("Regular-background-html");
      document.getElementById("html").classList.remove("Light-background-html");
      document.getElementById("background-switch-button").innerHTML =
        "Light mode";
      document
        .getElementById("background-switch-button")
        .classList.remove("Background-button-light-mode");
      document.getElementById("aButton").classList.remove("Key-button-light");
      document.getElementById("sButton").classList.remove("Key-button-light");
      document.getElementById("dButton").classList.remove("Key-button-light");
      document.getElementById("fButton").classList.remove("Key-button-light");
      document.getElementById("gButton").classList.remove("Key-button-light");
      document.getElementById("hButton").classList.remove("Key-button-light");
      document.getElementById("jButton").classList.remove("Key-button-light");
      document.getElementById("kButton").classList.remove("Key-button-light");
      document.getElementById("lButton").classList.remove("Key-button-light");
    }
  });

console.log(`1. HTML- and CSS-parts of the task done according to the pattern at https://js3001.github.io/
JS-fuctionality includes playing sounds after pressing the keys of the keyboard.
2. Added JS-functionality to be able to play sounds after clicking the black screen-buttons with left mouse-button.
3. Added background-switch-option & animation(black screen-buttons change the appearance when cursor is pointed and when playing sounds.)`);
