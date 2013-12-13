//////////////////////////////
// Clear GMail Inbox
//
// License MIT
//////////////////////////////
/**
 * 
 * @return {[type]} [description]
 */
function getFrom() {
    var threads = GmailApp.getInboxThreads();

    for(var i = 0; i < threads.length; i++) {
        if(threads[i].getMessages()[0].getFrom().match(/CSS Weekly/)) {
            Logger.log(threads[i].getMessages()[0].getBody());
        } else {
            Logger.log('NOT CSS Weekly.');
        }
    }
}

function classify() {
  
}

function main() {
    getFrom();
}
