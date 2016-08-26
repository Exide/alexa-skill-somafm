var https = require('https');

module.exports = {
  get: function (uri, callback) {
    console.log('GET:', uri);
    https.get(uri, function (res) {
      var response = '';

      res.on('data', function (data) {
        response += data;
      });

      res.on('end', function () {
        console.log('RESPONSE:', response);
        try {
          var json = JSON.parse(response);

          if (!json.resultSet)
            callback(new Error('Unknown response: ' + json));
          else if (json.resultSet.errorMessage)
            callback(new Error(json.resultSet.errorMessage));
          else
            callback(null, json.resultSet);

        } catch (e) {
          callback(e);
        }
      });

    }).on('error', function (error) {
      callback(error);
    });
  }
};
