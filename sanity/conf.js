// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Spec patterns are relative to the current working directly when
  // protractor is called.
 //specs: ['signup_spec.js'],
  //specs: ['logInCheckDashboard_spec.js'],
  //specs: ['logInCheckProfile_spec.js'],
 specs: ['selectStateProductRegisterPay_spec.js'],
   //specs: ['landingPage_spec.js'],
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
