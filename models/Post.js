const { Schema, model } = require('mongoose')


const postSchema = Schema({
    type: { 
        type: String,
        lowercase: true  
    },
    title: { 
        type: String,
        uppercase: true  
    },
    createData: { type: Date, default: Date.now },
    lostData: { type: Date },
    author: { type: String },
    views: { 
        type: Number,
         default: 0
    },
    phone: { type: Number },
    email: { type: String },
    city: { 
        type: String, 
        lowercase: true 
    }, 
    street: { 
        type: String, 
        lowercase: true 
    }, 
    coords: {
        lat: { type: Schema.Types.Decimal128},
        lng: { type: Schema.Types.Decimal128},
    },
    animal: { 
        type: String, 
        lowercase: true 
    },
    typeAnimal: { 
        type: String, 
        lowercase: true 
    },
    weight: { 
        type: String, 
        lowercase: true  
    },
    description: { type: String }
})

exports.Post = model('posts', postSchema)