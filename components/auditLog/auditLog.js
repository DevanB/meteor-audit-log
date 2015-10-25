Template.auditLog.onCreated(function(){
  this.dict = new ReactiveDict();
  this.dict.set('searchFilter', '');
  this.dict.set('typeFilter', '');
  this.dict.set('beginDateFilter', new Date(moment().subtract(7, 'days')).toISOString());
  this.dict.set('endDateFilter', new Date(moment().add(1, 'days')).toISOString());
});

Template.auditLog.onRendered(function(){
  this.subscribe('all-logs');
});

Template.auditLog.helpers({
  getSearchFilter: function () {
    return Template.instance().dict.get('searchFilter');
  },
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
  }
});

Template.auditLog.events({
  "keyup #searchFilter": function (event, template) {
    Template.instance().dict.set('searchFilter', $('#searchFilter').val());
  }
});

Template.entry.helpers({
  getHighlightColor: function () {
    if (Meteor.settings.public.auditLogConfig) {
      return "color:" + Meteor.settings.public.auditLogConfig.highlightColor;
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
