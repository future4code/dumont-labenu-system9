import { Request, Response } from 'express';
import { insertStudent } from '../data/insertStudent';

export const createStudent = async (req: Request, res: Response): Promise<void> => {
    try {
        await insertStudent(
            req.body.id,
            req.body.name,
            req.body.email,
            req.body.birthdate,
            req.body.mission_id,
        );
        res.status(200).send(`Estudante ${req.body.name} criado`);
    } catch (error) {
        res.status(400).send(error.message);
    }
}