Meteor.publish('all-logs', function () {
  return Logs.find();
});

Meteor.startup(function () {
  if (Meteor.settings.public.auditLogConfig && Meteor.settings.public.auditLogConfig.initRecordOnStart) {
    Logger.logEvent("init", null, "System", null, null, null);
  }
});

Meteor.methods({
  logEvent:function(event){
    check(event, Object);
    event.timestamp = new Date();
    var recordId = Logs.insert(event);
    return recordId;
  }
});
