//@TODO: normalize?
/*
var event = {
  eventType: "",
  userId: "",
  userName: "",
  collectionName: "",
  recordId: "",
  patientId: "",
  patientName: "",
  message: ""
};
*/


Logger = {
  logEvent: function(event, userId, userName, collectionName, incomingRecordId, patientId, patientName, message){
    var newRecord = {};
    var recordId = null;

    if( typeof event === 'object'){
      newRecord = event;
    }else{
      newRecord.eventType = event;
    }
    newRecord.timestamp = new Date();
    if(userId){
      newRecord.userId = userId;
    }
    if(userName){
      newRecord.userName = userName;
    }
    if(incomingRecordId){
      newRecord.recordId = incomingRecordId;
    }
    if(collectionName){
      newRecord.collectionName = collectionName;
    }
    if(message){
      newRecord.message = message;
    }
    if(patientId){
      newRecord.patientId = patientId;
    }
    if(patientName){
      newRecord.patientName = patientName;
    }

    recordId = Logs.insert(newRecord);

    return recordId;
  }
};
