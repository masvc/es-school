// ステータス変動とローカルストレージの処理。
let weeknumber = parseInt(localStorage.getItem("weeknumber")) || 0;
let htmlpoint = parseInt(localStorage.getItem("htmlpoint")) || 0;
let csspoint = parseInt(localStorage.getItem("csspoint")) || 0;
let JavaScriptpoint = parseInt(localStorage.getItem("Javapoint")) || 0;
let phppoint = parseInt(localStorage.getItem("phppoint")) || 0;
let powerpoint = parseInt(localStorage.getItem("powerpoint")) || 0;
let lovepoint = parseInt(localStorage.getItem("lovepoint")) || 0;

function setupStatusUpdate() {
  $("#actionp").on("click", function () {
    updatePoints("programming");
  });

  $("#actionk").on("click", function () {
    updatePoints("training");
  });

  $("#actionl").on("click", function () {
    updatePoints("love");
  });

  // #specialボタンが押されたとき、すべてのポイントを+10する処理
  $("#special").on("click", function () {
    htmlpoint = Math.min(htmlpoint + 10, 10);
    csspoint = Math.min(csspoint + 10, 10);
    JavaScriptpoint = Math.min(JavaScriptpoint + 10, 10);
    phppoint = Math.min(phppoint + 10, 10);
    powerpoint = Math.min(powerpoint + 10, 10);
    lovepoint = Math.min(lovepoint + 10, 10);
    saveStatus();
  });
}

function updatePoints(action) {
  if (action === "programming") {
    htmlpoint += Math.floor(Math.random() * 3);
    csspoint += Math.floor(Math.random() * 3);
    JavaScriptpoint += Math.floor(Math.random() * 3);
    phppoint += Math.floor(Math.random() * 3);

    htmlpoint = Math.min(htmlpoint, 10);
    csspoint = Math.min(csspoint, 10);
    JavaScriptpoint = Math.min(JavaScriptpoint, 10);
    phppoint = Math.min(phppoint, 10);
  } else if (action === "training") {
    powerpoint += Math.ceil(Math.random() * 5);
    powerpoint = Math.min(powerpoint, 10);
  } else if (action === "love") {
    lovepoint += Math.ceil(Math.random() * 5);
    lovepoint = Math.min(lovepoint, 10);
  }

  weeknumber++;
  saveStatus();
}

function saveStatus() {
  localStorage.setItem("htmlpoint", htmlpoint);
  localStorage.setItem("csspoint", csspoint);
  localStorage.setItem("Javapoint", JavaScriptpoint);
  localStorage.setItem("phppoint", phppoint);
  localStorage.setItem("powerpoint", powerpoint);
  localStorage.setItem("lovepoint", lovepoint);
  localStorage.setItem("weeknumber", weeknumber);
}

function displaySaveStatus() {
  let saveweeknumber = localStorage.getItem("weeknumber");
  if (saveweeknumber !== null) {
    $("#savestatus").text("あなたのデータ：" + saveweeknumber + "日目");
  } else {
    $("#savestatus").text("※まだあなたのセーブデータはありません");
  }
}
