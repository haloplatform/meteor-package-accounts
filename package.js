Package.describe({
  name: 'haloplatform:accounts',
  summary: 'Provides and updates the halo platform accounts in the Accounts collection',
  version: '0.4.1',
  git: 'http://github.com/haloplatform/meteor-package-accounts'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use('underscore', ['client', 'server']);
  api.use('mongo', ['client', 'server']);

  api.use('frozeman:persistent-minimongo@0.1.8', 'client');
  api.use('ethereum:web3@0.15.1', ['client', 'server']);

  api.export(['HaloAccounts'], ['client', 'server']);

  api.addFiles('accounts.js', ['client', 'server']);
});

// Package.onTest(function(api) {
//   api.use('tinytest');
//   api.use('haloplatform:accounts');
//   api.addFiles('accounts-tests.js');
// });

