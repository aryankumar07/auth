import { v2 as cloudinary } from "cloudinary";
import fs from 'fs'

cloudinary.config(
    {
	cloud_name : process.env.CLOUDINARY_NAME,
	api_key : process.env.CLOUDINARY_KEY,
	api_secret : process.env.CLOUDINARY_SECRET
    }
)

const uploadOnCloudinary = async (localFilePath : string )=>{
    try{
	if(!localFilePath) return null;
	const response = await cloudinary.uploader.upload(localFilePath,{
	    resource_type : "auto"
	})
	return response;
    }catch(e){
	fs.unlinkSync(localFilePath)
	console.log(`[Cloudinary File Upload Error] error is ${e}`)
    }
}


export {
    uploadOnCloudinary
}
