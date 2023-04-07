import joi from 'joi'
import { Card } from '../protocols/card'

const cardSchema = joi.object<Card>({
    name: joi.string().min(3).required(),
    attack: joi.number().required(),
    health: joi.number().min(2).required(),
    defense:joi.number().min(2).required(),
})

export default {
    cardSchema
}