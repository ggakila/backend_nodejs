// Importing the fs (File System) module
const fs = require('fs');

// Read the contents of the 'db.json' file. The encoding is set to 'utf-8'.
fs.readFile('./db.json', 'utf-8', function(err, data) {
    // Parse the data to a JSON object and assign it to variable 'd'
    const d = JSON.parse(data);
    // Output the 'message' property of the JSON object to the console.
    console.log(d.message);
});

// Read the contents of the current directory using the fs.readdir method
fs.readdir('./', function(err, data) {
    // Output an array of filenames in current directory to the console.
    console.log(data);
});

// Create a new JSON object called temp with a greeting message property
const temp ={
    greeting: "Welcome to measure your height and weight"
}

// Write the contents of the temp JSON object to a new file called 'db1.json' in JSON string format.
fs.writeFile('./db1.json',JSON.stringify(temp), function(err) {
    // Output 'file created' to console when the writeFile operation is finished. 
    console.log('file created');
});
