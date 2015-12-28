Package.describe({
    name: 'llwoll:arduino-cylon',
    summary: 'Meteor and Cylon.js for Arduino',
    version: '1.1.1',
    git: 'https://github.com/llwoll/meteor-arduino-cylon.git'
});

Npm.depends({
    'serialport': '1.3.1',
    //'serialport': '2.0.5 ',
    'cylon': '1.0.0',
    'cylon-firmata': '0.20.0',
    'llwoll-gpio': '0.27.0',
    'cylon-i2c': '0.21.0'
});

Package.onUse(function(api) {
    api.addFiles([
        'cylon.js',
    ], 'server');
    api.export('Cylon', 'server');
});
