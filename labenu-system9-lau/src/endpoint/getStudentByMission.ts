import {Request, Response} from 'express';
import {selectStudentByMission} from '../data/selectStudentByMission';

export const getStudentByMission = async (req: Request, res: Response) : Promise<void> => {
    try {
        const mission = req.params.id;

        const students = await selectStudentByMission(mission);

        res.status(200).send(students);
    } catch (error) {
        res.status(400).send(error.message);
    }
};