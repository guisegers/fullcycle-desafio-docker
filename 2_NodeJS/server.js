const express = require('express');
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// api routes
app.use('/people', require('./src/people/people.controller'));
// start server
const port = process.env.NODE_ENV === 'production' ? (process.env.PORT || 80) : 4000;
app.listen(port, () => console.log('Server listening on port ' + port));