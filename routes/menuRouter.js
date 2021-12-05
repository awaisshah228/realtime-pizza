const router = require('express').Router()
const menuCtrl=require('../controllers/menuCtrl')

//routes

router.get('/getMenu' ,menuCtrl.getMenu)
router.post('/addMenu',menuCtrl.addMenu)


module.exports = router