const fs = require("fs");
const multer = require("multer");
const upload = multer();

const fileUploadController = {
  fileUpload(req, res) {
    if (req.fileValidationError) {
      res.json({
        success: false,
        message: "File already exsists",
      });
    } else {
      res.json({
        success: true,
        message: "File uploaded successfully",
        data: req.body,
      });
    }
  },
};

module.exports = fileUploadController;
