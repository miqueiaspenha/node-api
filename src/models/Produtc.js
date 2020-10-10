const moongose = require('mongoose');

const ProductSchema = moongose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

moongose.model('Product', ProductSchema);