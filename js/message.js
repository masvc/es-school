// メッセージの更新機能。
function setupMessageUpdate() {
  updatemsg();
}

function updatemsg() {
  let message =
    "今日からE's SCHOOLでの生活が始まるんだ。この１ヶ月間しっかりと集中して、自分の夢を叶えるために頑張っていこう！さて、まずは何をしようかな。";
  if (weeknumber === 1) {
    message = `初週からハードだったな。今日の講義で、${
      6 - weeknumber
    }週間後に「E's SCHOOL CONTEST（略してESC）」の大会があるって教えてもらったぞ。さて、今週は何をしようか。`;
  } else if (weeknumber >= 2 && weeknumber <= 4) {
    message = `あと、${
      6 - weeknumber
    }週間で「E's SCHOOL CONTEST（略してESC）」の大会の日だ！さて、今週は何をしようか。`;
  } else if (weeknumber === 5) {
    message = `来週はついに「E's SCHOOL CONTEST（略してESC）」の日だ。さて、最後の週は何をしようか。`;
  }
  $("#msg").html(message);
}
