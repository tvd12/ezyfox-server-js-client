class EzyAppDataHandler {
    handlers = {};

    addHandler = function(cmd, handler) {
        this.handlers[cmd] = handler;
    }

    handle = function(app, data) {
        var cmd = this.getCommand(data);
        var responseData = this.getResponseData(data);
        var handler = this.handlers[cmd];
        if(handler)
            handler(app, responseData);
        else
            console.log("app: " + app.name + " has no handler with command: " + cmd);
    }

    getCommand = function(data) {
        return data[0];
    }

    getResponseData = function(data) {
        return data[1];
    }
}

export default EzyAppDataHandler