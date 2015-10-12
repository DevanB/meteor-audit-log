Meteor.publish('all-logs', function () {
  return Logs.find();
});

Meteor.startup(function () {
  //@TODO: add option to/not to add init record on startup
  Logger.logEvent("init", null, "System", null, null, null);
});

Meteor.methods({
  logEvent:function(event){
    check(event, Object);
    event.timestamp = new Date();
    var recordId = Logs.insert(event);
    return recordId;
  }
});
