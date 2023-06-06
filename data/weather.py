import sqlite3
import pandas as pd

# use pandas to create two dataframes based on csv data

df_hail = pd.read_csv (r'/Users/evisssaliaj/Desktop/Project 3/team4-project3/data/2022_hail.csv')
df_tornado = pd.read_csv(r'/Users/evisssaliaj/Desktop/Project 3/team4-project3/data/2022_torn.csv')
df_wind = pd.read_csv(r'/Users/evisssaliaj/Desktop/Project 3/team4-project3/data/2022_wind.csv')

# create a sqlite database and a connection to it
cnxn = sqlite3.connect('weather.db')

# insert your dataframes into that database
df_hail.to_sql('hail', cnxn, index=False)
df_tornado.to_sql('tornado', cnxn, index=False)
df_wind.to_sql('wind', cnxn, index=False)

cnxn.close()

