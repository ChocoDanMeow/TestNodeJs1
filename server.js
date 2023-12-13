const app  = require('./src/app');

const port = process.env.PORT || 8005;

app.listen(port, () => {
  console.log('App Port', port);
});