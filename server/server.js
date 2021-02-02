const express = require('express');
 console.log('express', express);

 const app = express();

 app.use(express.static('server/public'));

 const port = 3000;
 app.listen(3000, function() {
   console.log(`I'm listening`, 3000);

 });