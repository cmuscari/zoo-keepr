const router = require('express').Router();
const path = require('path');



// sets up the route to display the main html page in the browser
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

// sets up the routes to display additional html pages in browser
router.get('/animals', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/animals.html'));
});

router.get('/zookeepers', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/zookeepers.html'));
});

// sets up a route to display main page if user makes a request for a route that doesn't exist
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});



module.exports = router;