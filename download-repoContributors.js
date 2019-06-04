var request = require('request');
var downloadImageByURL = require('./downloadImg.js'); //***** cb fn for getRepoContributors for img download to disk

var secrets = require('./secrets');

var credentials = secrets.GITHUB_TOKEN;
var repoOwner = process.argv[2];
var repoName = process.argv[3];

var options = {
  url: 'https://api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors',
  headers: {
    'User-Agent': 'request',
    'Authorization': credentials
  }
};

//***** requests list of contributors from github api

function getRepoContributors(req, cb) {
  request(req, function(err, res, body){ //! TODO: add better handling for err & nest cb within res === 200 check  
    cb(err, body); //* the response data is passed to an anonymous callback
  }); 
}


getRepoContributors(options, function (err, result) {
  console.log('Errors: ', err);
  var contributors = JSON.parse(result); //***** the anon cb fn loops through the returned JSON object creating:
  var avatarArray = []; //***** the urls where the avatar image can be accessed
  var imagePathArray = []; //*****  array of filepath strings for corresponding users avatar url in avatarArray

  for (var user of contributors) {
    avatarArray.push(user.avatar_url);
    imagePathArray.push('./avatars/' + user.login + '.jpg'); //*****  a filepath extension that set a unique filename based on 
  }

  downloadImageByURL(avatarArray, imagePathArray); //*****  the avatar urls and filepath are then passed to cb fn that dwnlds to disk

}, downloadImageByURL);



