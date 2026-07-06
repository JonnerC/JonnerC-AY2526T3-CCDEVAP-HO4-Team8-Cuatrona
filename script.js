const ctx = document.getElementById('monthlyReports');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      datasets: [{
        label: 'Active Listings',
        data: [4000, 5000, 1400, 2500, 1000, 7000],
        borderWidth: 1
      },
      {
        label: 'Active Groups',
        data: [1400, 1300, 1200, 3200, 4000, 3500],
        borderWidth: 1
      }
    ]
    },
    options: {
      plugins:{
        title: {
            display:true,
            text: 'Monthly Reports'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  const ctx1 = document.getElementById('genderPref');

  new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: ['All Girls', 'All Boys', 'Co-ed'],
      datasets: [{
        label: 'Gender Preference',
        data: [460, 520, 250],
        backgroundColor: [
            'rgba(255, 87, 140, 0.7)',
            'rgba(66, 244, 244, 0.7)',
            'rgba(255, 196, 45, 0.7)'
        ],
        borderWidth: 1
      }]
    },
    options: {
      plugins:{
        title: {
            display:true,
            text: 'Shared Spaces Gender'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


  const ctx2 = document.getElementById('userDistribution');

  new Chart(ctx2, {
    type: 'doughnut',
    data: {
      labels: ['Roomies', 'Spaces Manager'],
      datasets: [{
        data: [6000, 500],
        borderWidth: 1
      }]
    },
    options: {
      plugins:{
        title: {
            display:true,
            text: 'Roomies & Spaces Managers User Distribution'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

