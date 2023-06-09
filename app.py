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

@app.route("/api/v1.0/stormweather")
def storm_weather():
    """
    Return a dictionary of summary data
    """
    
    session = Session(engine)
    # Query all passengers
    result_hail = session.query(Hail).all()
    result_tornado = session.query(Tornado).all()
    result_wind = session.query(Wind).all()
    
    df_hail = pd.DataFrame.from_records(result_hail)
    df_tornado = pd.DataFrame.from_records(result_tornado)
    df_wind = pd.DataFrame.from_records(result_wind)
    

    session.close()
    return [df_hail.to_dict('records'), df_tornado.to_dict('records'), df_wind.to_dict('records')]

if __name__ == '__main__':
    app.run(debug=False)