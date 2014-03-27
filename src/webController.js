exports.frontPage = function(req, res) {
    res.send('front page!');
};

exports.search = function(req, res) {
    var query = req.params.query;
    if( !query ) {
        res.send('you need to search for something!');
        return;
    }

    res.send('search for ' + query);
};

exports.notFound = function(req, res) {
    res.send('sorry bro, no hits!');
};