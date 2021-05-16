const request = require('request');

proxyamount = 15;

for (i = 0; i < proxyamount; i++) {
request('https://api.getproxylist.com/proxy', { json: true }, (err, res, data) => {
  if (err) { return console.log(err); }
    
    console.log(data.ip, data.port, data.country, data.protocol, console.count)
    
    });
  }




