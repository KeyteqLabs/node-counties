var assert = require('assert');
var api = require('../index');

describe('Counties API', function() {
    it('should return list of counties', function() {
        return api.load('norway').then(function(counties) {
            assert.equal(18, counties.length);
            assert.equal('Østfold', counties[0].name);
        });
    });
});
