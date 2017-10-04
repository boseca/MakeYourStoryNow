/* jshint node: true */

module.exports = function(deployTarget) {
  var ENV = {
    build: {
    	// outputPath: 'tmp/deploy-dist'
    }
    // include other plugin configuration that applies to all deploy targets here
  };

	//NOTE: to deploy use `ember deploy production`


	// -------------------------------------------------------------------
	// `ember-cli-deploy-archive`	- compress the build files into `build.tar`
	// default values:
	ENV.archive = {
		archivePath: 'tmp/deploy-archive',
		archiveName: 'build.tar.gz',
		packedDirName: "front-end"	// this is not cleaning up the folder that is creating `front-end` (we have to do it manually)
	}
	// -------------------------------------------------------------------

	// -------------------------------------------------------------------
	// configuration for 'ember-cli-deploy-s3' && 'ember-cli-deploy-aws-codedeploy'  
	// ENV['aws-codedeploy'] = {
	// 	archiveType: 'zip',
	// 	accessKeyId: 'AWS Access Key ID',
	// 	secretAccessKey: 'Secret Key associated with your accessKey',
	// 	region: 'Region for your bucket and EC2',
	// 	s3UploadOptions: {
	// 		Bucket: 'name of the s3 bucket you are deploying to',
	// 	},
	// 	awsDeploymentOptions: {

	// 		applicationName: 'your cool webapp', //required. The name of your application as configured in Code Deploy
	// 		deploymentGroupName: 'deployment group', //Name of the deployment group as configured in Code Deploy
	// 		revision: {
	// 			//required 'S3' || GitHub'. S3 by default. To configure GitHub depoyment, refer to documentation below.
	// 			revisionType: 'S3',

	// 		}
	// 	}
	// }
	// -------------------------------------------------------------------

	// 'ember-cli-deploy-ftp' - note working (is throwing error) ---------
	// ENV.ftp = {
	// 	host: '23.23.23.23',		     		     		// – required: FTP host name or IP address
	// 	port: '2121',		     		               	// – optional: FTP server port (default: 21)
	// 	username: 'your_username',		 		      // – optional: FTP username (default: anonymous)
	// 	password: 'your_password', 							// process.env.FTP_CRM_HI_PWD,	  // – optional: FTP password (default: anonymous)
	// 	remoteRoot: '/front-end/',	 		       	// – optional: deploy target folder on the FTP server (default: /)
	// }
	// -------------------------------------------------------------------

  if (deployTarget === 'development') {
    ENV.build.environment = 'development';
    // configure other plugins for development deploy target here
  }

  if (deployTarget === 'staging') {
    ENV.build.environment = 'production';
    // configure other plugins for staging deploy target here
  }

  if (deployTarget === 'production') {
    ENV.build.environment = 'production';
    // configure other plugins for production deploy target here
  }

  // Note: if you need to build some configuration asynchronously, you can return
  // a promise that resolves with the ENV object instead of returning the
  // ENV object synchronously.
  return ENV;
};
