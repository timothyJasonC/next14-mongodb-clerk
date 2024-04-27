"use server"
import { connectToDatabase } from "../db"
import User from "../models/user.model"

export async function createUser(user:any) {
    try {
        await connectToDatabase()
        const newUser = await User.create(user)
        return JSON.parse(JSON.stringify(newUser))
    } catch (err) {
        console.log(err);
        
    }
}