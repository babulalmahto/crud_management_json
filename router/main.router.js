const router = require("express").Router();
const mainController = require("../controller/main.controller");

router.get('/getUser', mainController.getUser);

router.post('/createUser', mainController.createUser);

router.put('/updateUser', mainController.updateUser);

router.delete('/deleteUser', mainController.deleteUser);

module.exports = { router };