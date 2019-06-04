

var request = require('request');
var avatarArray = require('./download-avatars')
avatarArray((arr) => {
  console.log(arr);

});


function downloadImageByUrl(url, filePath) {

}