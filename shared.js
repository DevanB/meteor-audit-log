Logs =  new Meteor.Collection("logs");
Logs.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return false;
  },
  remove: function(){
    return false;
  }
});
let layoutName = "";
if(Meteor.settings.public.auditLogConfig) {
  layoutName = Meteor.settings.public.auditLogConfig.layoutName
};
FlowRouter.route('/admin/view-logs', {
  name: 'view-logs',
  action() {
    BlazeLayout.render(layoutName || 'layout', { template: 'logPage' });
  }
});
