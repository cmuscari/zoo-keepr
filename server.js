const express = require('express');
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const app = express();


// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming json data
app.use(express.json());
// if client navigates to endpoint '/api', then the app will use the router we set up in apiRoutes
app.use('/api', apiRoutes);
// if client navigates to to '/' endpoint, then the router will serve back to our html routes
app.use('/', htmlRoutes);
// add middleware to automatically route the css & js files associated with the routed HTML file
app.use(express.static('public'));





app.listen(PORT, () => {
    console.log(`API server is now on port ${PORT}!`);
});