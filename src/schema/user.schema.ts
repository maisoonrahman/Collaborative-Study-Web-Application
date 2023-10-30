// all user endpoiints

import {object, string, TypeOf} from "zod"

export const createUserSchema = object({
    body: object ({
        name: string({
            required_error: "Name is required"
        }),
        password: string({
            required_error: "Name is required"
        }).min(6, "Password should be 6 characters minimum"),
        passwordConfirmation: string({
            required_error: "password confirmation is required"
        }),
        email: string({
            required_error: "Email is required",
        }).email('Not a valid email')
    }).refine((data) => data.password === data.passwordConfirmation, {
        message: "Passwords do not match",
        path: ["passwordConfirmation"]
    })
})


export type CreateUserInput = Omit<
TypeOf<typeof createUserSchema>,
"body.passwordConfirmation"
>