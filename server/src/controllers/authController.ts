import { Response, Request } from "express"



const RegisterHandler = async (req : Request, res : Response )=>{
    try{
	res.status(200).json({message : "OK"})
    }catch(e){
	const error = e as Error; // Assert that 'e' is of type Error
	res.status(500).json({ error: error.message });
    }
}

export {
    RegisterHandler
}
