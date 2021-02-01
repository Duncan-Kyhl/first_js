/* 
remember, node uses Google Chromes V8 JS Engine
        (alternatives = Chakra for Explorer/Edge or SpiderMonkey for Firefox)
except the engine occurs in the node runtime environment
instead of in the browser, which gives us some different
functionalities, like writiing to files/os/network.
But we lose out on things like *line 21*
*/

// This program, when called in terminal with "node app.js"

// Create a function to print a name to the console
function sayHello(name) {
    console.log('Hello ' + name);

}

// print "Hello Duncan!"
// sayHello('Duncan');

// Instead, let's try the following:
console.log(window); 
// This returns an error: window is not defined
// this is because the window and document functions
// are a part of the browser runtime environment


