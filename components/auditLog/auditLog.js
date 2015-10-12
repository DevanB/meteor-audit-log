//@TODO: migrate searchFilter, typeFilter, beginDateFilter, and endDateFilter to reactiveVars
Session.setDefault("searchFilter", '');
Session.setDefault("typeFilter", '');

// search window defaults to seven days in the past and one day in the future
Session.setDefault("beginDateFilter", new Date(moment().subtract(7, "days")).toISOString());
Session.setDefault("endDateFilter", new Date(moment().add(1, "days")).toISOString());

Template.auditLog.onCreated(function(){
  Meteor.subscribe('all-logs');
});

Template.auditLog.onRendered(function () {
  Session.set("ribbonWidth", $('#ribbon').width());
});

Template.auditLog.helpers({
  getSearchFilter: function () {
    return Session.get('searchFilter');
  },
  audit: function () {
    return Logs.find({
      $or: [
        {
          userName: {
            $regex: Session.get('searchFilter'),
            $options: 'i'
          }
        },
        {
          patientName: {
            $regex: Session.get('searchFilter'),
            $options: 'i'
          }
        }
      ],
      eventType: {
        $regex: Session.get("typeFilter"),
        $options: 'i'
      },
      timestamp: {
        $lte: new Date(Session.get('endDateFilter')),
        $gte: new Date(Session.get('beginDateFilter'))
      }
    }, {
      sort: {
        timestamp: -1
      }
    });
  }
});

Template.auditLog.events({
  "keyup #searchFilter": function (event, template) {
    Session.set("searchFilter", $('#searchFilter').val());
  }
});

Template.entry.helpers({
  getHighlightColor: function () {
    var auditLog = Session.get('AuditLogConfig');
    if (auditLog) {
      return "color:" + auditLog.highlightColor;
    } else {
      return null;
    }
  },
  getUserName: function () {
    if (this.userName) {
      return this.userName;
    } else {
      return "---";
    }
  },
  getPatientName: function () {
    if (this.patientName) {
      return this.patientName;
    } else {
      return "---";
    }
  },
  hasPatientInfo: function () {
    if (this.patientName) {
      return true;
    } else {
      return false;
    }
  },
  getErrorMessage: function () {
    if (this.message) {
      return this.message;
    } else {
      return "---";
    }
  },
  getCollectionName: function () {
    if (this.collectionName) {
      return this.collectionName;
    } else {
      return "---";
    }
  },
  getRecordId: function () {
    if (this.recordId) {
      return this.recordId;
    } else {
      return "---";
    }
  },
  entryTimestamp: function () {
    return moment(this.timestamp).format("YYYY, MMM DD, hh:mm A");
  },
  entryTime: function () {
    return moment(this.timestamp).format("HH:MM A");
  },
  entryDate: function () {
    return moment(this.timestamp).format("YYYY, MMM DD");
  },
  logMessageType: function (eventType) {
    if (this.eventType === eventType) {
      return true;
    } else {
      return false;
    }
  }
});
