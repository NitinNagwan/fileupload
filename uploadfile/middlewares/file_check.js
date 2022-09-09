const fs = require("fs");

const file_check = (foldername) => {
  const folder_name = `public`;
  try {
    if (!fs.existsSync(folder_name)) {
      fs.mkdirSync(folder_name);
      if (!fs.existsSync(`${folder_name}/${foldername}`)) {
        fs.mkdirSync(`${folder_name}/${foldername}`);
        return (path = `${folder_name}/${foldername}`);
      }
    } else {
      
      if (!fs.existsSync(`${folder_name}/${foldername}`)) {
        fs.mkdirSync(`${folder_name}/${foldername}`);

        return (path = `${folder_name}/${foldername}`);
      }
    }
  } catch (err) {
    console.error(err);
  }

  // if(image){
  //     res.json({
  //         success:false,
  //         message: 'File already exsist'
  //     })
  // }
  // else{
  //     next()
  // }
};

module.exports = file_check;
