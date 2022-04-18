const auth = require('./../middleware/auth');

module.exports = (app) => {
    const user = require('../controllers/user.js');

    // Auth
    app.post('/signup', user.signup);

   
}