document.addEventListener("DOMContentLoaded", () => {


  const lineChart = document.getElementById("lineChart");

  new Chart(lineChart, {
    type: "line",
    data: {
      labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      datasets: [{
        label: "Active Users",
        data: [120, 190, 300, 250, 220, 310, 400],
        borderColor: "#6366f1",
        backgroundColor: "rgba(99,102,241,0.18)",
        tension: 0.4,
        fill: true,
        pointRadius: 5,
        pointBackgroundColor: "#6366f1"
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#1f2933",
            font: {
              size: 12
            }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#6b7280" },
          grid: { display: false }
        },
        y: {
          ticks: { color: "#6b7280" },
          grid: { color: "rgba(0,0,0,0.05)" }
        }
      }
    }
  });

 
  const barChart = document.getElementById("barChart");

  new Chart(barChart, {
    type: "bar",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May"],
      datasets: [{
        label: "Revenue ($)",
        data: [500, 700, 400, 900, 650],
        backgroundColor: [
          "#22c55e",
          "#4ade80",
          "#86efac",
          "#16a34a",
          "#22c55e"
        ],
        borderRadius: 8
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#1f2933",
            font: { size: 12 }
          }
        }
      },
      scales: {
        x: {
          ticks: { color: "#6b7280" },
          grid: { display: false }
        },
        y: {
          ticks: { color: "#6b7280" },
          grid: { color: "rgba(0,0,0,0.05)" }
        }
      }
    }
  });

 

  const counters = document.querySelectorAll(".number");

  counters.forEach(counter => {

    const target = +counter.getAttribute("data-target");
    let count = 0;

    const speed = target / 120;

    function updateCounter() {
      count += speed;

      if (count < target) {
        counter.innerText = Math.floor(count).toLocaleString();
        requestAnimationFrame(updateCounter);
      } else {
        counter.innerText = target.toLocaleString();
      }
    }

    updateCounter();
  });

});
