

var http= require('http')
var fs=require('fs')

const PORT =5002;

fs.readFile('./signup.html', function(error,html){
      if(error) throw error;

      http.createServer(function(request,response)
      {
             response.writeHeader(200,{"Content-Type":"text/html"});
             response.write(html);
             response.end();
      }).listen(PORT)

});

const PORT1= 5001;

fs.readFile('./signin.html', function(error,html){
      if(error) throw error;

    c  http.createServer(function(request,response)
      {
             response.writeHeader(200,{"Content-Type":"text/html"});
             response.write(html);
             response.end();
      }).listen(PORT1)

});
