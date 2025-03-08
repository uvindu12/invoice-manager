import mongoose from 'mongoose';


export const connetcMongoDB = async () => {
    try {
        await mongoose.connect (process.env.MONGODB_URL);
        return true
    }
    catch (error){
        console/log ("Connection Error", error);
        process.exit (1)
    }

}