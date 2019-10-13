
const express = require('express');
const router = express.Router();
const multer = require('../middleware/multer-config');
const Thing = require('../models/thing');
const auth = require('../middleware/auth');
const stuffCtrl = require('../controllers/stuff');

router.post('/', auth, multer, stuffCtrl.createThing);

  router.delete('/:id', auth, stuffCtrl.deleteThing);

  router.get('/:id', auth, stuffCtrl.getOneThing);

  router.put('/:id', auth, multer, stuffCtrl.modifyThing );

  router.get('/', auth, stuffCtrl.getAllStuff);


module.exports = router;