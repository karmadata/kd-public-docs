You can follow this document https://docs.microsoft.com/en-us/azure/app-service/app-service-web-get-started-html, but it's much simpler than that.

## Ensure you have a deployment user set up
It is different than your Azure login. It's your username for deploying using FTP or local Git. You only have to set it up once.

## Create web app
* Under App Services, create a new web app
* pick the resource plan and service plan as you see fit (you usually want to use an existing one)
* the web app's overview page has the website URL

## Deployment
* From the web app's overview page, find the FTP URL
* copy ftp2azure.js to your React project
* copy web.config to public folder (it sets up proper routing rules)
* npm install ftp-deploy
* set up .env
  * AZURE_FTP_HOST= the FTP URL you found earlier
  * AZURE_FTP_USER= the name of the web app\your deployment username
  * AZURE_FTP_PASSWORD= your deployment password
* to deploy via FTP, build the React app, then node ftp2azure.js

## Success

