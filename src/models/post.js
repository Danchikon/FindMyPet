const { Schema, model } = require('mongoose')


const postSchema = Schema({
    type: { 
        type: String,
        lowercase: true  
    },
    createData: { type: Date, default: Date.now },
    lostData: { type: Date },
    author: { type: String },
    phone: { type: Number },
    email: { type: String },
    city: { 
        type: String, 
        lowercase: true 
    }, 
    coords: {
        lat: { type: Schema.Types.Decimal128},
        lon: { type: Schema.Types.Decimal128},
    },

    animal: { 
        type: String, 
        lowercase: true 
    },
    color: { 
        type: String, 
        lowercase: true 
    },
    weight: { type: Number },
    size: { 
        type: String, 
        lowercase: true 
    },
    description: { type: String }
})

exports.Post = model('posts', postSchema)