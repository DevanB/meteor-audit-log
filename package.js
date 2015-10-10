Package.describe({
  name: "devanb:audit-log",
  summary: "Auditing and logging for Meteor.",
  version: "1.0.0",
  git: "https://github.com/devanb/meteor-audit-log",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use('ecmascript');
  api.use('momentjs:moment@2.10.6', 'client');
  
  //huh?
  // api.use('meteor-platform@1.2.2');
  //normalize
  api.use('iron:router@1.0.4', 'client');

  //remove all less/scss and go with straight css
  api.use('grove:less@0.1.1', 'client');
  //up-to-date?
  api.use('fortawesome:fontawesome@4.4.0', 'client');

  //necessary?
  api.use('clinical:auto-resizing@0.1.2', 'client');

  //update wording
  api.addFiles('lib/HipaaLogger.js', ["client", "server"]);
  //update wording
  api.addFiles('lib/HipaaAuditLog.js', ["client", "server"]);

  //update wording
  api.addFiles('hipaa.shared.js', ["client", "server"]);

  //update wording
  api.addFiles('hipaa.server.js', "server");

  //update wording
  api.addFiles('components/hipaaRibbon/hipaaRibbon.html', "client");
  //update wording and to es6?
  api.addFiles('components/hipaaRibbon/hipaaRibbon.js', "client");
  //turn into css
  api.addFiles('components/hipaaRibbon/hipaaRibbon.less', "client");

  //update wording
  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.html', "client");
  //update wording and to es6?
  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.js', "client");
  //turn into css
  api.addFiles('components/hipaaAuditLog/hipaaAuditLog.less', "client");

  //update wording
  api.addFiles('components/hipaaLogPage/hipaaLogPage.html', "client");
  //update wording and to es6?
  api.addFiles('components/hipaaLogPage/hipaaLogPage.js', "client");
  //turn into css
  api.addFiles('components/hipaaLogPage/hipaaLogPage.less', "client");

  //update wording
  api.export('hipaaLog');
  //update wording
  api.export('hipaaRibbon');

  //update wording
  api.export('Hipaa');
  //update wording
  api.export('HipaaLogger');
  //update wording
  api.export('HipaaAuditLog');

  //Add NPM for npm diff
});


//fix all of this junk
// Package.onTest(function (api) {
//   api.use('tinytest');
//
//   api.use('meteor-platform@1.2.2');
//   api.use('iron:router@1.0.4', 'client');
//   api.use('mrt:moment@2.8.1', 'client');
//   api.use('grove:less@0.1.1', 'client');
//   api.use('fortawesome:fontawesome@4.4.0', 'client');
//   api.use('clinical:hipaa-audit-log');
//   api.use('clinical:verification');
//
//   api.addFiles('tests/tinytest/audit-log-tests.js');
// });
