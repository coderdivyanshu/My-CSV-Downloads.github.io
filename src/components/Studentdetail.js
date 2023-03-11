import React from 'react'
import './app.css'
 import papa from 'papaparse'

import { useState } from 'react'
import csvtoJson from 'csvtojson'
import { saveAs } from 'file-saver';
// import fs from 'fs';

function Studentdetail() {
  const [file , setfile] = useState();
  const [download , setdownload] = useState({});


  var commonConfig = { delimiter: "," };
  

  // normal method
  // const filestore=(e)=>{
  //    console.log(e.target.files[0]);
  //   setfile(e.target.files[0])
  //   // console.log(file)
  //   const json =  csvtoJson(e.target.files[0]);
  //   console.log(json);

  //   localStorage.setItem("Student data " , json);
  //   // localStorage.setItem("rishabh" , "rishabh");
  // } 

  // papaparse method 

  const filestore=(e)=>{
      papa.parse(
         e.target.files[0] ,
         {
          ...commonConfig , 
          header: true,
          complete: (result) =>{
            console.log(result.data);
            localStorage.setItem("studentdetails" , JSON.stringify(result.data));
            setfile(result.data);
          }
         }
      )
    } 


    const downloadFile = ({ data, fileName, fileType }) => {
      // Create a blob with the data we want to download as a file
      const blob = new Blob([data], { type: fileType })
      // Create an anchor element and dispatch a click event on it
      // to trigger a download
      const a = document.createElement('a')
      a.download = fileName
      a.href = window.URL.createObjectURL(blob)
      const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
      })
      a.dispatchEvent(clickEvt)
      a.remove()
    }

  const downloaditem = (e)=>{
  //  console.log(localStorage.getItem("studentdetails"));
  
   setdownload(
    localStorage.getItem("studentdetails")); 
   console.log(localStorage.getItem("studentdetails"));
  
   downloadFile({
    data: JSON.stringify((localStorage.getItem("studentdetails"))),
    fileName: 'users.json',
    fileType: 'json',
  })

  
  }

  return (
    <div>
     <div className='student'>
      <div className='student1'>Students</div>
      <div className='import'>
      <label htmlFor="files"  className='import1'>Import Student</label>
      <input id='files' style={{visibility:'hidden'}} type='file'  accept='.csv' 
      onChange={filestore}
      />
      </div>
      <div className='export' onClick={downloaditem}>Export as CSV</div>
     </div>
     <div className='list'>List of all the students in the database</div>

    <div className='box'>
      <div className='box1'>Name</div>
      <div className='box1'>Roll No</div>
      <div className='box1'>Address</div>
      <div className='box1'>Institute</div>
      <div className='box1'>Course</div>

    </div>
    </div>
  )
}

export default Studentdetail
