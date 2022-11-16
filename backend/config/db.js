import mongoose from 'mongoose'
const connectDb = async () =>{
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser: true,
            useUnifiedTopology: true
            // useCreateIndex: true
        })
        console.log(`Mongo connected: ${conn.connection.host}`.cyan.underline)
    }
    
    catch (error) {
        console.error(`Error,${error.message}`.red.underline.bold)
        process.exit(1)
    }

}
export default connectDb