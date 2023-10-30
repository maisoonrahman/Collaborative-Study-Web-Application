import SessionModel from "../models/session.model"

export async function createSession(userID: string) {
    const session = await SessionModel.create({user: userID})

    return session.toJSON()
}