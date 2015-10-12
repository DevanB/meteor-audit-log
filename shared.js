Logs =  new Meteor.Collection("logs");
Logs.allow({
  insert: function(){
    return true;
  },
  update: function () {
    return false;
  },
  remove: function(){
    return false;
  }
});
