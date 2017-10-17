require('dotenv').config();
var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
	username: process.env.AZURE_FTP_USER, // defaults to "anonymous" 
	password: process.env.AZURE_FTP_PASSWORD, // defaults to "@anonymous" 
	host: process.env.AZURE_FTP_HOST,
	port: 21,
	localRoot: __dirname + "/build",
	remoteRoot: "/site/wwwroot",
	// include: ['build/version.txt'],
	// exclude: ['.git', '.idea', 'tmp/*', 'build/*']
}
	
ftpDeploy.deploy(config, function(err) {
	if (err) console.log(err)
	else console.log('finished');
});
