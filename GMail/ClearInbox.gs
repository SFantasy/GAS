//////////////////////////////
// Clear GMail Inbox
//
// License MIT
//////////////////////////////
//
// Rule for classify
// Key(from) => Value(label)
//
var RULES = {
    "CSS Weekly": "",
    "python": "python",
    "NYTimes": "NYTimes"
};

/**
 * Classify e-mails via where there are from
 * @return {null}
 */
function classify() {
    var threads = GmailApp.getInboxThreads(),
        i, j, pattern, from;
  
    for(i = 0; i < threads.length; j++) {
        from = threads[i].getMessages()[0].getFrom();
    
        for(j in RULES) {
            if(RULES.hasOwnProperty(j)) {      
                pattern = new RegExp(j);
        
                if(pattern.test(from)) {
                    Logger.log(from);
                }
            }
        }
    }
}

/**
 * Main function
 * @return {null}
 */
function main() {
    getFrom();
}
