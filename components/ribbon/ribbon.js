Template.ribbon.events({
  'keyup #searchFilter': function () {
    Session.set("searchFilter", $('#searchFilter').val());
  },
  "change #beginDateInput": function (event, template) {
    Session.set("beginDateFilter", $('#beginDateInput').val() + "T00:00:00.000Z");
  },
  "change #endDateInput": function (event, template) {
    Session.set("endDateFilter", $('#endDateInput').val() + "T00:00:00.000Z");
  },

  'click #filterCreatedButton': function () {
    Session.set("typeFilter", 'create');
  },
  'click #filterModifiedButton': function () {
    Session.set("typeFilter", 'modify');
  },
  'click #filterViewedButton': function () {
    Session.set("typeFilter", 'viewed');
  },
  'click #filterAllButton': function () {
    Session.set("typeFilter", '');
  }
});

var ribbonBreakPoint = 760;


Meteor.startup(function(){
  $(window).resize(function(evt) {
    Session.set("ribbonWidth", $('#ribbon').width());
  });
});

//@TODO: migrate to flexbox
Template.ribbon.helpers({
  getSearchFilterStyling: function () {
    // spacing between inputs should be 20px each
    // if the overall width of the audit log is less than N, show the fullwidth
    if(Session.get('ribbonWidth') > ribbonBreakPoint){
      var searchFilterWidth = Session.get('ribbonWidth') - 575;
      return "margin-left: 10px; margin-right: 5px; width:" + searchFilterWidth + "px;";
    }else{
      var ribbonWidth = Session.get('ribbonWidth') - 40;
      return "width: " + ribbonWidth + "px; margin-left: 10px; margin-right: 10px;";
    }
  },
  getDateRangeStyling: function () {
    // spacing between inputs should be 20px each
    // date range inputs shouldn't be less than 170 px
    // if the overall width of the audit log is less than N, dont even show them
    if(Session.get('ribbonWidth') > ribbonBreakPoint){
      return "visbility: visible; margin-left: 5px; margin-right: 5px; width: 170px;";
    }else{
      return "display: none; visibility: hidden";
    }
  },
  getSelectStyling: function () {
    // spacing between inputs should be 20px each
    // select input should be the same as daterange
    if(Session.get('ribbonWidth') > ribbonBreakPoint){
      return "visbility: visible; margin-left: 5px; margin-right: 5px; width: 170px;";
    }else{
      return "display: none; visibility: hidden";
    }
  },
  getRibbonClass: function () {
    var auditLog = Session.get('AuditLogConfig');
    if (auditLog && auditLog.classes) {
      return auditLog.classes.ribbon;
    } else {
      return null;
    }
  },
  getSelectClass: function () {
    var auditLog = Session.get('AuditLogConfig');
    if (auditLog && auditLog.classes) {
      return auditLog.classes.select;
    } else {
      return null;
    }
  },
  getInputClass: function () {
    var auditLog = Session.get('AuditLogConfig');
    if (auditLog && auditLog.classes) {
      return auditLog.classes.input;
    } else {
      return null;
    }
  },
  getSearchFilter: function () {
    return Session.get('searchFilter');
  },
  getBeginDate: function () {
    return moment(Session.get("beginDateFilter")).format("YYYY-MM-DD");
  },
  getEndDate: function () {
    return moment(Session.get("endDateFilter")).format("YYYY-MM-DD");
  }
});
