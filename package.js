Package.describe({
  name: 'llwoll:arduino-cylon',
  version: '0.0.3',
  // Brief, one-line summary of the package.
  summary: 'Meteor and Cylon.js for Arduino',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/llwoll/meteor-arduino-cylon.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({remot
  'serialport': '1.3.1',
  //'serialport': '2.0.5 ',
  'cylon': '1.0.0',
  'cylon-firmata-llwoll': '0.23.1',
  'llwoll-gpio': '0.27.0',
  'cylon-i2c': '0.21.0'
});

Package.onUse(function(api) {
  api.addFiles([
    'cylon.js',
  ], 'server');
  api.export('Cylon', 'server');
});

//Package.onUse(function(api) {
//  api.versionsFrom('1.2.1');
//  api.use('ecmascript');
//  api.addFiles('arduino-cylon.js');
//});
//
//Package.onTest(function(api) {
//  api.use('ecmascript');
//  api.use('tinytest');
//  api.use('llwoll:arduino-cylon');
//  api.addFiles('arduino-cylon-tests.js');
//});
