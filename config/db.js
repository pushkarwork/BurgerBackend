import mongoose from "mongoose"

export const connectdb = async () => {
    const { connection } = await mongoose.connect(process.env.db_url)
    console.log(`server is connected`)
}



