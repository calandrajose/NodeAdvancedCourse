// node myFile.js

const pendingTimers = []
const pendingOSTasks = []
const pendingOperations = []


// new timers, tasks, ops are recorded from myFile running
myFile.runContents();

function shouldContinue(){
    //check one: Any pending setTimeOut, setInterval, setImmediate? 
    //check two: Any pending OS tasks? (eg: listening port) 
    //check three: Any pending long running operations? (eg: fs module)
    return pendingTimers.length || pendingOSTasks.length || pendingOperations.length;
}

while(shouldContinue){
    // 1) looks at pendingTimers and sees if any functions are ready to be called. (call any setTimeout and setInterval)
    
    // 2) looks at pendingOSTasks and pendingOperations and sees if any functions are ready to be called
    
    // 3) pause execution until:
        // - new pendingOSTask is done
        // - new pendingOperation is done
        // - a timer is about to expire
    
    // 4) looks at pendingTimers. Call any setImmediate

    // 5) Handle any 'close' events
    
}

// exit back to terminal