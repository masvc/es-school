function audiop() {
  $(document).ready(function () {
    const audioElement = $("#audio")[0];

    // 個別にクラスやIDを指定してクリックイベントを設定
    $(
      ".btna, .btnb, .nextbtn, .loadbtn, .rebtn, #actionp, #actionk, #actionl, #nextbtn, #actionboy, #actiongirl, #talentset, #restart"
    ).on("click", function () {
      audioElement.play();
    });
  });
}
