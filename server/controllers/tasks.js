const mongoose = require('mongoose')
const Task = mongoose.model('Task')
module.exports = {
    list: (req, res) => {
        Task.find({}, (err, tasks) => {
            res.json(tasks)
        })
    },
    create: (req, res) => {
        let task = new Task(req.body)
        task.save( (err) => {
            if(err) {
                res.send(err)
            }
            else {
                res.json(task)
            }
        })
    },
    delete: (req, res) => {
        Task.findOneAndRemove({_id: req.params.id}, (err, task) => {
            if(err){
                res.send(err)
            }
            res.json({message: 'Task successfully deleted'})
        })
    },
    info: (req, res) => {
        Task.findById(req.params.id, (err, task) => {
            if(err){
                console.log('something went wrong')
                res.send(err)
            }
            res.json(task)
        })
    },
    update: (req, res) => {
        Task.findOneAndUpdate({_id: req.params.id}, req.body, {new:true}, (err, task) => {
            if(err){
                res.send(err)
            }
            res.json(task)
        })
    }
}