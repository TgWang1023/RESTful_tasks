module.exports = function(mongoose){
    const TaskSchema = new mongoose.Schema({
        title: {type: String, default: '', required: [true, 'Title cannot be blank!'], minlength: [2, 'Title must be at least 2 characters long!']},
        description: {type: String, default: '', required: [true, 'Description cannot be blank!'], minlength: [5, 'Description must be at least 5 characters long!']},
        completed: {type: Boolean, default: false}
    }, {timestamps: true});
    mongoose.model('Task', TaskSchema);
};