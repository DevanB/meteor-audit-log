Template.logPage.onCreated(function(){
  this.subscribe('all-logs');
  this.dict = new ReactiveDict();
  this.dict.set('searchFilter', '');
  this.dict.set('typeFilter', '');
  this.dict.set('beginDateFilter', new Date(moment().subtract(7, 'days')).toISOString());
  this.dict.set('endDateFilter', new Date(moment().add(1, 'days')).toISOString());
});

Template.logPage.events({
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

Template.logPage.helpers({
  audit: function () {
    return Logs.find({
      $or: [
        {
          userName: {
            $regex: Template.instance().dict.get('searchFilter'),
            $options: 'i'
          }
        },
        {
          patientName: {
            $regex: Template.instance().dict.get('searchFilter'),
            $options: 'i'
          }
        }
      ],
      eventType: {
        $regex: Template.instance().dict.get('typeFilter'),
        $options: 'i'
      },
      timestamp: {
        $lte: new Date(Template.instance().dict.get('endDateFilter')),
        $gte: new Date(Template.instance().dict.get('beginDateFilter'))
      }
    }, {
      sort: {
        timestamp: -1
      }
    });
  },
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
    return Template.instance().dict.get('searchFilter');
  },
  getBeginDate: function () {
    return moment(Template.instance().dict.get('beginDateFilter')).format('YYYY-MM-DD');
  },
  getEndDate: function () {
    return moment(Template.instance().dict.get('endDateFilter')).format('YYYY-MM-DD');
  }
});
