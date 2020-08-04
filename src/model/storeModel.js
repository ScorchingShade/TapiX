const mongoose = require('mongoose');

//model for collection store_info
var StoreInfo = new mongoose.Schema({
        _id: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        payment_type: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        receiver: {
            type: String,
            required: true,
        }
    }, { _id: false, versionKey: false })
    //the _id is false so that mongo doesn't create an auto id
    //_v is ommitted using versionKey


const StoreModel = mongoose.model("store_info", StoreInfo);

module.exports = StoreModel;