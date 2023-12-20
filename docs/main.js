const apiLink =
  "https://api.open-meteo.com/v1/forecast?latitude=37.566&longitude=126.9784&hourly=temperature_2m&timezone=Asia%2FTokyo";

async function tempClickHandle() {
  const tempTest = async (url) => {
    const temp = await fetch(url);
    if (temp.ok) {
      temp.data = await temp.json();
    }
    return temp.data;
  };
  const result = await tempTest(apiLink);
  const ctx = document.getElementById("myChart");

  console.log(result);
  new Chart(ctx, {
    type: "line",
    data: {
      labels: result.hourly.time,
      datasets: [
        {
          label: "온도",
          data: result.hourly.temperature_2m,
          borderColor: "rgba(97, 218, 251)",
          backgroundColor: "rgba(97, 218, 251, 0.514)",
          pointRadius: 8,
          pointHoverRadius: 10,
          pointHoverBackgroundColor: "red",
        },
      ],
    },
    options: {
      responsive: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

document.querySelector(".run_btn").addEventListener("click", tempClickHandle);
