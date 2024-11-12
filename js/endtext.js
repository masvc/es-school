// 最終結果のメッセージを設定する関数
function endtext() {
  // 各ポイントをローカルストレージから取得
  let powerpoint = parseInt(localStorage.getItem("powerpoint")) || 0;
  let htmlpoint = parseInt(localStorage.getItem("htmlpoint")) || 0;
  let csspoint = parseInt(localStorage.getItem("csspoint")) || 0;
  let lovepoint = parseInt(localStorage.getItem("lovepoint")) || 0;
  let JavaScriptpoint = parseInt(localStorage.getItem("JavaScriptpoint")) || 0;
  let phppoint = parseInt(localStorage.getItem("phppoint")) || 0;

  // 合計ポイントと平均ポイントを計算
  let totalpoint = htmlpoint + csspoint + JavaScriptpoint + phppoint;
  let averagepoint = totalpoint / 3;

  // メッセージの決定
  let message = "";

  if (averagepoint === 10 && lovepoint === 10 && powerpoint === 10) {
    message = "あなたは「1000年に1人の天才」です！このまま突き進みましょ。";
  } else if (averagepoint > lovepoint && averagepoint > powerpoint) {
    message =
      "あなたは「ギークエンジニア」です！やりたいこときっと叶いますよ。";
  } else if (lovepoint > averagepoint && lovepoint > powerpoint) {
    message = "あなたは「愛のエンジニア」です！LOVEが全てを救います。";
  } else if (powerpoint > averagepoint && powerpoint > lovepoint) {
    message = "あなたは「マッスルエンジニア」です！筋肉は世界を救う。";
  }

  // メッセージを#statustextに挿入
  $("#statustext").text(message);
}

// ページが読み込まれた際に関数を呼び出す
$(document).ready(function () {
  endtext();
});
