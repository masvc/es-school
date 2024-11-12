// メインファイル、ドキュメントがロードされたときの初期設定や基本的な機能。

$(document).ready(function () {
  // 初期設定
  let mytalent = localStorage.getItem("mytalent") || "../img/human/hm.png";
  $("#selecttalent").attr("src", mytalent);

  // イベントリスナーの設定
  setupCharacterSelection();
  setupStatusUpdate();
  setupMessageUpdate();
  setupRadarChart();
  setupNavigation();
  setupEvents();
  setupRestartButton();
  displaySaveStatus();
  audiop();
});
