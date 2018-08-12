const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restful_task');
require('../models/task.js')(mongoose);
