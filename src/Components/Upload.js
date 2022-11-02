import React from 'react';
import './Upload.css';
import {  faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {useRef} from 'react';
import {useDispatch} from 'react-redux';
import {append} from './../Store/imageSlice';


const Upload = ({openUpload, setOpenUpload, handleCloseUpload, handleOpenUpload}) => {

  const details = JSON.parse(localStorage.getItem('loginDetails'));
  const inputRef = useRef(null);

  const dispatch=useDispatch();

  const uploadImage = () => {
    const storedImage = inputRef.current.value;
    const {userName} = JSON.parse(localStorage.getItem('loginDetails')) || '';
    const {importedImages} = JSON.parse(localStorage.getItem('loginDetails')) || [];
   
    const actualImageValues = {
      src:storedImage,
      author:userName,
      createdAt: '2015-01-01',
      comments: [],
    }

    const payload= {
      src:storedImage,
      author:userName,
      createdAt: '2015-01-01',
      comments: [],
    }

    dispatch(append(payload));
    const storedDetails = {...details, importedImages:[...importedImages, actualImageValues]}
    localStorage.setItem('loginDetails',JSON.stringify(storedDetails));
    handleCloseUpload();
    
   }
  
  
    

    return(
        
      
        <div className='modal'>
        <div className='modalBox'>
        <FontAwesomeIcon  icon={faCircleXmark} className='btnClose' onClick={handleCloseUpload} />
         <div className='modalHeader'><h1>Upload your image</h1></div>
         <div className='modalBody'>
         <div className='inputContainer'>
         <input className='inputRow' ref={inputRef} type='text' placeholder='Insert your img address here'></input>
         </div>
         <div className='modalFooter'>
            <button className='button upload' onClick={uploadImage} >Upload</button>
            <button className='button cancel' onClick={handleCloseUpload}>Cancel</button>
         </div>
         </div>   
         </div>
        </div>
    )
}

export default Upload;