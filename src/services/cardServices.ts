import { Card } from "../protocols/card";
import cardRepositories, { CardName } from '../repositories/cardRepositories'
import errors from '../errors/errors'
import { cards } from "@prisma/client";


async function create(card: cards) {
    
    const cardName = ({name: card.name.toLowerCase()})
   
    const checkCard = await cardRepositories.findByName(cardName)

    if(checkCard) throw errors.conflictError("Já existe uma carta com este nome!")

    await cardRepositories.create(card)
  
}

async function getAllCards() {
    const cards= await cardRepositories.getAllCards()  

    if(!cards) throw errors.notFoundError()
  
    return cards
}

async function updateCard(cardId: number, newValues: Card) {


    const updatedCard = await cardRepositories.updateCard(cardId, newValues)
    

    if(!updatedCard) throw errors.notFoundError()
   
    
 
}

async function deleteCard(cardId: number) {
    const deletedCard = await cardRepositories.deleteCard(cardId)
 
    if(!deletedCard) throw errors.notFoundError()

    
}


export default {
    create,
    getAllCards,
    updateCard,
    deleteCard
}