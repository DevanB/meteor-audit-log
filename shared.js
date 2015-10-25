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
RouterLayer.route('/view-log', {
  name: 'view-log',
  template: 'logPage',
  layout: layoutName || 'layout'
});
