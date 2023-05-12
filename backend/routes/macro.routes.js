const express = require("express")
const { MacroModel } = require("../model/macro.model")

const macroRouter = express.Router()


macroRouter.get("/" , async(req,res) => {
    const {food, qty} = req.body
      try {
        const data = await MacroModel.findOne({title:food})
         res.send({
           
            protine:data.protine*qty,
            carbs:data.carbs*qty,
            fat:data.fat*qty
         })
      } catch (error) {
        res.send({
            err:error.message
        })
      }
} )


module.exports = {
    macroRouter
}