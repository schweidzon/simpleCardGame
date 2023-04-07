import {Router} from 'express'
import cardRoutes from './cardRoutes'

const routes = Router();

routes.use("/cards", cardRoutes)

export default routes