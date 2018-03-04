const express = require('express')
const router = express.Router()
const { uploadFile } = require('../express-fileupload/fileuploadClient')

// Upload a file
router.post('/upload', (req, res) => {
  if (!req.files) res.status(400).json({ error: 'No files were uploaded.' })

  // The name of the input field (i.e. "csvFile") is used to retrieve the uploaded file
  const csvFile = req.files.csvFile

  // Upload the file
  uploadFile(csvFile)
    .then(data => {
      res.status(201).json({ data })
    })
    .catch(error => {
      res.status(400).json({ error })
    })  
})

module.exports = router