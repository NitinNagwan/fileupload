const express = require('express');
const fileUploadController = require('../controllers/fileUploadController');
const file_check = require('../middlewares/file_check');
const uploadfile = require('../middlewares/upload');
const router = express.Router();





router.post('/api/image-upload',uploadfile, fileUploadController.fileUpload)



module.exports = router