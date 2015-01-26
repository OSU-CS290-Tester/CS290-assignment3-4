/**
* Create an object literal with the following key value pairs:
* type: {string} 'Goldfish'
* brand: {string} 'Pepperidge Farm'
* flavor: {string} 'Cheddar'
* count: {number} 2000
* It should be returned directly by the following function
* @return {object} - the object literal
*/

function returnObjectLiteral() {
  //your code here
    "use strict";
    return {type: 'Goldfish', brand: 'Pepperidge Farm', flavor: 'Cheddar', count: 2000}; //Modify ONLY this line
  //end your code
}

/**
* Create a constructor function for a `MessageLog` object.
* @constructor
* @param {string} user - The user associated to the message log
* The string indicating the user should be stored in the user property of the
* object instances.
*
* In addition, the following methods should be
* callable on a MessageLog object:
* logMessage( {string} messageText, {number} direction) - This should log a
* message
* as either being sent or received. A direction of 0 indicates it is a message
* the user sent. A direction of 1 indicates it is a message the user received.
* Behavior for other numbers is undefined.
* getSentMessage({number} n) - returns as a string, the content of the nth most
* recently sent message. To conserve memory, the object should only keep the
* last 5 message. n=0 retrieves the most recent n=4 retrieves the least recent
* of the 5.
* totalSent() - returns an integer indicating the total number of messages sent
* totalReceived() - returns an integer indicating the total number of messages
* received
*/

//your code here
function logMessage(messageText, direction) {
    "use strict";
    if (direction === 0) {
        this.sentMessages.unshift(messageText);
        this.totalnumSent += 1;
        if (this.sentMessages.length > 5) {
            this.sentMessages.pop();
        }
    } else if (direction === 1) {
        this.recdMessages.unshift(messageText);
        this.totalnumRecd += 1;
        if (this.recdMessages.length > 5) {
            this.recdMessages.pop();
        }
    }
}

function getSentMessage(n) {
    "use strict";
    if (n > 4) {
        return null;
    }
    return this.sentMessages[n];
}

function getRecdMessage(n) {
    "use strict";
    if (n > 4) {
        return null;
    }
    return this.recdMessages[n];
}

function totalSent() {
    "use strict";
    return this.totalnumSent;
}

function totalReceived() {
    "use strict";
    return this.totalnumRecd;
}

function MessageLog(user) {
    "use strict";
    this.user = user;
    this.sentMessages = [];
    this.recdMessages = [];
    this.logMessage = logMessage;
    this.getSentMessage = getSentMessage;
    this.getRecdMessage = getRecdMessage;
    this.totalnumSent = 0;
    this.totalnumRecd = 0;
    this.totalSent = totalSent;
    this.totalReceived = totalReceived;
}
/*
//debug
var newobj = new MessageLog("Eric");
newobj.logMessage("rectest1", 1);
newobj.logMessage("rectest2", 1);
newobj.logMessage("rectest3", 1);
newobj.logMessage("rectest4", 1);
newobj.logMessage("rectest5", 1);
newobj.logMessage("rectest6", 1);
newobj.logMessage("sndtest1", 0);
newobj.logMessage("sndtest2", 0);
newobj.logMessage("sndtest3", 0);
newobj.logMessage("sndtest4", 0);
newobj.logMessage("sndtest5", 0);
newobj.logMessage("sndtest6", 0);
console.log(newobj.getSentMessage(0), newobj.totalnumRecd, newobj.getRecdMessage(0));
*/
//end your code

/**
* Add a method to the MessageLog prototype:
* lastReceivedMessage() - returns the message text of the last message the user
* received.
*/
//your code here
MessageLog.prototype.lastReceivedMessage = function () {
    "use strict";
    return this.getRecdMessage(0);
}
//end your code

/**
* Create an instance of a `MessageLog` for the user "BlackHatGuy". Have the
* instance receive 3 messages: "foo", "bar" and "baz", received in that order.
* Assign it to the variable myLog.
*/

//your code here
var myLog = new MessageLog("BlackHatGuy");
myLog.logMessage("foo", 1);
myLog.logMessage("bar", 1);
myLog.logMessage("baz", 1);
//end your code
