import { skill } from "./skill";

export type managerEmp = {
    employee_id: number;
    name: string;
    status: string;
    manager:string;
    wfm_manager:string;
    experience:string;
    skills: skill[];
}
