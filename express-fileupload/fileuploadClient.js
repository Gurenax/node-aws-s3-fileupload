const UPLOAD_FOLDER = 'files' // Ensure that a folder called 'files' is created in the server root dir

// Upload a file
const uploadFile = file => {
  return new Promise( (success, fail) => {
    // Use the mv() method to place the file somewhere on your server
    file.mv(`${UPLOAD_FOLDER}/${file.name}`, error => {
      if(error) fail(error)
      else success({ message: 'File uploaded!' })
    })
  })
}

module.exports = {
  uploadFile
}