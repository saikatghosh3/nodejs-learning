// simple node.js server
// const http = require("http");
// function requestListerer(req, res){
//     console.log(req);
// }
// http.createServer(requestListerer);

// The above one is old version of create server




// new version of function 


// const http = require("http");
//  const server = http.createServer((req, res)=> {
    // anonymous function 
    // console.log(req);
    // process.exit(); // stop the event loop
    // 1st response korbe then exit korbe.

// });
// const PORT = 3000;
// server.listen(PORT, ()=>{
//     console.log(`Server running at http://localhost:${PORT}`)
// })





// Understanding request Object 

// const http = require("http");
// const server = http.createServer((req,res)=>{
//     console.log(req.url, req.method, req.headers)
// });

// const PORT = 3000;
// server.listen(PORT, ()=> {
//      console.log(`Server running at http://localhost:${PORT}`)
// })





// next one how to send response. (cosider like a shopping bag. )

// const http = require("http");
// const server = http.createServer((req, res)=>{
//      res.setHeader('content-Type', 'text/html');
//      res.write('<html>');
//      res.write('<head><title>Saikat coding</title></head>');
//      res.write('<body><h1>This is heading</h1><body>');
//      res.write('</html>');
//      res.end();

// });

// const PORT = 3000;
// server.listen(PORT, ()=>{
//     console.log(`Server running at http://localhost:${PORT}`);
// });





// This one is for routing.


const http = require("http");
const server = http.createServer((req, res)=>{
    if (req.url === '/'){
     res.setHeader('content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Saikat coding</title></head>');
     res.write('<body><h1>This is heading</h1><body>');
     res.write('</html>');
      return res.end();
        }else if(req.url === "/products"){
              res.setHeader('content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Saikat coding</title></head>');
     res.write('<body><h1>This is product page</h1><body>');
     res.write('</html>');
       res.setHeader('content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Saikat coding</title></head>');
     res.write('<body><h1>This is heading</h1><body>');
     res.write('</html>');
      return res.end();
        }else if (req.rel === "/category"){
              res.setHeader('content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Saikat coding</title></head>');
     res.write('<body><h1>This is product category page</h1><body>');
     res.write('</html>');
    return res.end();
        }
          res.setHeader('content-Type', 'text/html');
     res.write('<html>');
     res.write('<head><title>Saikat coding</title></head>');
     res.write('<body><h1>This is heading</h1><body>');
     res.write('</html>');
     res.end();
});

const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http://localhost:${PORT}`);
});