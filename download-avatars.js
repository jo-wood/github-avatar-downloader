var request = require('request');
var secrets = require('./secrets');

var credentials = secrets.GITHUB_TOKEN;
var repoOwner = 'jquery';
var repoName = 'jquery';

var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'request',
    'Authorization': credentials
  }
};


function getRepoContributors(req, cb) {
  request(req, function(err, res, body){
    cb(err, body)
  }); 
}

function downloadImageByURL(url, filepath) {

  // for (var link of url){
console.log(url);

  // }

}

getRepoContributors(options, function (err, result) {
  console.log('Errors: ', err);
  var contributors = JSON.parse(result);
  var avatarArray = [];

  for (var user of contributors) {
    avatarArray.push(user.avatar_url);
  }

  downloadImageByURL(avatarArray);


}, downloadImageByURL);



















//* snippet of returning avatar urls (request limit reached therefore not returning these - use for now:)
//* this wasn't working because the authentication was wrong and using only generic user-agent request
//* needed to change token password to include token space, then the password not username 
  // https: //avatars0.githubusercontent.com/u/1615?v=4
  // https: //avatars3.githubusercontent.com/u/192451?v=4
  // https: //avatars2.githubusercontent.com/u/157858?v=4
  // https: //avatars2.githubusercontent.com/u/52585?v=4
  // https: //avatars3.githubusercontent.com/u/27985?v=4
  // https: //avatars0.githubusercontent.com/u/1758366?v=4
  // https: //avatars3.githubusercontent.com/u/1199584?v=4
  // https: //avatars0.githubusercontent.com/u/945528?v=4
  // https: //avatars0.githubusercontent.com/u/13718?v=4
  // https: //avatars1.githubusercontent.com/u/38258?v=4
  // https: //avatars1.githubusercontent.com/u/364532?v=4
  // https: //avatars0.githubusercontent.com/u/229244?v=4
  // https: //avatars1.githubusercontent.com/u/109334?v=4
  // https: //avatars0.githubusercontent.com/u/4?v=4
  // https: //avatars2.githubusercontent.com/u/549355?v=4
  // https: //avatars1.githubusercontent.com/u/39374?v=4
  // https: //avatars2.githubusercontent.com/u/414129?v=4
  // https: //avatars2.githubusercontent.com/u/141167?v=4
  // https: //avatars3.githubusercontent.com/u/156867?v=4
  // https: //avatars1.githubusercontent.com/u/38577?v=4
  // https: //avatars2.githubusercontent.com/u/89246?v=4
  // https: //avatars3.githubusercontent.com/u/307962?v=4
  // https: //avatars1.githubusercontent.com/u/146477?v=4
  // https: //avatars0.githubusercontent.com/u/54051?v=4
  // https: //avatars0.githubusercontent.com/u/3485?v=4
  // https: //avatars3.githubusercontent.com/u/46987?v=4
  // https: //avatars0.githubusercontent.com/u/28185?v=4
  // https: //avatars1.githubusercontent.com/u/86454?v=4
  // https: //avatars1.githubusercontent.com/u/81942?v=4
  // https: //avatars1.githubusercontent.com/u/43004?v=4



