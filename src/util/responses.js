module.exports = {

  apologize: function (response, title, error) {
    console.error(error);
    var text = 'Sorry, I had trouble getting that information.';
    response.tellWithCard(text, title, text);
  },

  respondWithCount: function (response, title, collection) {
    var text = 'I found {count}. Should I list them?'.replace('{count}', collection.length);
    var reprompt = 'Should I list all {count}?'.replace('{count}', collection.length);
    response.askWithCard(text, reprompt, title, text);
  }
};
