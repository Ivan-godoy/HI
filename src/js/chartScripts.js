// Chart 1
// ========================================================================
var char1El = document.getElementById('chart1');
new Chart(char1El, {
  type: 'bar',
  data: {
    labels: ["Electricidad", "Computadoras", "kit Micro"],
    datasets: [{
      label: "Piezas en Unidades",
      backgroundColor: ["#39f", "#895df6", "#3cba9f"],
      data: [50, 100, 40, 10]
    }]
  },
  
  options: {
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: false
    },
    animation: {
      duration: 2000
    },
    title: {
      display: true,
      text: 'Prediccion de materiales en unidades al 2021'
    }
  }
});

// Chart 2
// ========================================================================
var char2El = document.getElementById('chart2');

new Chart(char2El, {
  type: 'line',
  data: {
    labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018],
    datasets: [{
      data: [2004, 2000, 3200, 1200, 3450, 2300, 2200, 1200, 900, 1450],
      label: "Electricidad",
      borderColor: "#39f",
      fill: false
    }, {
      data: [4500, 4800, 5200, 5000, 5200, 5500, 5900, 6500, 6800, 7200],
      label: "Computadoras",
      borderColor: "#895df6",
      fill: false
    }, {
      data: [3400, 3200, 2800, 5600, 4500, 3200, 3400, 3800, 4800, 4200],
      label: "kit Micro",
      borderColor: "#3cba9f",
      fill: false
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    animation: {
      duration: 2000
    },
    title: {
      display: true,
      text: 'Uso de los Materiales'
    }
  }
});


// Chart 3
// ========================================================================
var char3El = document.getElementById('chart3');

new Chart(char3El, {
  type: 'horizontalBar',
  data: {
    labels: ["Electricidad", "Computadoras", "kit Micro"],
    datasets: [{
      label: "Population (millions)",
      backgroundColor: ["#39f", "#895df6", "#3cba9f"],
      data: [900, 7000, 5700, 2800]
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    legend: {
      display: false
    },
    animation: {
      duration: 2000
    },
    title: {
      display: true,
      text: 'Prediccion de la actividad en el 2025'
    }
  }
});

// Chart 4
// ========================================================================
var char4El = document.getElementById('chart4');

new Chart(char4El, {
  type: 'radar',
  data: {
    labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
    datasets: [{
      label: "1950",
      fill: true,
      backgroundColor: "rgba(51,153,255,0.6)",
      borderColor: "rgba(51,153,255,0.2)",

      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(179,181,198,1)",
      data: [8.77, 55.61, 21.69, 6.62, 6.82]
    }, {
      label: "2050",
      fill: true,
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      pointBackgroundColor: "rgba(255,99,132,1)",
      pointBorderColor: "#fff",
      data: [25.48, 54.16, 7.61, 8.06, 4.45]
    }]
  },
  options: {
    maintainAspectRatio: false,
    responsiveAnimationDuration: 500,
    animation: {
      duration: 2000
    },
    title: {
      display: true,
      text: 'Distribution in % of world population'
    }
  }
});

// Chart 4
// ========================================================================
var char5El = document.getElementById('chart5');

new Chart(char5El, {
    type: 'doughnut',
    data: {
      labels: ["Africa", "Asia", "Europe", "Latin America", "North America"],
      datasets: [
        {
          label: "Population (millions)",
          backgroundColor: ["#39f", "#895df6","#3cba9f","#e8c3b9","#c45850"],
          data: [2478,5267,734,784,433]
        }
      ]
    },
    options: {
      maintainAspectRatio: false,
      responsiveAnimationDuration: 500,
      animation: {
        duration: 2000
      },
      title: {
        display: true,
        text: 'Predicted world population (millions) in 2050'
      }
    }
});
