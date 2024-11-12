function setupEvents() {
  $(document).ready(function () {
    $("#actionp").on("click", function () {
      // ボタンのクリック時に「p」という情報をローカルストレージに保存
      localStorage.setItem("selectedEvent", "p");
      window.location.href = "event.html";
    });

    $("#actionk").on("click", function () {
      // ボタンのクリック時に「k」という情報をローカルストレージに保存
      localStorage.setItem("selectedEvent", "k");
      window.location.href = "event.html";
    });

    $("#actionl").on("click", function () {
      // ボタンのクリック時に「l」という情報をローカルストレージに保存
      localStorage.setItem("selectedEvent", "l");
      window.location.href = "event.html";
    });
  });
  $(document).ready(function () {
    // ローカルストレージから選択されたイベント情報を取得
    const selectedEvent = localStorage.getItem("selectedEvent");

    if (selectedEvent) {
      let ie, be, msg;
      // イベントの選択に応じて画像やメッセージを変更
      if (selectedEvent === "p") {
        ie = [
          {
            img: "../img/event1/book.png",
            message:
              "今日は図書館で借りてきた技術書を読もう！いつもの講義とは別の視点で知識を入れられて非常に勉強になるぞ。頑張っていこう。",
          },
          {
            img: "../img/event1/iphone.png",
            message:
              "今日は担任のザキヤマ先生がシェアしてくれたYoutube動画を見るぞ。講義で言っていたことを動画を見て復習するとわかりやすいな。インプット頑張っていこう。",
          },
          {
            img: "../img/event1/pc.png",
            message:
              "今日はガッツリとコードをかくぞ！html、css、JavaScript、PHP、どれも難しい。量かいて覚えていくしかないな。反復練習、頑張ろう！",
          },
        ];
        be = [
          "../img/event1/school1.jpg",
          "../img/event1/school2.jpg",
          "../img/event1/school3.jpg",
          "../img/event1/school4.jpg",
          "../img/event1/school5.jpg",
        ];
        msg = "";
      } else if (selectedEvent === "l") {
        ie = [
          {
            img: "../img/event2/desert.png",
            message:
              "家族と一緒に過ごすのはやっぱり大事だなあ。いつも大変だし、今日はみんなで豪勢にデザートを食べちゃおう。リラックスして明日からまた頑張っていこう。",
          },
          {
            img: "../img/event2/bear.png",
            message:
              "やったぜ。家族の欲しがっていたクマのぬいぐるみをゲットできた。いつも助けてもらってるしありがたいなあ。感謝して頑張っていこう。",
          },
          {
            img: "../img/event2/ice.png",
            message:
              "今日はゆっくりデー！アイスクリームを食べよう。たまの息抜きは大事だな。周りに感謝して頑張っていこう。",
          },
        ];
        be = [
          "../img/event2/date1.jpg",
          "../img/event2/date2.jpg",
          "../img/event2/date3.jpg",
          "../img/event2/date4.jpg",
          "../img/event2/date5.jpg",
        ];
        msg = "";
      } else if (selectedEvent === "k") {
        ie = [
          {
            img: "../img/event3/drink.png",
            message:
              "よし、今日は運動をしよう！スポーツドリンクをしっかり飲んで、健康にパワーとスタミナ付けていくぞ。",
          },
          {
            img: "../img/event3/kinniku.png",
            message:
              "やったぜ！日頃の成果が認められて、先生から「Mr.きんにくんのフィギュア」をもらえたぞ。枕元に飾ってパワーアップだ！",
          },
          {
            img: "../img/event3/weight.png",
            message:
              "よし、今日は運動をしよう。勉強ばかりだと体が鈍っちゃうからな。しっかりパワーアップするぞ！",
          },
        ];
        be = [
          "../img/event3/sport1.jpg",
          "../img/event3/sport2.jpg",
          "../img/event3/sport3.jpg",
          "../img/event3/sport4.jpg",
          "../img/event3/sport5.jpg",
        ];
        msg = "";
      }

      // 画像とメッセージをランダムに表示
      const n3 = Math.floor(Math.random() * ie.length);
      const n5 = Math.floor(Math.random() * be.length);

      // #itemimgの画像を設定
      $("#itemimg").attr("src", ie[n3].img);

      // #eventmsgにメッセージを設定
      $("#eventmsg").text(ie[n3].message);

      // #eventbackの背景画像を設定
      $(".eventback").css("background-image", "url(" + be[n5] + ")");
    }
  });
}
