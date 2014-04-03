var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports = {
    load: function(country) {
        var path = __dirname + '/resources/' + country + '.json';
        return fs.readFileAsync(path).then(JSON.parse);
    }
};
