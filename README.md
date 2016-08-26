# alexa-skill-somafm

Listen to your favorite [SomaFM](http://soma.fm) stations.

_long description goes here_

## How to update the AWS Lambda

1. Zip up the necessary components

  ```
  $ rm -f AlexaSomaFMSkill.zip; zip -r AlexaSomaFMSkill.zip config.json src/
  ```

2. Upload the ZIP file

  ```
  $ aws --region us-east-1 lambda update-function-code --function-name arn:aws:lambda:us-east-1:965653970746:function:AlexaSomaFM --zip-file fileb://$(pwd)/AlexaSomaFMSkill.zip 
  ```
