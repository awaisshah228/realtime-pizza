const router= require("express").Router()
const  cartCtrl= require("../controllers/cartCtrl")

router.post("/update-cart",cartCtrl.updateCart)


module.exports=router