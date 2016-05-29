module.exports = {
    processPath: null,
    processAbsolutePath: null, //only used with 'fs'
    process: null,
    init: function(processName) {
        this.processPath = './../bpmn-processes/' + processName;
        this.processAbsolutePath = __dirname + '/../bpmn-processes/' + processName;
        this.process = require(this.processPath);
    },
    start: function() {
        var currentState = this.process.processData.init;
        //updating the file.json's state to init
        this.process.processState = currentState;
        var fs = require('fs');
        fs.writeFileSync(this.processAbsolutePath, JSON.stringify(this.process));

        return currentState;
    },
    next: function() {
        var next = this.process.processState.next;
        if(next=='end') 
        	return "Process Ended :) ";
        var currentState = this.process.processData[next];
        //updating the file.json's state to the current task
        this.process.processState = currentState;
        var fs = require('fs');
        fs.writeFileSync(this.processAbsolutePath, JSON.stringify(this.process));
        
        return currentState;
    }

}
