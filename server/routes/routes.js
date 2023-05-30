const express = require('express');
const router = express.Router();
const { login, encodeString } = require('../controllers/controllers');
const auth = require('../middleware/authorization');

router.post('/login', login);
router.post('/encode', auth, encodeString);

module.exports = router;
