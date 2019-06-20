var mongoose = require('mongoose');
mongoose.plugin(schema => { schema.options.usePushEach = true });

module.exports = function removeModel(modelName) {
	delete mongoose.models[modelName];
	delete mongoose.modelSchemas[modelName];
};
