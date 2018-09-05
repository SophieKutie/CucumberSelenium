// var webdriverio = require('webdriverio');
// var options = {
//     desiredCapabilities: {
//         browserName: 'internet explorer'
//     },
//         host: 'http://autotestgrid-temp.yell-devqaugc-aws.co.uk:4444/',
//         port: 4444
// };

// webdriverio
//     .remote(options)
//     .init()
//     .url('http://www.google.com')
//     .getTitle().then(function(title) {
//         console.log('Title was: ' + title);
//     })
//     .end()
//     .catch(function(err) {
//         console.log(err);
//     });
var chromedriver = require('chromedriver');
module.exports = {
  before : function(done) {
    chromedriver.start();

    done();
  },

  after : function(done) {
    chromedriver.stop();

    done();
  }
};  


module.exports = (function(settings) {
    settings.test_workers = false;
    return settings;
  })(require('./nightwatch.json'));
      


module.exports = {
    'Demo test' : function (browser) {
      browser
        .url("http://autotestgrid-temp.yell-devqaugc-aws.co.uk:4444/")
        // ...
        .end();
    }
  };
















