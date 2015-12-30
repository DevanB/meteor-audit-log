This package is loosely based on the `clinical:hipaa-audit-log` package created by awatson1978.

```
{
  "public": {
    "auditLogConfig": {
      "initRecordOnStart": false, //default is false
      "layoutName": "",
      "highlightColor": "",
      "classes": {
        "ribbon": "",
        "select": "",
        "input": ""
      }
    }
  }
}
```

```
RouterLayer.route('/view-log', {
  name: 'view-log',
  template: 'logPage',
  layout: layoutName || 'layout'
});
```

##TODO

- [ ] Migrate logPage ribbon to flexbox, style
- [ ] Normalize Logger.js log element
- [ ] Add ability to change logger options
  - [ ] Add option to customize icons for custom logger options
- [ ] Add ability to audit an entity
  - [ ] Add Audit collection
  - [ ] Add Audit object creation
  - [ ] Diff an entity
- [ ] Write tests
- [ ] Add badges (ES2015, build passing/failing, atmosphere badge)
- [ ] TravisCI?
- [ ] Remove route (can't build authentication/authorization with router-layer)
  - [ ] Remove layoutName from settings.json auditLogConfig
- [ ] Fix ribbon dropdown
- [ ] Add custom list of event types

##Logger
```
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
```

##Audit
```
var audit = {
  entity_id
  entity_type
  audit_date
  entity

}
```


Event Types:
table of event Types
