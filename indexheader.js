// HTMLを動的に読み込む関数
function loadHTML(selector, url) {
  const element = document.querySelector(selector);
  if (element) {
    fetch(url)
      .then((response) => response.text())
      .then((data) => {
        element.innerHTML = data;
      })
      .catch((error) => {
        console.error("Error loading HTML:", error);
      });
  }
}

document.addEventListener("DOMContentLoaded", () => {
  loadHTML("header", "indexheader.html");
});
