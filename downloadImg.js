



module.exports = function downloadImageByURL(url, filepath) {
  var fs = require('fs');

//! this loop requires the data to stay in original sequence to link each contributor url
//! to the relative filepath download

  for (var link of url) {
    for (var path of filepath) {
      var wstream = fs.createWriteStream(path);
      wstream.write(link);
      wstream.end();
    }
  }
  console.log('Avatars have been successfully downloaded! ');  
}
