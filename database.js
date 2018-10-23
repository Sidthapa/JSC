const fs = require('fs')
const CircularJson = require('circular-json')

module.exports = {
    save(data){
    fs.writeFileSync('data.json', CircularJson.stringify(data))
    },
    load(){
        return JSON.parse(fs.readFileSync('data.json'))
    }
}