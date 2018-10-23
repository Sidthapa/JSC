module.exports = class destination{
    constructor (name, address){
        this.name = name
        this.address = address
        this.activity = []
    }
    find(activity){
    this.activities.push.(activity)
    activitiy.destinations.push(this)
    }
    report(){
        console.log(Chalk.yellow.bgRed.bold(this.name, 'offers', this.holiday, 'where you can', this.activity))
    }
}