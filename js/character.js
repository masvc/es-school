// キャラクター選択機能。
function setupCharacterSelection() {
  let mytalent = localStorage.getItem("mytalent") || "../img/human/hm.png";
  $("#selecttalent").attr("src", mytalent);

  $("#actionboy").click(function () {
    mytalent = "../img/human/hm.png";
    $("#selecttalent").attr("src", mytalent);
    localStorage.setItem("mytalent", mytalent);
  });

  $("#actiongirl").click(function () {
    mytalent = "../img/human/hw.png";
    $("#selecttalent").attr("src", mytalent);
    localStorage.setItem("mytalent", mytalent);
  });
}
