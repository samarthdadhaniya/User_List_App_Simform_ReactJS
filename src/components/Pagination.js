import Pagination from "react-bootstrap/Pagination";
import { useState } from "react";
import Userlist from "./UserList";

function AdvancedExample() {
    const [page,setPage]=useState(1);
    return (<>
      <Userlist val={page} />
      <Pagination>
        <Pagination.First onClick={()=>setPage(1)} />
        <Pagination.Prev onClick={()=>{if(page>1){setPage(page-1)} }}/>
        <Pagination.Item onClick={()=>setPage(1)}>{1}</Pagination.Item>
        <Pagination.Item onClick={()=>setPage(2)}>{2}</Pagination.Item>
        <Pagination.Item onClick={()=>setPage(3)}>{3}</Pagination.Item>
        <Pagination.Next onClick={()=>{if(page<3){setPage(page+1)}}}/>
        <Pagination.Last onClick={()=>setPage(3)} />
      </Pagination>
    </>
  );
}

export default AdvancedExample;