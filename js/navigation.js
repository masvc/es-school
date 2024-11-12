// ページ遷移機能。

function setupNavigation() {
  $("#nextbtn").on("click", function () {
    if (weeknumber === 6) {
      window.location.href = "esc.html";
    } else {
      window.location.href = "main.html";
    }
  });
}

function setupRestartButton() {
  $("#restart").on("click", function () {
    localStorage.clear();
    window.location.href = "../index.html";
  });
}
