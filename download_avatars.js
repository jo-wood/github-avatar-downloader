
var request = require('request');
var secrets = require('./secrets');
var credentials = secrets.GITHUB_TOKEN;



function getRepoContributors(repoOwner, repoName, cb) {

    //or user-agent can be username based on doc
  var options = {
    url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
    headers: {
      'User-Agent': 'request'
    },
    Authorization: credentials
  };
  console.log(options);
  
  request(options, function(err, res, body){
    cb(err, body)
  });

}


getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors: ', err);
  console.log('Result: ', result);
});

