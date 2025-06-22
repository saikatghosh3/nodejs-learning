// simple node.js server
// const http = require("http");
// function requestListerer(req, res){
//     console.log(req);
// }
// http.createServer(requestListerer);

// The above one is old version of create server

const http = require("http");
 const server = http.createServer((req, res)=> {
    // anonymous function 
    console.log(req)
});
const PORT = 3000;
server.listen(PORT, ()=>{
    console.log(`Server running at http:// localhost:${PORT}`)
})