HailData();
      
async function HailData() {
  try {
    const response = await fetch('http://127.0.0.1:5000/api/v1.0/summaryweather');
    console.log(response);
    const data = await response.json();
    console.log(data);

    const labels = [];
    const values = [];
    data.forEach(entry => {
      labels.push(entry.Month);
      values.push(entry.Hail);
    });

    new Chart(document.getElementById("HailChart"), {
      type: 'horizontalBar',
      data: {
        labels: labels,
        datasets: [
          {
            label: "Hail",
            backgroundColor: [
            'rgb(255, 206, 254)',
             'rgb(242, 222, 186)',
             'rgba(255, 99, 132, 1)',
             'rgb(39, 225, 193)',
             'rgba(0,128,255)',
             'rgb(109, 169, 228)',
             'rgba(255,0,0)',
             'rgba(255,128,0)',
             'rgb(45, 205, 223)',
             'rgba(128,255,0)',
             'rgb(170, 227, 226)',
             'rgb(255, 230, 230)',
             'rgb(198, 220, 240)',
             ],
             borderColor: [
               'rgb(255, 206, 254)',
               'rgb(242, 222, 186)',
               'rgba(255, 99, 132, 1)',
               'rgb(39, 225, 193)',
               'rgba(0,128,255)',
               'rgb(109, 169, 228)',
               'rgba(255,0,0)',
               'rgba(255,128,0)',
               'rgb(45, 205, 223)',
               'rgba(128,255,0)',
               'rgb(170, 227, 226)',
               'rgb(255, 230, 230)',
               'rgb(198, 220, 240)',
             ],
            data: values
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'U.S Hail'
        }
      }
    });
  } catch (error) {
    console.error('Error:', error);
  }
}
