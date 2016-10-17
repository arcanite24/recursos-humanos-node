/**
 * ImageController
 *
 * @description :: Server-side logic for managing Images
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  
  upload: function (req, res) {
    var file = req.file('file').upload({
      dirname: '../../assets/images'
    }, function (err, uploadedFiles) {
      return res.json(uploadedFiles);
    });
  }
	
};

