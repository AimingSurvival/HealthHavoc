
const plateChart = new Chart(document.getElementById('plateChart'), {
  type: 'pie',
  data: {
    labels: ['Vegetables', 'Fruits', 'Proteins', 'Grains', 'Dairy'],
    datasets: [{
      data: [30, 20, 20, 20, 10],
      backgroundColor: ['#4CAF50', '#FFC107', '#FF5722', '#03A9F4', '#9C27B0']
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom'
      }
    }
  }
});

const macroChart = new Chart(document.getElementById('macroChart'), {
  type: 'bar',
  data: {
    labels: ['Carbohydrates', 'Proteins', 'Fats'],
    datasets: [{
      label: 'Percentage (%)',
      data: [55, 25, 20],
      backgroundColor: ['#03A9F4', '#4CAF50', '#FF5722']
    }]
  },
  options: {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});
