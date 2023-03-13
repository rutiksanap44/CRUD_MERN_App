import mongoose from 'mongoose'
const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-zgtud2a-shard-00-00.fn2pzff.mongodb.net:27017,ac-zgtud2a-shard-00-01.fn2pzff.mongodb.net:27017,ac-zgtud2a-shard-00-02.fn2pzff.mongodb.net:27017/CRUD-APPLICATION?ssl=true&replicaSet=atlas-41xbpi-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true })
        console.log(`Database connected Successfully`)
    } catch (error) {
        console.log(`Error while connection to the Database ${error}`)
    }
}

export default Connection;