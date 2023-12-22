const fs = require('node:fs');
fs.writeFile(
    "MessageFromAuthor.txt",
    "Hi From Aviral Gupta!" 
    +"\n"+
    "Hi From Saksham Gupta!",
    function (error) {
        if (error) throw error;
        console.log('The file has been saved!');
    }
);

fs.readFile(
    "./MessageFromAuthor.txt",
    function (error, data) {
        if(error) throw error;
        console.log(data.toString());
    }
);