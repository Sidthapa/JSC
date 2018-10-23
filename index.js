// a model about finding convert venues in Berlin

const destination = require('./destination')
const activity = require('./activities')
const vacation = require('./vacation')
const database = require('./database')

const hiking = new activity('hiking')
const rafting = new activity('rafting')
const sightseeing = new activity ('sightseeing')

const adventure = new vacation('adventure')
const relax = new vacation ('relax')

const Schlachtensee = new destination('Schlachtensee')
const Grunewald = new destination ('Grunewald')
const Tiergarten = new destination ('Tiergarten')

adventure.add(hiking)
adventure.add(rafting)
relax.add(sightseeing)

Grunewald.find(hiking)
Schlachtensee.find(rafting)
Tiergarten.find(sightseeing)

database.save(Schlachtensee)
database.save(Grunewald)
database.save(Tiergarten)

const loadedfile = database.load()
console.log(loadedfile.activity)