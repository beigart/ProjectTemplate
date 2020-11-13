import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()

const databaseConnection = async () => {

try {
    const DB_URL = process.env.DATABASE_URL
    await mongoose.connect(DB_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    console.log("Connected to the database")
    
} catch (error) {
    console.log("Error connection to database", error)
    process.exit()
}

}

const connectToPort = (app) => {
    const PORT = process.env.PORT
    app.listen(PORT, () => console.log(`Server started on ${PORT}`))
}

export default {
    databaseConnection,
    connectToPort
}