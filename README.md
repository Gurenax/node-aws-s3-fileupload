# Node Express AWS S3 File Upload
A simple file uploader using multer and aws-sdk

## Routes
### POST /upload
- Handles a file upload form
- Example html:
```html
<html>
  <body>
    <form ref='uploadForm' 
      id='uploadForm' 
      action='http://localhost:7000/upload' 
      method='post' 
      encType="multipart/form-data">
        <input type="file" name="inputFile" multiple />
        <input type='submit' value='Upload!' />
    </form>     
  </body>
</html>
```

## Create .env file and provide values for the following:
```
AWS_S3_BUCKET = 
AWS_ACCESS_KEY_ID = 
AWS_SECRET_ACCESS_KEY = 
AWS_DEFAULT_REGION = 
```

## References
### AWS S3 Official Docs
* https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html
### Multer S3
* https://www.npmjs.com/package/multer-s3
### AWS S3 Bucket with NodeJS
* https://medium.com/@Keithweaver_/uploading-a-file-to-amazon-web-services-aws-s3-bucket-with-node-js-133b0a1af2b9