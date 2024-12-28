import mongoose from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const userSchema = new mongoose.Schema({
    password : {
	type : String,
	required : true,
	trim : true,
    },
    username : {
	type : String,
	required : true,
    },
    email : {
	type : String,
	required : true
    }
}, { timestamps: true })




userSchema.pre("save", async function(next) {
    if(this.isModified("password")){
	return next()
    }
    this.password = await bcrypt.hash(this.password, 10)
	    next()
})

userSchema.methods.isPasswordCorrect = async function(password : string){
    return await bcrypt.compare(password , this.password)
}



userSchema.methods.generateAccessToken = async function(){
     return jwt.sign(
	{
	    _id : this._id,
	    name : this.username
	},
	`${process.env.ACCESS_TOKEN_SECRET}`,
	{
	    expiresIn : process.env.ACCESS_TOKEN_EXPIREY
	}
    )
}


userSchema.methods.generateRefershToken = async function(){
     return jwt.sign(
	{
	    _id : this._id,
	    name : this.username
	},
	`${process.env.REFERSH_TOKEN_SECRET}`,
	{
	    expiresIn : process.env.REFERSH_TOKEN_EXPIREY
	}
    )
}




export const User = mongoose.model('User', userSchema)
