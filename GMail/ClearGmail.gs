//////////////////////////////
// Clear GMail
//
// Copyright (c) 2013 fantasyshao
// License MIT
//////////////////////////////
/**
 * Constructor
 */
var ClearGmail = function() {};

/**
 * Initialize
 * @return {null}
 */
ClearGmail.prototype.init = function() {
  this.markAllAsRead();
  this.clearSpam();
};

/**
 * Clear spams
 * @return {null}
 */
ClearGmail.prototype.clearSpam = function() {
  var spams = GmailApp.getSpamThreads();
  
  if(spams.length > 0) {
    GmailApp.moveThreadsToTrash(spams);
    // There seems no method to empty the trash
  }  
};

/**
 * Mark all e-mails in inbox as read
 * @return {null}
 */
ClearGmail.prototype.markAllAsRead = function() {
  var i, unread = [], mails = GmailApp.getInboxThreads();
  
  for(i = 0; i < mails.length; i++) {
    if(mails[i].isUnread()) {
      unread.push(mails[i]);
    }
  }
  
  for(i = 0; i < unread.length; i++) {
    unread[i].markRead();
  }
};


function main() {
  var c = new ClearGmail();

  c.init();
}
