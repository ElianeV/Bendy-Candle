import React, { useEffect, useState } from "react";

function Totaltime( {totalStretchTime}) {
    return (
        <div className="stretchTime">
            <p>Total stretch time: {(Math.floor(totalStretchTime/60))+ 'min ' +totalStretchTime%60 + 's'}</p>
        </div>
    );
}

export default Totaltime