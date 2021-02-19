//Aqui falamos qual o schema desse model. Schema: quais os campos que um produto pode ter e que tipos de valores esse campos vão salvar
const mongoose = require("mongoose");
const mongoosePaginate = require("mongoose-paginate");

const ProductSchema = new mongoose.Schema({
    
    //campos que iremos salvar no banco de dados
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAd: {
        type: Date,
        default: Date.now
    },

});

ProductSchema.plugin(mongoosePaginate);

mongoose.model('Product', ProductSchema);