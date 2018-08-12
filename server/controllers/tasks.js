const mongoose = require('mongoose');
const Task = mongoose.model('Task');
module.exports = {
    all: function(req, res){
        Task.find({}, function(err, tasks){
            if(err){
                console.log('Something went wrong when getting all tasks');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: tasks});
            }
        });
    },
    one: function(req, res){
        Task.findOne({_id: req.params.id}, function(err, task){
            if(err){
                console.log('Something went wrong when getting a single task');
                res.json({message: 'Error', error: err});
            }else{
                res.json({message: 'Success', data: task});
            }
        });
    },
    create: function(req, res){
        Task.create(req.body, function(err){
            if(err){
                console.log('Something went wrong when creating a task, detail: ', err);
                res.redirect('/tasks');
            }else{
                res.redirect('/tasks');
            }
        });
    },
    update: function(req, res){
        Task.findByIdAndUpdate({_id: req.params.id}, {$set: req.body}, function(err){
            if(err){
                console.log('Something went wrong when updating a task, detail: ', err);
                res.redirect(303, '/tasks');
            }else{
                res.redirect(303, '/tasks');
            }
        });
    },
    remove: function(req, res){
        Task.findOneAndRemove({_id: req.params.id}, function(err){
            if(err){
                console.log('Something went wrong when updating a task');
                res.json({message: 'Error', error: err});
            }else{
                Task.find({}, function(err, tasks){
                    if(err){
                        console.log('Something went wrong when getting all tasks');
                        res.json({message: 'Error', error: err});
                    }else{
                        res.json({message: 'Success', data: tasks});
                    }
                });
            }
        });
    }
};