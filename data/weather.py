import sqlite3
import pandas as pd

# use pandas to create two dataframes based on csv data

df_hail = pd.read_csv('/Users/rinabitas/Documents/team4-project3/data/2022_hail.csv')
df_tornado = pd.read_csv('/Users/rinabitas/Documents/team4-project3/data/2022_torn.csv')
df_tornado['id'] = df_tornado.index
df_wind = pd.read_csv('/Users/rinabitas/Documents/team4-project3/data/2022_wind.csv')
df_summary = pd.read_csv('/Users/rinabitas/Documents/team4-project3/graph/Summary 2022.csv')

# create a sqlite database and a connection to it
cnxn = sqlite3.connect('weather.db')
crsr = cnxn.cursor()

# Create our tables and assign a primary key
create_statement_hail = """
CREATE TABLE hail (
om integer PRIMARY KEY,
yr integer,
mo integer,
dy integer,
date text,
time text,
tz integer,
st text,
stf integer,
stn integer,
mag real,
inj integer,
fat integer,
loss integer,
closs integer,
slat real,
slon real,
elat real,
elon real,
len integer,
wid integer,
ns integer,
sn integer,
sg integer,
f1 integer,
f2 integer,
f3 integer,
f4 integer
);
"""
crsr.execute(create_statement_hail)

create_statement_tornado = """
CREATE TABLE tornado (
id integer PRIMARY KEY,
om integer,
yr integer,
mo integer,
dy integer,
date text,
time text,
tz integer,
st text,
stf integer,
stn integer,
mag real,
inj integer,
fat integer,
loss integer,
closs integer,
slat real,
slon real,
elat real,
elon real,
len real,
wid integer,
ns integer,
sn integer,
sg integer,
f1 integer,
f2 integer,
f3 integer,
f4 integer,
fc integer
);
"""
crsr.execute(create_statement_tornado)

create_statement_wind = """
CREATE TABLE wind (
om integer PRIMARY KEY,
yr integer,
mo integer,
dy integer,
date text,
time text,
tz integer,
st text,
stf integer,
stn integer,
mag real,
inj integer,
fat integer,
loss integer,
closs integer,
slat real,
slon real,
elat real,
elon real,
len integer,
wid integer,
ns integer,
sn integer,
sg integer,
f1 integer,
f2 integer,
f3 integer,
f4 integer,
mt text
);
"""
crsr.execute(create_statement_wind)

create_statement_summary = """
CREATE TABLE summary (
Month text PRIMARY KEY,
Tornado integer,
Hail integer,
Wind integer
);
"""
crsr.execute(create_statement_summary)

# insert your dataframes into that database
df_hail.to_sql('hail', cnxn, index=False, if_exists="append")
df_tornado.to_sql('tornado', cnxn, index=False, if_exists="append")
df_wind.to_sql('wind', cnxn, index=False, if_exists="append")
df_summary.to_sql('summary', cnxn, index=False, if_exists="append")

cnxn.close()

