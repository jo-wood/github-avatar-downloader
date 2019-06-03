
var request = require('request');
var secrets = require('./secrets');
var credentials = secrets.GITHUB_TOKEN;
var repoOwner = 'jquery';
var repoName = 'jquery';

var requestOptions = {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request'
    },
    Authorization: credentials
};


function getRepoContributors(options, cb) {

  request(options, function(err, res, body){
    cb(err, body)
  });

}


getRepoContributors(requestOptions, function(err, result) {
  console.log('Errors: ', err);
  var contributors = JSON.parse(result);

  for (var user of contributors){
    console.log(user.avatar_url);    
  }
});

