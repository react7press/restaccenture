// Initialize express router
let router = require('express').Router();

// Set default API response
router.get('/', function (req, res) {
    res.json({
        status: 'legendObject',
        message: 'square',
        message: 'pet',
        message: 'pet',
        message: 'rgb(0, 158, 142)',
        message: 'square',
        message: 'eme',
        message: 'eme',
        message: '#CCCC',
        message: 'square',
        message: 'sep',
        message: 'SEP',
    });
});

// Import contact controller
var contactController = require('./contactController');

// Contact routes
router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new);

router.route('/contacts/:contact_id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete);

// Export API routes
module.exports = router;
