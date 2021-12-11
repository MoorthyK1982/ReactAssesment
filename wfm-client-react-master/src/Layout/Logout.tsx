import React from "react";

const Logout = ({token, performLogout}:any) => {
    if (token !== "NA") {
        return <button type="button" className="btn btn-primary me-2" onClick={()=>{performLogout()}}>Logout</button>;
      }
return (<></>)
    
}

export default Logout;