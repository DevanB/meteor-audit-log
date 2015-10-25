Package.describe({
  name: "iamdevan:audit-log",
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
    'reactive-dict',
    'nicolaslopezj:router-layer@0.0.11'
  ]);
  api.use([
    'momentjs:moment@2.10.6',
    'fortawesome:fontawesome@4.4.0',
  ], 'client');

  api.addFiles('lib/Logger.js', ['client', 'server']);

  api.addFiles('shared.js', ['client', 'server']);
  api.addFiles('server.js', 'server');

  api.addFiles([
    'components/ribbon/ribbon.html',
    'components/ribbon/ribbon.js',
    'components/ribbon/ribbon.css'
  ], 'client');
  api.addFiles([
    'components/auditLog/auditLog.html',
    'components/auditLog/auditLog.js',
    'components/auditLog/auditLog.css'
  ], 'client');
  api.addFiles([
    'components/logPage/logPage.html',
    'components/logPage/logPage.css'
  ], 'client');

  api.export('log');
  api.export('ribbon');

  api.export('Logger');
  api.export('AuditLog');
});

Npm.depends({
  "diff": "2.1.3"
});

//fix all of this junk
Package.onTest(function (api) {
  api.use('tinytest');

  api.use('momentjs:moment@2.10.6', 'client');
  api.use('fortawesome:fontawesome@4.4.0', 'client');
  api.use('devanb:audit-log');
  // api.use('clinical:verification');

  api.addFiles('tests/tinytest/audit-log-tests.js');
});
