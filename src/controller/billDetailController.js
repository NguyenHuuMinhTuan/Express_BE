const BillDetails = require('../model/billDetailModel')

class BillDetailsController {
    async getAllBillDetails(req,res){
        try{
            const billDetails = await BillDetails.getAllBillDetails();
            res.status(201).json(billDetails)
        
        }catch(error){
            res.status(500).json({message: error.message})
        }
    }
}
module.exports = new BillDetailsController;