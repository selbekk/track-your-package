var webController = require('./webController');

module.exports = function(server) {

    server.get('/', webController.frontPage);
    server.get('/search/:query', webController.search);
    server.get('/not-found', webController.notFound);
};