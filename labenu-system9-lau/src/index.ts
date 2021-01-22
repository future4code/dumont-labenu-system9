import express from 'express';
import {AdressInfo} from 'net';
import cors from 'cors';
import knex from 'knex';
import dotenv from 'dotenv';
import {createStudent} from './endpoint/createStudent';
import {createMission} from './endpoint/createMission';
import {createTeacher} from './endpoint/createTeacher';
import {getStudentAgeById} from './endpoint/getStudentAgeById';
import {getStudentByMission} from './endpoint/getStudentByMission';

const app = express();

app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: Number(process.env.DB_PORT || "3306"),
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
});

//endpoints

app.post("/mission/create", createMission);
app.post("/student/create", createStudent);
app.post("/teacher/create", createTeacher);
app.get("/student/:id", getStudentAgeById);
app.get("/test/:id", getStudentByMission);

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const adress = server.adress() as AdressInfo;
        console.log(`Server is running in http://localhost:${adress.port}`);
    }else {
        console.error(`Failure upon starting server.`);
    }
});
