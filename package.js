Package.describe({
  name: "devanb:audit-log",
  summary: "Auditing and logging for Meteor.",
  version: "1.0.0",
  git: "https://github.com/devanb/meteor-audit-log",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');

  api.use([
    'session',
    'templating',
    'ecmascript',
    'nicolaslopezj:router-layer@0.0.11'
  ]);
  api.use([
    'momentjs:moment@2.10.6',
    'fortawesome:fontawesome@4.4.0',
  ], 'client');

  //update wording
  api.addFiles([
    'lib/HipaaLogger.js',
    'lib/HipaaAuditLog.js'
  ],['client', 'server']);

  //update wording
  api.addFiles('hipaa.shared.js', ['client', 'server']);
  api.addFiles('hipaa.server.js', 'server');

  //update wording
  api.addFiles([
    'components/hipaaRibbon/hipaaRibbon.html',
    'components/hipaaRibbon/hipaaRibbon.js',
    'components/hipaaRibbon/hipaaRibbon.css'
  ], 'client');

  //update wording
  api.addFiles([
    'components/hipaaAuditLog/hipaaAuditLog.html',
    'components/hipaaAuditLog/hipaaAuditLog.js',
    'components/hipaaAuditLog/hipaaAuditLog.css'
  ], 'client');

  //update wording
  api.addFiles([
    'components/hipaaLogPage/hipaaLogPage.html',
    'components/hipaaLogPage/hipaaLogPage.js',
    'components/hipaaLogPage/hipaaLogPage.css'
  ], 'client');

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
//   api.use('momentjs:moment@2.10.6', 'client');
//   api.use('fortawesome:fontawesome@4.4.0', 'client');
//   api.use('clinical:hipaa-audit-log');
//   api.use('clinical:verification');
//
//   api.addFiles('tests/tinytest/audit-log-tests.js');
// });
