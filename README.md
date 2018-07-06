# alexa-skill-somafm
The idea here is to provide voice access to [SomaFM](http://soma.fm) content via Alexa.

## How to update the AWS Lambda

1. Zip up the necessary components

  ```
  $ rm -f AlexaSomaFMSkill.zip; zip -r AlexaSomaFMSkill.zip node_modules/ package.json config.json index.js
  ```

2. Upload the ZIP file

  ```
  $ aws --region {AWSRegion} lambda update-function-code --function-name {AWSLambdaFunctionARN} --zip-file fileb://$(pwd)/AlexaSomaFMSkill.zip 
  ```
