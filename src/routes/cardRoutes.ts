import {Router} from 'express'
import cardControllers from '../controllers/cardControllers'
import { validateSchema } from '../middlewares/validateSchema'
import cardSchema from '../schemas/cardSchema'

const cardRoutes = Router()

cardRoutes.post("/", validateSchema(cardSchema.cardSchema), cardControllers.create)
cardRoutes.get("/", cardControllers.getAllCards)
cardRoutes.put("/update/name=:name", cardControllers.updateCard)
cardRoutes.delete("/delete/name=:name", cardControllers.deleteCard)

export default cardRoutes