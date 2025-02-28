
const mongoose = require('mongoose')
const cartSchema = new mongoose.Schema({
    username:{
        type:String, required: true
    },
    product_id: {
        type: Number, required: true
    },
    name: {
        type: String, required: true
    },
    uriImage: {
        type: String, required: false
    },
    quantity: {
        type: Number, require: true
    },

})

module.exports = mongoose.model('Cart', cartSchema);