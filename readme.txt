cygwin, apart openenen voor connectie starten met database.
dmv: mongod --dbpath C:/Users/Romy/Desktop/WebApp/Cultural_Experiment/data/db
dmv: mongod --dbpath /Users/rasvaan/git/cultural_experiment/data/db

Drop database: (watch out: only at the beginning of the day!!)

mongo
show databases
use mydb
db.dropDatabase(); 

Option for closing MongoDB: 
use admin
db.shutdownServer()