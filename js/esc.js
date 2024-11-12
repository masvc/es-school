function esc() {
  // ローカルストレージからmytalentの情報を取得
  let mytalent = localStorage.getItem("mytalent");

  // 画像の変更処理
  if (mytalent === "../img/human/hm.png") {
    $("#esctalent").attr("src", "../img/human/hmk.png");
    localStorage.setItem("mytalent", "../img/human/hmk.png");
  } else if (mytalent === "../img/human/hw.png") {
    $("#esctalent").attr("src", "../img/human/hwk.png");
    localStorage.setItem("mytalent", "../img/human/hwk.png");
  }

  // 各ポイントをローカルストレージから取得
  let powerpoint = parseInt(localStorage.getItem("powerpoint")) || 0;
  let htmlpoint = parseInt(localStorage.getItem("htmlpoint")) || 0;
  let csspoint = parseInt(localStorage.getItem("csspoint")) || 0;
  let lovepoint = parseInt(localStorage.getItem("lovepoint")) || 0;
  let JavaScriptpoint = parseInt(localStorage.getItem("JavaScriptpoint")) || 0;
  let phppoint = parseInt(localStorage.getItem("phppoint")) || 0;

  // 合計ポイントを計算
  let totalpoint = htmlpoint + csspoint + JavaScriptpoint + phppoint;

  // 全ポイントがMAX１０点の場合には優勝になるように/3で調整
  let averagepoint = totalpoint / 3;

  // メッセージの決定
  let message = "";

  if (
    (averagepoint > lovepoint && averagepoint > powerpoint) ||
    (averagepoint === lovepoint && lovepoint === powerpoint)
  ) {
    message =
      "おめでとう！ESCで優勝したよ！日頃の努力が実ったね。これからも自分のやりたいことを叶えるために努力を続けていこう。";
  } else if (lovepoint > averagepoint && lovepoint > powerpoint) {
    message =
      "おめでとう！優勝は逃してしまったけどいい発表だったね。幸せはそれぞれ、家族や恋人と楽しく暮らしていこう。";
  } else if (powerpoint > averagepoint && powerpoint > lovepoint) {
    message =
      "おめでとう！優勝は逃してしまったけどいい発表だったね。身体が資本。やりたいことを叶えるためにもしっかり鍛えていこう。";
  }

  // メッセージを#escmsgに挿入
  $("#escmsg").text(message);
}

// ページがロードされた時にesc関数を実行
$(document).ready(esc);
