'use strict';

const express = require('express');
const app = express();
const PORT = process.env.PORT || 4000;
app.use(express.static('/public'));
app.get('*', function(request, response) {
  response.sendFile('index.html', {root: '.'})
});
app.listen(PORT, function(){
  console.log('Server is up and running on port 4000 and can be accessed at local host 4000 in your browser');
})
