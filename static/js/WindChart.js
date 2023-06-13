WindData();
      
        async function WindData() {
          try {
            const response = await fetch('http://127.0.0.1:5000/api/v1.0/summaryweather');
            console.log(response);
            const data = await response.json();
            console.log(data);
      
            const labels = [];
            const values = [];
            data.forEach(entry => {
              labels.push(entry.Month);
              values.push(entry.Wind);
            });
      
            new Chart(document.getElementById("WindChart"), {
              type: 'line',
              data: {
                labels: labels,
                datasets: [
                  {
                    label: "Wind",
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(0,128,255)',
                    data: values
                  }
                ]
              },
              options: {
                legend: { display: false },
                title: {
                  display: true,
                  text: 'U.S Wind'
                }
              }
            });
          } catch (error) {
            console.error('Error:', error);
          }
        }
        