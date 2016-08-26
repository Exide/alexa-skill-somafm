var SomaFMSkill = require('src/SomaFMSkill');

exports.handler = function(event, context) {
  new SomaFMSkill().execute(event, context);
};
