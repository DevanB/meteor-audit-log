HipaaAuditLog = {};

//add layout option
if (Meteor.isClient) {
  Session.setDefault('HipaaAuditLogConfig', {
    classes: {
      input: "",
      select: "",
      ribbon: ""
    },
    highlightColor: ""
  });
}


HipaaAuditLog.configure = function (configObject) {
  if (Meteor.isClient) {
    Session.set('HipaaAuditLogConfig', configObject);
  }
  //console.log("HipaaAuditLogConfig.configObject", configObject);
};

RouterLayer.route('/view-log', {
  name: 'view-log',
  template: 'hipaaLogPage',
  layout: 'layout'
});
