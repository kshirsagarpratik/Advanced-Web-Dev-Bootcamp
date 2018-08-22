var mongoose = require("mongoose");

var mongoDBuRL = 'mongodb://zoidberg:whynotzoidb3rg@ds125862.mlab.com:25862/menapiapp';

mongoose.connect(mongoDBuRL, { useNewUrlParser: true });

mongoose.set('debug', true);

mongoose.Promise = Promise;

module.exports.Todo = require('./todo');