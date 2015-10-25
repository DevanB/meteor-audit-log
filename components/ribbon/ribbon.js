Template.ribbon.events({
  'keyup #searchFilter': function () {
    Template.instance().dict.set('searchFilter', $('#searchFilter').val());
  },
  'change #beginDateInput': function (event, template) {
    Template.instance().dict.set('beginDateFilter', $('#beginDateInput').val() + 'T00:00:00.000Z');
  },
  "change #endDateInput": function (event, template) {
    Template.instance().dict.set('endDateFilter', $('#endDateInput').val() + 'T00:00:00.000Z');
  },
  'click #filterCreatedButton': function () {
    Template.instance().dict.set('typeFilter', 'create');
  },
  'click #filterModifiedButton': function () {
    Template.instance().dict.set('typeFilter', 'modify');
  },
  'click #filterViewedButton': function () {
    Template.instance().dict.set('typeFilter', 'viewed');
  },
  'click #filterAllButton': function () {
    Template.instance().dict.set('typeFilter', '');
  }
});

//TODO: migrate to flexbox
Template.ribbon.helpers({
  getRibbonClass: function () {
    var auditLogConfig = Meteor.settings.public.auditLogConfig;
    if (auditLogConfig && auditLogConfig.classes) {
      return auditLogConfig.classes.ribbon;
    } else {
      return null;
    }
  },
  getSelectClass: function () {
    var auditLogConfig = Meteor.settings.public.auditLogConfig;
    if (auditLogConfig && auditLogConfig.classes) {
      return auditLogConfig.classes.select;
    } else {
      return null;
    }
  },
  getInputClass: function () {
    var auditLogConfig = Meteor.settings.public.auditLogConfig;
    if (auditLogConfig && auditLogConfig.classes) {
      return auditLogConfig.classes.input;
    } else {
      return null;
    }
  },
  getSearchFilter: function () {
    return Template.instance().get('searchFilter');
  },
  getBeginDate: function () {
    return moment(Template.instance().get('beginDateFilter')).format('YYYY-MM-DD');
  },
  getEndDate: function () {
    return moment(Template.instance().get('endDateFilter')).format('YYYY-MM-DD');
  }
});
