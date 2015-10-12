Meteor.methods({
  initalizeDemoLog:function (){
      Logger.logEvent("init", Meteor.userId(), "Ada Lovelace");
      Logger.logEvent("create", Meteor.userId(), "Ada Lovelace", "Users", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("viewed", Meteor.userId(), "Mary Shelley", "Users", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("create", Meteor.userId(), "Florence Nightingale", "Vitals", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("viewed", Meteor.userId(), "Florence Nightingale", "Medications", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("create", Meteor.userId(), "Florence Nightingale", "Medications", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("denied", Meteor.userId(), "Kurt Vonnegut", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("create", Meteor.userId(), "Florence Nightingale", "Vitals", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("viewed", Meteor.userId(), "Florence Nightingale", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("modify", Meteor.userId(), "Florence Nightingale", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("viewed", Meteor.userId(), "Edward Doisy", "Users", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("clone", Meteor.userId(), "Edward Doisy", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("publish", Meteor.userId(), "Edward Doisy", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("unpublish", Meteor.userId(), "Edward Doisy", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("delete", Meteor.userId(), "Ada Lovelace", "MedicationPlans", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("viewed", Meteor.userId(), "Florence Nightingale", "Vitals", Random.id(), Random.id(), "John Doe");
      Logger.logEvent("create", Meteor.userId(), "Florence Nightingale", "Vitals", Random.id(), Random.id(), "John Doe");
  }
});
