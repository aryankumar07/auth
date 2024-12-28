import mongoose from "mongoose"
const connectDb = async ()=>{
    try{
	const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URL}`)
	console.log(`connected to mongo , ${connectionInstance.connections}`)
    }catch(e){
	console.log(`[MongoConnection Error], ${e}`)
    }
}
export default connectDb
