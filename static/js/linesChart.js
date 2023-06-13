linesData();
      
        async function linesData() {
          try {
            const response = await fetch('http://127.0.0.1:5000/api/v1.0/summaryweather');
            console.log(response);
            const data = await response.json();
            console.log(data);
      
            const labels = [];
            const line1 = [];
            const line2 = [];
            const line3 = [];
      
            data.forEach(entry => {
              labels.push(entry.Month);
              line1.push(entry.Tornado);
              line2.push(entry.Wind);
              line3.push(entry.Hail);
            });
      
            new Chart(document.getElementById("linesChart"), {
              type: 'line',
              data: {
                labels: labels,
                datasets: [
                  {
                    label: 'Tornado',
                    data: line1,
                    backgroundColor :'rgba(255,0,0)',
                    borderColor: 'rgba(255,0,0)',
                    borderWidth: 1,
                    fill: false
                  },
                  {
                    label: 'Wind  ',
                    data: line2,
                    backgroundColor: 'rgba(54, 162, 235, 1)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1,
                    fill: false
                  },
                  {
                    label: 'Hail',
                    data: line3,
                    backgroundColor: 'rgba(255, 206, 86, 1)',
                    borderColor: 'rgba(255, 206, 86, 1)',
                    borderWidth: 1,
                    fill: false
                  }
                ]
              },
              options: {
                legend: { display: true },
                title: {
                  display: true,
                  text: 'U.S Weather'
                }
              }
            });
          } catch (error) {
            console.error('Error:', error);
          }
        }
        