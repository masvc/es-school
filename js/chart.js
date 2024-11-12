// レーダーチャートの描画。
function setupRadarChart() {
  const skilldata = {
    labels: ["Power", "HTML", "CSS", "Love", "JavaScript", "PHP"], // ラベル
    datasets: [
      {
        label: "point", // データセット名
        data: [
          powerpoint,
          htmlpoint,
          csspoint,
          lovepoint,
          JavaScriptpoint,
          phppoint,
        ],
        fill: true,
      },
    ],
  };

  const config = {
    type: "radar",
    data: skilldata,
    options: {
      elements: {
        line: {
          borderWidth: 2,
        },
      },
      scales: {
        r: {
          angleLines: {
            display: false, // 角度線の非表示
          },
          suggestedMin: 0, // 最小値
          suggestedMax: 10, // 最大値
        },
      },
      responsive: true, // サイズ変更時にチャートがリサイズされるように
      maintainAspectRatio: false, // アスペクト比を固定しない
      plugins: {
        legend: {
          position: "top", // 凡例を上に配置
        },
      },
    },
  };

  const radarc = document.getElementById("skillchart");
  if (radarc) {
    new Chart(radarc.getContext("2d"), config);
  }
}
