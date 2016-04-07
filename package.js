Package.describe({
  name: "devan:audit-log",
  summary: "Auditing and logging for Meteor.",
  version: "1.0.0",
  git: "https://github.com/devanb/meteor-audit-log",
  documentation: "README.md"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');

  api.use([
    'templating',
    'ecmascript',
    'reactive-dict',
    'kadira:flow-router'
  ]);
  api.use([
    'momentjs:moment@2.10.6',
    'fortawesome:fontawesome@4.4.0'
  ], 'client');

  api.addFiles('lib/Logger.js', ['client', 'server']);

  api.addFiles('shared.js', ['client', 'server']);
  api.addFiles('server.js', 'server');

  api.addFiles([
    'components/logPage/logPage.html',
    'components/logPage/logPage.js',
    'components/entry/entry.html',
    'components/entry/entry.js',
    'components/styles.css'
  ], 'client');

  api.export('log');

  api.export('Logger');
  api.export('AuditLog');
});

Npm.depends({
  "diff": "2.1.3"
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('momentjs:moment@2.10.6', 'client');
  api.use('fortawesome:fontawesome@4.4.0', 'client');
  api.use('devan:audit-log');
  api.addFiles('tests/tinytest/audit-log-tests.js');
});
