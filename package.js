Package.describe({
  name: 'wolas:flow-routing-extra',
  summary: 'UserAccounts package providing routes configuration capability via ostrio/flow-router-extra.',
  version: '2.0.4',
  git: 'https://github.com/wolasss/flow-routing.git',
});

Package.onUse(function(api) {
  api.versionsFrom('2.2');

  api.use([
    'check',
    'ostrio:flow-router-extra',
    'underscore',
    'ecmascript',
    'wolas:accounts-core',
    'modules'
  ], ['client', 'server']);

  api.imply([
    'ostrio:flow-router-extra@3.4.0',
    'wolas:accounts-core@1.14.2',
  ], ['client', 'server']);

  api.use([
     'react@15.0.1',
     'wolas:blaze-layout@2.3.0',
     'gadicc:blaze-react-component@1.4.0'
  ], ['client', 'server'], { weak: true });

  api.addFiles([
    'lib/core.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/client.js',
    'lib/client/templates_helpers/at_input.js',
  ], ['client']);
});
