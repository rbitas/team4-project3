
const xlabels = [];
const ytornadoes = [];
const ywind = [];
const yhail = [];
const yline1 = [];
const yline2 = [];
const yline3 = [];



chartIt();

async function chartIt() {
  await getData();
  await getWindData();
  await getHailData();
  await getlinesData();


  // Create a tornado chart
  const tornadoctx = document.getElementById('myChart').getContext('2d');
  new Chart(tornadoctx, {
    type: 'bar',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Tornadoes in USA 2022',
        data: ytornadoes,
        backgroundColor: [
        'rgb(242, 222, 186)',
        'rgba(255, 99, 132, 1)',
        'rgb(39, 225, 193)',
        'rgba(0,128,255)',
        'rgb(109, 169, 228)',
        'rgba(255,0,0)',
        'rgba(255,128,0)',
        'rgb(255, 206, 254)',
        'rgb(45, 205, 223)',
        'rgba(128,255,0)',
        'rgb(170, 227, 226)',
        'rgb(255, 230, 230)',
        'rgb(198, 220, 240)',
        ],
        borderColor: [
        'rgb(242, 222, 186)',
        'rgba(255, 99, 132, 1)',
        'rgb(39, 225, 193)',
        'rgba(0,128,255)',
        'rgb(109, 169, 228)',
        'rgba(255,0,0)',
        'rgba(255,128,0)',
        'rgba(255,255,0)',
        'rgba((0,255,128)',
        'rgba(128,255,0)',
        'rgba((0,255,0)',
        'rgb(255, 230, 230)',
        'rgb(198, 220, 228)',
        ],

        borderWidth: 1
      }]
    },
    options: {
      scales: {
        Colors: {
         y: {
          beginAtZero: true
        }
      }
      }
    }
  });
  let myChart; // Declare myChart variable outside the function

  async function chartIt() {
    // ...
  
    function changePalette(palette) {
      let colors;
  
      if (palette === 'light') {
        colors = [
          'rgb(242, 222, 186)',
          'rgba(255, 99, 132, 1)',
          'rgb(39, 225, 193)',
          'rgba(0,128,255)',
          'rgb(109, 169, 228)',
          'rgba(255,0,0)',
          'rgba(255,128,0)',
          'rgb(255, 206, 254)',
          'rgb(45, 205, 223)',
          'rgba(128,255,0)',
          'rgb(170, 227, 226)',
          'rgb(255, 230, 230)',
          'rgb(198, 220, 240)',
        ];
      } else if (palette === 'dark') {
        colors = [
          'rgb(11, 36, 71)',
          'rgb(87, 108, 188)',
          'rgb(25, 55, 109)',
          'rgb(99, 89, 133)',
          'rgb(68, 60, 104)',
          'rgb(57, 48, 83)',
          'rgb(24, 18, 43)',
          'rgb(44, 51, 51)',
          'rgb(46, 79, 79)',
          'rgb(64, 66, 88)',
          'rgb(71, 78, 104)',
          'rgb(80, 87, 122)',
          'rgb(107, 114, 142)',
        ];
      }
  
      myChart.data.datasets[0].backgroundColor = colors;
      myChart.update();
    }
  
    // Call changePalette function with the desired palette (light or dark)
    changePalette('light');
    
  }

  // Create wind chart
  const windctx = document.getElementById('WindChart').getContext('2d');
  new Chart(windctx, {
    type: 'line',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Wind in USA 2022',
        data: ywind,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(0,128,255)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Create hail chart
  const hailctx = document.getElementById('HailChart').getContext('2d');
  new Chart(hailctx, {
    type: 'horizontalBar',
    data: {
      labels: xlabels,
      datasets: [{
        label: 'Hail in USA 2022',
        data: yhail,
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
      
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const linesctx = document.getElementById('linesChart').getContext('2d');
  new Chart(linesctx, {
    type: 'line',
    data: {
      labels: xlabels,
      datasets: [
        {
          label: 'Tornado Line ',
          data: yline1,
          backgroundColor :'rgba(255,0,0)',
          borderColor: 'rgba(255,0,0)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Hail Line ',
          data: yline2,
          backgroundColor: 'rgba(54, 162, 235, 1)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
          fill: false
        },
        {
          label: 'Wind Line ',
          data: yline3,
          backgroundColor: 'rgba(255, 206, 86, 1)',
          borderColor: 'rgba(255, 206, 86, 1)',
          borderWidth: 1,
          fill: false
        }
      ]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
}


async function getData() {
  const response = await fetch('Summary 2022.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);

  table.forEach(row => {
    const columns = row.split(',');
    const months = columns[0];
    xlabels.push(months);
    const tornadoes = columns[1];
    ytornadoes.push(tornadoes);
    console.log(months, tornadoes);
  });
}

async function getWindData() {
  const response = await fetch('Summary 2022.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);

  table.forEach(row => {
    const columns = row.split(',');
    const months = columns[0];
    const wind = columns[3];
    ywind.push(wind);
    console.log(months, wind);
  });
}

async function getHailData() {
  const response = await fetch('Summary 2022.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);

  table.forEach(row => {
    const columns = row.split(',');
    const months = columns[0];
    const hail = columns[2];
    yhail.push(hail);
    console.log(months, hail);
  });
}

async function getlinesData() {
  const response = await fetch('Summary 2022.csv');
  const data = await response.text();
  const table = data.split('\n').slice(1);

  table.forEach(row => {
    const columns = row.split(',');
    const months = columns[0];
    const line1 = columns[1];
    const line2 = columns[2];
    const line3 = columns[3];
    yline1.push(line1);
    yline2.push(line2);
    yline3.push(line3);
    console.log(months, line1, line2, line3);
  });
}

//      chartMap();
// async function chartMap() {
//   await getMapData();

//   const response = await fetch('State.csv');
//   const data = await response.text();
//   const table = data.split('\n').slice(1);

//   const stateNames = [];
//   const stateData = [];

//   table.forEach(row => {
//     const columns = row.split(',');
//     const state = columns[0];
//     const data = columns[1];

//     stateNames.push(state);
//     stateData.push(data);
//   });

//   // Create state map
//   const mapctx = document.getElementById('stateMap').getContext('2d');
//   new Chart(mapctx, {
//     type: 'choropleth',
//     data: {
//       labels: stateNames,
//       datasets: [
//         {
//           label: 'State Data',
//           data: stateData,
//           borderColor: 'rgba(0, 128, 255)',
//           borderWidth: 1
//         }
//       ]
//     },
//     options: {
//       plugins: {
//         choropleth: {
//           centralMeridian: -96,
//           legend: {
//             position: 'bottom-right'
//           }
//         }
//       },
//       scales: {
//         projection: {
//           value: 'albersUsa'
//         }
//       }
//     }
//   });

//   table.forEach(row => {
//     const columns = row.split(',');
//     const state = columns[0];
//     const point1 = columns[1];
//     const point2 = columns[2];
//     const point3 = columns[3];
//     ypoints1.push(point1);
//     ypoints2.push(point2);
//     ypoints3.push(point3);
//     console.log(state, point1, point2, point3);
//   });
// }


