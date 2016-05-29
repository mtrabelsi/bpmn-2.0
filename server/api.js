var app = require('./app.js');

app.get('/start', function(req, res, next) {
    var bpmn = require('./utils/bpmn');
    bpmn.init('exemple1.json') //required before any operation
    res.json({ "currentState": bpmn.start()  });
});

app.get('/next', function(req, res, next) {
    var bpmn = require('./utils/bpmn');
    bpmn.init('exemple1.json') //required before any operation
    res.json({ "currentState": bpmn.next() });
});
