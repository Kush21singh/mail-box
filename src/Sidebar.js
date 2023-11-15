import React from "react";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import "../src/css/Sidebar.css"
import { useDispatch } from "react-redux";
import { openSendMessage } from "./features/mailSlice";

function Sidebar() {

    const dispatch = useDispatch();

    return (
        <div className="sidebar">
            <Button startIcon={<AddIcon/>} className="compose__btn" onClick={()=>dispatch(openSendMessage())}>Compose</Button>

           
            
        </div>
    )
}

export default Sidebar