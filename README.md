# bpmn-2.0 lightweight runner
1 - create a  Process by creating json file with the same structure as the prototype.json
2- use the API

# API use


- This API will start the exemple1.json process then set and returns it's current state to init

app.get('/start', function(req, res, next) {
});



- Based  on the last state, This API will return the next Task to run, if the end is reached then it will be blocked (you need then to re-start in order to run it again)

app.get('/next', function(req, res, next) {
});
