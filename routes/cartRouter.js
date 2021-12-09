const router= require("express").Router()
const  cartCtrl= require("../controllers/cartCtrl")

router.post("/update-cart",cartCtrl.updateCart)
router.get("/get-cart",cartCtrl.getCart)


module.exports=router