const fs = require('fs');
  
// creating a  readable stream 
const readStream = fs.createReadStream('sample.txt');


// Event: data triggered when a chunk is recieved 
readStream.on('data', (chunk)=>{
    console.log("new chunk received:");
    // console.log(chunk); 
    // it will show raw buffer or 
     console.log(' Buffer:', chunk);             // Raw buffer data
  console.log(' As Text:', chunk.toString()); // converted into  readable text


});

// optional 
readStream.on('end',()=>{
    console.log("finished reading file.")

})