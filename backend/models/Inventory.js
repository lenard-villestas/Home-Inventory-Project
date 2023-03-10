const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let invSchema = new Schema(
    {
        category: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        price: {
            type: String,
            required: true
        },
        ownerName: {
            type: String,
        },
        ownerId: {
            type: String,
        }
    },
    {
        collection: 'inventory'
    }
)

module.exports = mongoose.model('Inventory', invSchema);