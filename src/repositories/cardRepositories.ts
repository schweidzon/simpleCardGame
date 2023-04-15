import { cards } from '@prisma/client'
import prisma from '../config/database'
import { Card } from '../protocols/card'


async function findByName(cardName: CardName) {
    return prisma.cards.findFirst({
        where: {
            name: cardName.name
        }
    })
}

export type CardName = Omit<Card, 'attack' | 'health' | 'defense' | 'type'>

async function create(card: cards) {

    return prisma.cards.create({
        data: card
    })
}

async function getAllCards() {
    return prisma.cards.findMany()
}

async function updateCard(cardId: number, newCardValues: Card) {
    return prisma.cards.update({
        where: {
           id:cardId
        },
        data: newCardValues
    })
   
}

async function deleteCard(cardId: number) {
    return prisma.cards.delete({
        where: {
            id: cardId
        }
    })

}



export default {
    findByName,
    create,
    getAllCards,
    updateCard,
    deleteCard,
    
}