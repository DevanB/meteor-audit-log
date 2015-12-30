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
