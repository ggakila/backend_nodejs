// Importing the http, url, and fs modules
const http = require('http');
const url = require('url');
const fs = require('fs');

// Defining the port to be used by the server. If the process environment specifies a port, use that instead.
const port = process.env.PORT || 6969;

// Define the callback function (rek) which will handle incoming requests and outgoing responses. 
function rek(req, res) {
    
    // Parse url using the url module
    const base = url.parse(req.url);
    
    // Get the pathname from the parsed url
    const pathname = base.pathname;
    
    // Concatenate '.' with pathname to get the filename of the requested resource
    const fileName = '.' + pathname;
    
    // Read the contents of the file using the fs module
    fs.readFile(fileName, function(err, data) {
        
        // If file is not found, respond with 404 status code and 'Not Found' message
        if (err) {
            res.writeHead(404, {
                'Content-Type': 'text/html'
            });
            
            return res.end('<h1> Not Found </h1>');
        }
        
        // If file is found, respond with 200 status code and file content in HTML format
        res.writeHead(200, {
            'Content-Type': 'text/html'
        });
        res.write(data);
        return res.end();
    });
}

// Create a HTTP server using the http module and pass it the request handler/rek function. 
// Set the server to listen on the port defined earlier.
http.createServer(rek).listen(port);

// Output a message saying where the server is listening
console.log('server listening on: ' + port)
