import mongoose from "mongoose"

const MONGODB_URL = process.env.MONGODB_URI

let cached = (global as any).mongoose || { conn: null, promise: null }

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn

    if (!MONGODB_URL) throw new Error('MONGODB_URI IS missing')

    cached.promise = cached.promise || mongoose.connect(MONGODB_URL, {
        dbName: "clerk-next14-db",
        bufferCommands: false,
        connectTimeoutMS: 3000
    })

    cached.conn = await cached.promise

    return cached.conn
}