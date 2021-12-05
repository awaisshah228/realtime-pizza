const Menu= require("../models/menuModel")

const menuCtrl={
    getMenu: async(req,res)=>{
        try {
            const menu= await Menu.find({}) 
            return res.json({menu})
            // return res.json({msg : "working"})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    addMenu: async(req,res)=>{

        try {

            const {name,image,size,price}=req.body
        const newMenu= new Menu({
            name,image, size , price
        })
        await newMenu.save()
        return res.json({msg: "Saved",
    menu: newMenu._doc})
            
        } catch (error) {
            return res.status(500).json({msg: err.message})
 
        }
        
        

    }

}
module.exports= menuCtrl