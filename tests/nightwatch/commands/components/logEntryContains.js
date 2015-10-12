


exports.command = function(rowIndex, event) {
  this
    .verify.elementPresent("#auditLog .auditItem:nth-child(" + rowIndex + ")")

  if(event.type === "create"){
    this
      .verify.elementPresent("#auditLog .auditItem:nth-child(" + rowIndex + ") .userName", event.userName)
      .verify.elementPresent("#auditLog .auditItem:nth-child(" + rowIndex + ") .recordId", event.recordId)
      .verify.elementPresent("#auditLog .auditItem:nth-child(" + rowIndex + ") .collectionName", event.collectionName)

      if(event.patientName){
        this.verify.elementPresent("#auditLog .auditItem:nth-child(" + rowIndex + ") .patientName", event.patientName)
      }
  }

  return this;
};
