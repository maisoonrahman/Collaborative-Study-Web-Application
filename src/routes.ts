import { Express, Request, Response } from "express"
import {createUserHandler} from "./controllers/user.controllers"
import validateUser from "./middleware/validateUser"
import { createUserSchema } from "./schema/user.schema"

function routes(app: Express) {
    app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200))

    app.post("/api/users", validateUser(createUserSchema), createUserHandler)
}

export default routes