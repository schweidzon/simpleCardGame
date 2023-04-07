import connectionDb from '../config/database'
import { Card } from '../protocols/card'


async function findByName(cardName: CardName) {
    return connectionDb.query(`
        SELECT * FROM cards WHERE name = $1
    `, [cardName.name.toLowerCase()])
}

export type CardName = Omit<Card, 'attack' | 'health' | 'defense'>

async function create(card: Card) {

    return connectionDb.query(`
        INSERT INTO cards (name, attack, health, defense) 
        VALUES ($1, $2, $3, $4)
    `,[card.name.toLowerCase(), card.attack, card.health, card.defense])

}

async function getAllCards() {
    return connectionDb.query(`
        SELECT * from cards
    `)
}

async function updateCard(cardName: CardName, newCardValues: Card) {
    return connectionDb.query(`
        UPDATE cards SET name = $1, attack = $2, health = $3, defense = $4
        WHERE name = $5
    `, [newCardValues.name.toLowerCase(), newCardValues.attack, newCardValues.health, newCardValues.defense, cardName.name])
}

async function deleteCard(card: CardName) {
    return connectionDb.query(`
        DELETE from cards WHERE name = $1
    `,[card.name.toLowerCase()])

}

export default {
    findByName,
    create,
    getAllCards,
    updateCard,
    deleteCard
}