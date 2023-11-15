import React, { useState } from 'react';
import '../src/css/Compose.css';
import RemoveOutlinedIcon from '@mui/icons-material/RemoveOutlined';
import HeightIcon from '@mui/icons-material/Height';
import CloseIcon from '@mui/icons-material/Close';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FormatColorTextIcon from '@mui/icons-material/FormatColorText';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { closeSendMessage } from './features/mailSlice';
import { db } from "./firebase";
import firebase from 'firebase';

function Compose() {
  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const formSubmit = (e) => {
      e.preventDefault();
      if(to==="")
      {
        return alert("To is required");
      }
      if(subject==="")
      {
        return alert("Subject is required");
      }
      if(setMessage==="")
      {
        return alert("Message is required");
      }

      db.collection("emails").add({
        to,
        subject,
        message,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });

      alert("Email Sent Successfully");;
  } 

  return (
    <div className='compose'>
      <div className='compose__header'>
        <div className='compose__header__left'>
          <span> New Message </span>
        </div>
        <div className='compose__header__right'>
          <RemoveOutlinedIcon/>
          <HeightIcon/>
          <CloseIcon onClick ={()=>dispatch(closeSendMessage())} />
        </div>   
      </div>

        <form onSubmit={formSubmit}>
        <div className='compose__body'>
          <div className='compose__bodyForm'>
            <input type="email" placeholder='Recipients' value={to} onChange={(e)=>setTo(e.target.value)}/>

            <input type="text" placeholder='Subject' value={subject} onChange={(e)=>setSubject(e.target.value)}/>

            <textarea rows="20" onChange={(e)=>setMessage(e.target.value)}>{message}</textarea>
          </div>
        </div>

        <div className='compose__footer'>
          <div className='compose__footerLeft'>
            <button type="submit">
              Send <ArrowDropDownIcon/>
            </button>
          </div>
          <div className='compose__footerRight'>
            <FormatColorTextIcon/>
            <AttachFileIcon />
            <DeleteIcon/>
          </div>
        </div>
        </form>
    </div>
  );
}

export default Compose;
