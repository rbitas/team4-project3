let url_hail = "/api/v1.0/hailweather"
let url_tornado = "/api/v1.0/tornadoweather"
let url_wind = "/api/v1.0/windweather"


// Create a map object.
let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5
  });
  
  // Add a tile layer.
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);

function markerSize(magnitude){
    return magnitude * 4;
    }
d3.json(url_hail).then(function (data_hail) {
    for (let i = 0; i < data_hail.length; i++) {
        let hail = data_hail[i];
        L.circle([hail[14], hail[15]], {
            fillOpacity: 0.75,
            color: "white",
            fillColor: "white",
            radius: markerSize(hail[9])
        }).bindPopup(`<h1>State: ${hail[8]}</h1> <hr> <h3>Date: ${hail[5]}</h3>`).addTo(myMap);

    }
    
});


    




