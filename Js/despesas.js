document.addEventListener('DOMContentLoaded', function () {
    var ctx = document.getElementById('expense-chart').getContext('2d');
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Despesa 1', 'Despesa 2', 'Despesa 3'],
        datasets: [{
          label: 'Valor em Reais',
          data: [100, 50, 200],
          backgroundColor: '#00f',
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 50,
            },
          }
        },
      }
    });
  
    var editButtons = document.getElementsByClassName('edit-expense');
    for (var i = 0; i < editButtons.length; i++) {
      editButtons[i].addEventListener('click', function () {
        var expenseId = this.dataset.expenseId;
        var expenseValue = prompt('Insira o novo valor da despesa:');
        if (expenseValue) {
          document.getElementById(expenseId).textContent = 'R$' + expenseValue;
        }
      });
    }
  });
  