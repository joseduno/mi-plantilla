const express = require('express');
const app = express();

// =====================
//       Rutas URL
// =====================
app.use(require('./home'));

module.exports = app;