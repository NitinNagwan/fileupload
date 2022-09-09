const multer = require("multer");
const file_check = require("./file_check");
const { readdir } = require("node:fs/promises");
const upload = multer();

const storage_test = multer.diskStorage({
  destination: async function (req, file, cb) {
    const typeOfFile = `public/${req.body.folderName}`;

    cb(null, typeOfFile);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const uploadfile = multer({
  fileFilter: async function (req, file, cb) {
    const typeOfFile = req.body.folderName;
    file_check(typeOfFile);
    const files = await readdir(`public/${typeOfFile}`);
    if (files.includes(file.originalname)) {
      req.fileValidationError = true;
      return cb(null, false, req.fileValidationError);
    }
    cb(null, true);
  },
  storage: storage_test,
}).single("image");

module.exports = uploadfile;
