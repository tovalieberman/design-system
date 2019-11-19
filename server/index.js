var https = require('https');
var http = require('http');
var fs = require('fs');
const path = require('path');
const express = require('express');
var proxy = require('http-proxy-middleware');

const app = express();
const buildFolder = '/../client/build';

// DO NOT REMOVE! This endpoint is used by the AWS ELB to check the status of the web app
app.get('/health', function (req, res) {
  return res.send({status: 'OK'});
});

// DO NOT REMOVE! This endpoint returns app info
app.get('/info', function (req, res) {
  return res.send({
    app: {
    source_code_url: process.env.SOURCE_CODE_URL || "N/A",
    source_code_id: process.env.SOURCE_CODE_ID || "N/A",
    build_job_url: process.env.BUILD_JOB_URL || "N/A",
    build_job_id: process.env.BUILD_JOB_ID || "N/A"
  }
});
});

// DO NOT REMOVE! Serves the built React app
app.use(express.static(path.join(__dirname, buildFolder)));

// DO NOT REMOVE! Serves the build React app for any other routes, it has to be the last route defined
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, buildFolder, 'index.html'));
});

// reads the server port for the environment
const port = process.env.PORT || 8080;

// starts the app server
let server = null;
if (process.env.SSL_ENABLED) {
  var sslOptions = {
    key: fs.readFileSync('/app/cert.key'),
    cert: fs.readFileSync('/app/cert.crt')
  };
  server = https.createServer(sslOptions, app);
} else {
  server = http.createServer(app);
}
server.listen(port, () => console.log('design-system app listening on port ' + port ));
