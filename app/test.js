console.log("Running application Tests...");
 const appName="docker-jenkins-ci-pipeline";
 if(appName=="docker-jenkins-ci-pipeline"){
    console.log("test Passed");
    process.exit(0);
 }
 else{
    console.log("test failed");
    process.exit(1);
 }