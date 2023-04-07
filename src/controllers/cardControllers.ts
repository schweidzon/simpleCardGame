import { NextFunction, Request, Response } from "express";
import { Card } from "../protocols/card";
import { AxiosError } from 'axios';
import cardServices from '../services/cardServices'
import { CardName } from "../repositories/cardRepositories";

async function create(req: Request, res: Response, next: NextFunction) {
    const card = req.body as Card
    try {
        await cardServices.create(card);

        return res.status(201).send("Carta criada com sucesso")

    } catch (error) {
        next(error)
    }
}

async function getAllCards(req: Request, res: Response, next: NextFunction) {
    try {
        const cards = await cardServices.getAllCards()

        return res.send(cards)

    } catch (error) {
        // const err = error as AxiosError
        // return res.status(500).send(err.message)
        next(error)
    }

}
async function updateCard(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params
    const newValues = req.body as Card



    try {
        await cardServices.updateCard({ name }, newValues)

        return res.send("Carta atualizada com sucesso!")
    } catch (error) {
        // const err = error as AxiosError
        // return res.status(500).send(err.message)
        next(error)
    }



}

async function deleteCard(req: Request, res: Response, next: NextFunction) {
    const { name } = req.params as CardName
    try {
        await cardServices.deleteCard({ name })
        return res.send("Carta deletada com sucesso!")

    } catch (error) {
        // const err = error as AxiosError
        // return res.status(500).send(err.message)
        next(error)

    }
}

export default {
    create,
    getAllCards,
    updateCard,
    deleteCard
}