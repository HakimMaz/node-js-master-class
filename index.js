/*
* this file is the entry of app
*
*/

//Dependencies 
var http=require('http');
var url =require('url');
//server should respond to all requests with string
var server=http.createServer( (req,res)=>{
    if (req.url === '/favicon.ico') {
        res.writeHead(200, {'Content-Type': 'image/x-icon'} );
        return res.end();
    }else{

        //get parsed URL 
        var parsedurl=url.parse(req.url,true)
        
        //check if url isn't an icon 
        
        //trim the path
        var path =parsedurl.pathname
        var trimmedPath=path.replace(/^\/+|\/+$/g,'');
        //get the method
        var method=req.method.toLowerCase();
        // send response to server
            res.end('hello world');
        // log the path
        console.log(' the recevied path is :',trimmedPath, ' and the method is :',method);
    }
})
// server should listen to post 
server.listen(4500,()=>{
  console.log('server is listening to port 4500')
});