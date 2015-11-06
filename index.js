var request = require("browser-request");

/**
 * This module is for short or expands URLs using goo.gl API.
 * @type {Object}
 */
module.exports = {
  setKey: function(key) {
      exports.API_KEY = key;
  },
  short: function(url, onComplete) {
    var url = 'https://www.googleapis.com/urlshortener/v1/url';
    if (exports.API_KEY)
      url += '?key=' + exports.API_KEY;

    request(
      {
        method:'POST',
        url:url,
        body:'{\"longUrl\": \"' + url + '\" }',
        json:true
      },
      function(err, response, body) {
        onComplete(err, body);
      });
  },
  expand: function(url, onComplete) {
      var fullUrl = 'https://www.googleapis.com/urlshortener/v1/url?shortUrl=' + url;
      if (exports.API_KEY)
        fullUrl += '&key=' + exports.API_KEY;

    request(
      {
        method:'GET', 
        url:fullUrl,
        json:true
      },
      function(err, response, body) {
        onComplete(err, body);
      });
  }
};
