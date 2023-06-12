import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func
import pandas as pd
from flask import Flask, jsonify, render_template

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///data/weather.db")

# reflect an existing database into a new model
Base = automap_base()
# reflect the tables
Base.prepare(autoload_with=engine)

# Save reference to the table
Hail = Base.classes.hail
Tornado = Base.classes.tornado
Wind = Base.classes.wind


#################################################
# Flask Setup
#################################################
app = Flask(__name__)

#################################################
# Flask Routes
#################################################

@app.route("/")
def main_page():
    """
    Render the main page of the webapp.
    """
    return render_template('index.html')

@app.route("/api/v1.0/hailweather")
def hail_weather():
    """
    Return a dictionary of summary data
    """
    

    session = Session(engine)
    # Query all storm data
    results_hail = session.query(Hail.om, Hail.yr, Hail.mo, Hail.dy, Hail.date,
                                Hail.time, Hail.tz, Hail.st, Hail.stf, Hail.mag, Hail.inj,
                                Hail.fat, Hail.loss, Hail.closs, Hail.slat, Hail.slon,
                                Hail.elat, Hail.elon, Hail.len, Hail.wid).all()
    

    session.close()

    all_hail = []
    for om, yr, mo, dy, date, time, tz, st, stf, mag, inj, fat, loss, closs, slat, slon, elat, elon, len, wid in results_hail:
        hail_dict = {}
        hail_dict["om"] = om
        hail_dict["yr"] = yr
        hail_dict["mo"] = mo
        hail_dict["dy"] = dy
        hail_dict["date"] = date
        hail_dict["time"] = time
        hail_dict["tz"] = tz
        hail_dict["st"] = st
        hail_dict["stf"] = stf
        hail_dict["mag"] = mag
        hail_dict["inj"] = inj
        hail_dict["fat"] = fat
        hail_dict["loss"] = loss
        hail_dict["closs"] = closs
        hail_dict["slat"] = slat
        hail_dict["slon"] = slon
        hail_dict["elat"] = elat
        hail_dict["elon"] = elon
        hail_dict["len"] = len
        hail_dict["wid"] = wid
        all_hail.append(hail_dict)
    return jsonify(all_hail)

@app.route("/api/v1.0/tornadoweather")
def tornado_weather():
    """
    Return a dictionary of summary data
    """


    session = Session(engine)

    results_tornado = session.query(Tornado.om, Tornado.yr, Tornado.mo, Tornado.dy, Tornado.date,
                                Tornado.time, Tornado.tz, Tornado.st, Tornado.stf, Tornado.mag, Tornado.inj,
                                Tornado.fat, Tornado.loss, Tornado.closs, Tornado.slat, Tornado.slon,
                                Tornado.elat, Tornado.elon, Tornado.len, Tornado.wid).all()
    
    session.close()


    all_tornado = []
    for om, yr, mo, dy, date, time, tz, st, stf, mag, inj, fat, loss, closs, slat, slon, elat, elon, len, wid in results_tornado:
        tornado_dict = {}
        tornado_dict["om"] = om
        tornado_dict["yr"] = yr
        tornado_dict["mo"] = mo
        tornado_dict["dy"] = dy
        tornado_dict["date"] = date
        tornado_dict["time"] = time
        tornado_dict["tz"] = tz
        tornado_dict["st"] = st
        tornado_dict["stf"] = stf
        tornado_dict["mag"] = mag
        tornado_dict["inj"] = inj
        tornado_dict["fat"] = fat
        tornado_dict["loss"] = loss
        tornado_dict["closs"] = closs
        tornado_dict["slat"] = slat
        tornado_dict["slon"] = slon
        tornado_dict["elat"] = elat
        tornado_dict["elon"] = elon
        tornado_dict["len"] = len
        tornado_dict["wid"] = wid
        all_tornado.append(tornado_dict)
    return jsonify(all_tornado)


@app.route("/api/v1.0/windweather")
def wind_weather():   
    """
    Return a dictionary of summary data
    """


    session =  Session(engine)

    results_wind = session.query(Wind.om, Wind.yr, Wind.mo, Wind.dy, Wind.date,
                                Wind.time, Wind.tz, Wind.st, Wind.stf, Wind.mag, Wind.inj,
                                Wind.fat, Wind.loss, Wind.closs, Wind.slat, Wind.slon,
                                Wind.elat, Wind.elon, Wind.len, Wind.wid).all()
    session.close()

    all_wind = []
    for om, yr, mo, dy, date, time, tz, st, stf, mag, inj, fat, loss, closs, slat, slon, elat, elon, len, wid in results_wind:
        wind_dict = {}
        wind_dict["om"] = om
        wind_dict["yr"] = yr
        wind_dict["mo"] = mo
        wind_dict["dy"] = dy
        wind_dict["date"] = date
        wind_dict["time"] = time
        wind_dict["tz"] = tz
        wind_dict["st"] = st
        wind_dict["stf"] = stf
        wind_dict["mag"] = mag
        wind_dict["inj"] = inj
        wind_dict["fat"] = fat
        wind_dict["loss"] = loss
        wind_dict["closs"] = closs
        wind_dict["slat"] = slat
        wind_dict["slon"] = slon
        wind_dict["elat"] = elat
        wind_dict["elon"] = elon
        wind_dict["len"] = len
        wind_dict["wid"] = wid
        all_wind.append(wind_dict)
    return jsonify(all_wind)



if __name__ == '__main__':
    app.run(debug=True)