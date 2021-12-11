import React, { useEffect } from "react";
import WfmModalHOC from "../Redux/HOC/WfmModalHOC";
import { wfmData } from "../type/wfmData";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHCell from "./TableHCell";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const WfmGrid = ({empList, username, token, openModal, getEmployee, setSelectedSoftlock}: any) => {
    
    useEffect(()=>{
        getEmployee({username:username, token:token})
    }, [username])

    return (
        <>
        {openModal && <WfmModalHOC></WfmModalHOC>}
        <Table>
            <TableHeader>
                <TableRow>
                    <TableHCell>Employee Id</TableHCell>
                    <TableHCell>Requestee</TableHCell>
                    <TableHCell>Requested Date</TableHCell>
                    <TableHCell>Employee Manager</TableHCell>
                    <TableHCell></TableHCell>
                </TableRow>
            </TableHeader>
            <TableBody>
               {empList && empList.map((soft:wfmData)=> {
                   return (
                       <TableRow key={soft.lockid}>
                           <TableCell>{soft.employee_id}</TableCell>
                           <TableCell>{soft.manager}</TableCell>
                           <TableCell>{soft.reqdate}</TableCell>
                           <TableCell>{soft.employee ? soft.employee.wfm_manager: ''}</TableCell>
                           <TableCell><button 
                                            className="btn btn-primary"
                                            onClick={
                                                (e)=>{
                                                        setSelectedSoftlock({buttonLabel: "Submit", selectedSoftlock:{
                                                                                                             lockid: soft.lockid,
                                                                                                             employee_id: soft.employee_id,
                                                                                                             manager: soft.manager,
                                                                                                             wfm_manager: soft.employee ? soft.employee.wfm_manager: '',
                                                                                                             requestmessage: soft.requestmessage
                                                                                                             }})
                                                      }
                                                    }
                                            >View Detail</button></TableCell>
                       </TableRow>
                   )
               })} 
            </TableBody>
        </Table>
        </>
    )
}

export default WfmGrid;