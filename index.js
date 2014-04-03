var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

module.exports = {
    load: function(country) {
        return fs.readFileAsync('resources/' + country + '.json').then(JSON.parse);
    }
};
