import React, { useEffect } from "react";
import ManagerModalHOC from "../Redux/HOC/ManagerModalHOC";
import { managerEmp } from "../type/managerEmp";
import { skill } from "../type/skill";
import Skill from "./Skill";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHCell from "./TableHCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const ManagerGrid = ({empList, username, token, openModal, getEmployee, setSelectedEmployee}: any) => {
    useEffect(()=>{
        getEmployee({username:username, token:token})
    }, [username])
    return (
        <>
        {openModal && <ManagerModalHOC></ManagerModalHOC>}
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHCell>Employee Id</TableHCell>
                    <TableHCell>Name</TableHCell>
                    <TableHCell>Skills</TableHCell>
                    <TableHCell>Experience</TableHCell>
                    <TableHCell>Manager</TableHCell>
                    <TableHCell></TableHCell>
                </TableRow>
            </TableHeader>
            <TableBody>
               {empList && empList.map((emp:managerEmp)=> {
                   return (
                       <TableRow key={emp.employee_id}>
                           <TableCell>{emp.employee_id}</TableCell>
                           <TableCell>{emp.name}</TableCell>
                           <TableCell>{emp.skills && emp.skills.map((skl:skill)=>{
                               return(<Skill key={skl.skillid}>{skl.name}</Skill>)
                           })}</TableCell>
                           <TableCell>{emp.experience}</TableCell>
                           <TableCell>{emp.manager}</TableCell>
                           <TableCell><button 
                                            className="btn btn-primary" 
                                            onClick={
                                                (e)=>{
                                                        setSelectedEmployee({openModal: true, buttonLabel: "Send Request", selectedEmployee:emp.employee_id})
                                                      }
                                                    }>Request Lock</button></TableCell>
                       </TableRow>
                   )
               })} 
            </TableBody>
        </Table>
        </>
    )
}

export default ManagerGrid;