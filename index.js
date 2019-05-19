const app = require('./src/config/express');

app.listen(3333, (res, req, next) => {
  console.log('Listening on port 3333');
});