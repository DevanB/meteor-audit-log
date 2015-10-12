exports.command = function(event, timeout) {
  var client = this;
  if (!timeout) {
      timeout = 5000;
  }

  this
    .timeoutsAsyncScript(timeout)
    .executeAsync(function(data, meteorCallback){
      Meteor.call('logEvent', data, function(meteorError, meteorResult){
        var response = (meteorError ? { error: meteorError } : { result: meteorResult });
        meteorCallback(response);
      })
    }, [event], function(result){
      console.log("result.value", result.value);
      client.assert.ok(result.value);
    }).pause(1000)
    return this;
};
