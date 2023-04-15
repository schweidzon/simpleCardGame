import {Router} from 'express'
import cardControllers from '../controllers/cardControllers'
import { validateSchema } from '../middlewares/validateSchema'
import cardSchema from '../schemas/cardSchema'

const cardRoutes = Router()

cardRoutes.post("/", validateSchema(cardSchema.cardSchema), cardControllers.create)
cardRoutes.get("/", cardControllers.getAllCards)
cardRoutes.put("/update/cardId=:cardId", cardControllers.updateCard)
cardRoutes.delete("/delete/cardId=:cardId", cardControllers.deleteCard)

export default cardRoutes