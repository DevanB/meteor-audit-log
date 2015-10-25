

exports.command = function() {
  this
    .verify.elementPresent("#logPage")
    .verify.elementPresent("#auditLog")

  return this;
};
