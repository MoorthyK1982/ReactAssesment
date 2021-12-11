import { managerEmp } from "./managerEmp";

export type wfmData = {
    lockid:number,
    employee_id: number;
    manager:string;
    employee:managerEmp;
    reqdate:string;
    requestmessage: string;
}