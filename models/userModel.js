import mongoose, { Schema } from "mongoose";


const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        min: 6,
        max: 64
    },
    mobno: {
        type: String,
        required: true,
    },
    about: {},
    photo: String,
    following: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    followers: [{
        type: Schema.ObjectId,
        ref: 'User'
    }]
}, { timeStamps: true })

export default mongoose.model('User', userSchema)