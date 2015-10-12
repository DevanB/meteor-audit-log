AuditLog = {};

//@TODO: add abiliy to specify layout name
//@TODO: add option to/not to add init record on startup
if (Meteor.isClient) {
  Session.setDefault('AuditLogConfig', {
    classes: {
      input: "",
      select: "",
      ribbon: ""
    },
    highlightColor: ""
  });
}


AuditLog.configure = function (configObject) {
  if (Meteor.isClient) {
    Session.set('AuditLogConfig', configObject);
  }
};

RouterLayer.route('/view-log', {
  name: 'view-log',
  template: 'logPage',
  layout: 'layout'
});
