import 'dotenv/config'
import connectDb from './db/index'
import app from './app'

connectDb()
.then(()=>{
    app.listen(process.env.PORT,()=>{
	console.log(`[Succes] server running on port ${process.env.PORT}`)
    })
})
.catch((err)=>{console.log(`[connecting Error] : after the mongo connection ${err}`)})
