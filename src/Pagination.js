import React from 'react';
export default function Pagination({gotoNextPage,gotoPrevPage})
{
    return(
        <div>
            {gotoPrevPage && <button style={{borderRadius:15,backgroundColor:"black",color:"white",width:"20%",height:"45px",tableLayout:"fixed"}} onClick={gotoPrevPage} >Previous</button>}
            {gotoNextPage && <button style={{borderRadius:15,backgroundColor:"black",color:"white",width:"20%",height:"45px",tableLayout:"fixed"}} onClick={gotoNextPage}>Next</button>}

        </div>
    )
}