//Creating a routing service for TAPIX , load the model from storeModel.js
const router = require('express').Router();
let Store = require('../model/storeModel');

/**
 * generate a new receipt and store in Mongodb
 */
router.route('/generate').post((req, res) => {
    console.log(req.body);

    //load into storeModel
    const _id = req.body.id;
    const id = _id;
    const name = req.body.name;
    const address = req.body.address;
    const amount = req.body.amount;
    const payment_type = req.body.payment_type;
    const date = getFormattedDate(new Date(req.body.date));
    const receiver = req.body.receiver;


    const newStoreData = new Store({ _id, id, name, address, amount, payment_type, date, receiver });

    //save to mongodb
    newStoreData.save()
        .then(() => res.json("Added to db"))
        .catch(err => res.status(400).json('Error: ' + err));
});


/**
 * fetch entire collection rows
 */
router.route('/fetchAll').get((req, res) => {
    Store.find()
        .then(stores => res.json(stores))
        .catch(err => res.status(400).json('Error:' + err));
})


/**
 * delete data by id
 */
router.route('/deleteData/:id').get((req, res) => {
    Store.findByIdAndDelete(req.params.id)
        .then(stores => res.json({ "status": "success" }))
        .catch(err => res.status(400).json('Error:' + err));
})

/**
 * fetch data by id
 */
router.route('/fetchData/:id').get((req, res) => {
    console.log(req.params.id)
    Store.findById(req.params.id)
        .then((stores) => res.json(stores))
        .catch(err => res.status(400).json("Error: " + err))
})



//************************************** */

//Utils

//function to format date
function getFormattedDate(date) {
    var year = date.getFullYear();

    var month = (1 + date.getMonth()).toString();
    month = month.length > 1 ? month : '0' + month;

    var day = date.getDate().toString();
    day = day.length > 1 ? day : '0' + day;

    return month + '/' + day + '/' + year;
}
module.exports = router;