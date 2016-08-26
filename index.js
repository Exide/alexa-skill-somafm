var Alexa = require('alexa-sdk');
var config = require('config.json');

var GROOVE_SALAD = 'http://ice.somafm.com/groovesalad-128-mp3';
var SECRET_AGENT = 'http://ice.somafm.com/secretagent-128-mp3';

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.appId = config.amazon.applicationID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};

var handlers = {

  'LaunchRequest': function () {
    this.emit(':tell', 'What station do you want to listen to?');
  },

  'Player': function () {
    this.response.audioPlayerPlay('REPLACE_ALL', GROOVE_SALAD, 'token', null, 0);
    this.emit(':responseReady');
  }

};
