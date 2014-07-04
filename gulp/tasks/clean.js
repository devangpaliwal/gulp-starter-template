var del = require('del');

module.exports = function() {

    del(['public'], function(err) {
        console.log('Files deleted', err);
    });

}