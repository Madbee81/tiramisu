// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
 specs: ['selectStateProductRegisterPay_spec.js', 'logInCheckDashboard_spec.js', 'logInCheckProfile_spec.js', 'landingPage_spec.js'],
    //specs: ['logInCheckProfile_spec.js'],
  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
      onComplete: null,
      isVerbose: false,
      showColors: true,
      includeStackTrace: true
  }
};
