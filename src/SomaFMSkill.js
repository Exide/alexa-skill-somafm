var AlexaSkill = require('./AlexaSkill');
var intents = require('./intents');
var config = require('../config.json');

module.exports = SomaFMSkill;

function SomaFMSkill() {
  AlexaSkill.call(this, config.amazon.applicationID);
}

SomaFMSkill.prototype = Object.create(AlexaSkill.prototype);
SomaFMSkill.prototype.constructor = SomaFMSkill;
SomaFMSkill.prototype.eventHandlers.onLaunch = function(launchRequest, session, response) {
  var output = 'test output';
  var reprompt = 'test reprompt';
  response.ask(output, reprompt);
};

SomaFMSkill.prototype.intentHandlers = intents;
