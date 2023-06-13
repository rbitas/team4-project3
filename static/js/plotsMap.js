const URL_HAIL = "/api/v1.0/hailweather";
const URL_TORNADO = "/api/v1.0/tornadoweather";
const URL_WIND = "/api/v1.0/windweather";

const HAIL_COLOR = "purple";
const TORNADO_COLOR = "red";
const WIND_COLOR = "blue";
  
  // Add a tile layer.
let streets = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

let myMap = L.map("map", {
    center: [37.09, -95.71],
    zoom: 5,
    layers: [streets]
});

let baseMaps = {
    "Streets": streets
};

let hail_group = new L.LayerGroup();
let tornado_group = new L.LayerGroup();
let wind_group = new L.LayerGroup();

let overlays = {
    "Hail": hail_group,
    "Tornado": tornado_group,
    "Wind": wind_group
}

L.control.layers(baseMaps, overlays).addTo(myMap);


function markerSize(magnitude){
    return magnitude * 4;
}

// d3.json(url_hail).then(function (dataHail) {
//     for (let i = 0; i < dataHail.length; i++) {
//         let hail = dataHail[i];
//         let latlng = {lat: hail.slat, lng: hail.slon};
//         let options = {
//             color: "black",
//             opacity: 1.0,
//             fillColor: "purple",
//             fillOpacity: 0.75,
//             radius: markerSize(hail.mag)
//         };
//         L.circleMarker(latlng, options).addTo(hail_group); 
//         // }).bindPopup(`<h1>State: ${hail[7]}</h1>`).addTo(myMap);

//     }
    
// });
// hail_group.addTo(myMap);
    
function addMarkers(url, color, group, magAdjust=1, borderColor = "black") {
    d3.json(url).then(function (data) {
        for (let i = 0; i < data.length; i++) {
            let incident = data[i];
            let latlng = {lat: incident.slat, lng: incident.slon};
            let options = {
                color: borderColor,
                opacity: 1.0,
                fillColor: color,
                fillOpacity: 0.75,
                radius: markerSize(incident.mag * magAdjust)
            };
            L.circleMarker(latlng, options).bindPopup(`<h3>State: ${incident.st} </h3><hr><p>Date: ${incident.date}</p><hr><p>Magnitude(Tornado=f-scale, hail=inches, wind=knots): ${incident.mag}</p><hr><p>Injured: ${incident.inj}</p>`).addTo(group);

        }
        
    });
    group.addTo(myMap);
}

addMarkers(URL_HAIL, HAIL_COLOR, hail_group);
addMarkers(URL_TORNADO, TORNADO_COLOR, tornado_group);
addMarkers(URL_WIND, WIND_COLOR, wind_group, 0.01, WIND_COLOR);
