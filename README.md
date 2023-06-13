# Severe Weather Conditions (Hail, Tornado, Wind)

We took severe weather data of hail, tornados, and damaging winds from the year 2022 and used it to create a map of the United States consisting of all three storm conditions, bar graph filtered by months, and a plot showing property loss per state. 

## Team Members:
- Rina Neaara Bitas
- Evis Saliaj
- Dayana Iciano

## Technologies and Tools
- Programming Language: Python, HTML, Javascript, CSS
- Libraries: sqlalchemy, pandas, flask
- Database: sqlite

## Flask
- Our Flask App connects to our sqlite databse and pulls in the data and also has our API endpoints:
    - "/": directs the users to index.html which holds our dashboard with the visualizations
    - "/api/v1.0/hailweather": pulls all the hail data from the sqlite database and returns it as a JSON.
    - "/api/v1.0/tornadoweather": pulls all the tornado data from the sqlite database and returns it as a JSON.
    - "/api/v1.0/windweather": pulls all the wind data from the sqlite database and returns it as a JSON.

## Visualization 
The visualization dashboard includes the following:
- HTML/CSS
- D3.js
- Plotly.js
- Leaflet.js
- Chart.js



Datasets:
[NOAA's National Weather Service](https://www.spc.noaa.gov/wcm/)


