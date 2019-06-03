
var request = require('request');
var token = require('secrets');

    //or user-agent can be username based on doc
var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributers',
  headers: {
    'User-Agent':'request'
  }
};

function getRepoContributors(repoOwner, repoName, cb) {

  var url = "https://api.github.com/repos/" + repoOwner + '/' + repoName + '/contributers';
  request(url, function(err, res, body){
    cb(err, body)
  });

}


getRepoContributors('jquery', 'jquery', function(err, result) {
  console.log('Errors: ', err);
  console.log('Result: ', result);
});

