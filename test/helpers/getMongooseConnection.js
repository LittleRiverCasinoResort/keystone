var mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

module.exports = mongoose.connect('mongodb://localhost/test');
