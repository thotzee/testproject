import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import {images} from '../../Tools/Images';
import { useState, useEffect } from 'react';
import './Styles.css';
import ImageSlider from './../../Tools/ImageSlider';
import Upload from './../../Components/Upload';
import { useSelector, useDispatch } from 'react-redux';
import { initializeGallery } from '../../Store/imageSlice';




function Heading() {
  const {galleryImages} = useSelector((state) => state.images);
  const dispatch=useDispatch();
  const {userName} = JSON.parse(localStorage.getItem('loginDetails')) || '';
  const {userPassword} = JSON.parse(localStorage.getItem('loginDetails')) || '';
  const details = JSON.parse(localStorage.getItem('loginDetails'));

 
  
const checker = () => {  
  try{
    if  (details && details.importedImages && details.importedImages.length === 0 || details.importedImages === undefined || details.importedImages === null) { return []}
    else {return details.importedImages}
  } catch (error) {console.log(error);}
}
  
  const[loading, setLoading] = useState(false);

  const navigate = useNavigate();

  localStorage.setItem('loginDetails', JSON.stringify({userName, userPassword, importedImages:checker()}))


  const[imageFromLocal, setImageFromLocal] = useState([]);


  useEffect(()=> {
  const loader=() => {
    setLoading(true)
    const data = checker()
    setImageFromLocal(data)
    setLoading(false)
  }
  loader()
  }, [])
  

  useEffect(()=>{
    dispatch(initializeGallery(images))
   },[dispatch])


   const actualImages = [...galleryImages, ...imageFromLocal]

  const logout = () => {
    localStorage.clear();
    navigate('/testproject');
  }

  const login =() => {
    navigate('/login');
  }
  
  if (loading) {return<h1>Loading...</h1>}
  return (
    <>
    <Navbar expand="lg" variant="light" className='color-nav shadow' shadow='5'>
      <Container>
        <Nav.Link to="/"><h1>Amazonas Gallery</h1></Nav.Link>
        {userName === undefined ? (
          <>
            <Button variant="light" className='button-color' onClick={login}>Login</Button>
          </>

        ): (
          <>
           <h3>Hello {userName}</h3>
            <Button variant="light" className='button-color' onClick={logout}>Logout</Button>
          </>
        )}
      </Container>
    </Navbar>
    
        <ImageSlider  images={actualImages}  />
        
        </>
   
  );
}

export default Heading;