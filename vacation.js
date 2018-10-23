module.exports = class vacation {
    constructor(name){
        this.name = name
        this.activities = []
    }
    add(activity){
    this.activities.push(activity)
    activity.vacations.push(this)
    }
}