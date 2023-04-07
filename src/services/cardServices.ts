import { Card } from "../protocols/card";
import cardRepositories, { CardName } from '../repositories/cardRepositories'
import errors from '../errors/errors'


async function create(card: Card) {
    const cardName = ({name: card.name.toLowerCase()})
    console.log(cardName)
    const {rows: [cardExist]} = await cardRepositories.findByName(cardName)

    if(cardExist) throw errors.conflictError("Já existe uma carta com este nome!")

    await cardRepositories.create(card)
  
}

async function getAllCards() {
    const {rows: cards}= await cardRepositories.getAllCards()

    if(!cards) throw errors.notFoundError()
  
    return cards
}

async function updateCard(name: CardName, newValues: Card) {

    console.log(name)

    const {rows: [cardToUpdate]} = await cardRepositories.findByName(name)

    console.log(cardToUpdate)
    

    if(!cardToUpdate) throw errors.notFoundError()

    await cardRepositories.updateCard(name, newValues)
    
 
}

async function deleteCard(cardName: CardName) {
    const {rows: [card]} = await cardRepositories.findByName(cardName)

    if(!card) throw errors.notFoundError()

    await cardRepositories.deleteCard(cardName)
    
}


export default {
    create,
    getAllCards,
    updateCard,
    deleteCard
}