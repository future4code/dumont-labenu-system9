import {connection} from "../index"

export const selectStudentByMission = async (id: number) : Promise<any> => {
    const result = await connection.raw(`
        SELECT student.name AS student
        FROM student 
        LEFT JOIN mission
        ON student.mission_id = mission.id
        WHERE mission.name = "$(mission)";
    `)

    return result (0);
}