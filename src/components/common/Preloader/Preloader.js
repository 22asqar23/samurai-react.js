import React from "react";
import preloader from "../../../assets/images/load.gif";

let Preloader = (props) => {
    return <div style={{backgroundColor: 'white'}}>
        <img src={preloader} style={{width:'150px',height:'auto'}}/>
    </div>
}
export default Preloader;