import React, { useEffect, useState } from 'react'
import '../src/css/Emailist.css';
import EmailistSetting from './EmailistSetting';
import Emailtype from './Emailtype';
import Emailbody from './Emailbody';
import { db } from './firebase';

function Emailist() {

  const [emails, setEmails] = useState([]);

  useEffect(()=>{
      db.collection("emails").orderBy("timestamp","desc").onSnapshot(snapshot=>{
        setEmails(snapshot.docs.map(doc =>({
          id: doc.id,
          data: doc.data()
        })))
      })
  },[])


  return (
    <div className='emailist'>
        <EmailistSetting />
        <Emailtype/>

        {
          emails.map(({id, data})=>{
            return<Emailbody key={id} name={data.to} subject={data.subject} message={data.message} time={new Date(data.timestamp?.seconds*1000).toLocaleTimeString()}/>
          })
        }

    </div>
  )
}

export default Emailist
