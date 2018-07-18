import mongoose, { Schema } from 'mongoose'

const userSchema = new Schema({
    email: String,
    password: String
})

const User = mongoose.model('User', userSchema)
export { User } 