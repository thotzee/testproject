import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCircleChevronLeft, 
  faCircleChevronRight, 
  faCircleXmark
} from '@fortawesome/free-solid-svg-icons'
import './ImageSlider.css'
import Container from 'react-bootstrap/Container';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import Upload from '../Components/Upload';


const ImageSlider = ({images}) => {


  const [slideNumber, setSlideNumber] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const [openUpload, setOpenUpload] = useState(false);

  const handleOpenModal = (index) => {
    setSlideNumber(index)
    setOpenModal(true)
  }

  // Close Modal
  const handleCloseModal = () => {
    setOpenModal(false)
  }

  // Previous Image
  const prevSlide = () => {
    slideNumber === 0 
    ? setSlideNumber( images?.length -1 ) 
    : setSlideNumber( slideNumber - 1 )
  }

  // Next Image  
  const nextSlide = () => {
    slideNumber + 1 === images?.length 
    ? setSlideNumber(0) 
    : setSlideNumber(slideNumber + 1)
  }

  // CloseUploadModal

  const handleOpenUpload = () => {
    setOpenUpload(true)
  }

  
  const handleCloseUpload = () => {
    setOpenUpload(false)
  }
  
  

  return (
  
    <div className='wrapping'>

      {openModal && 
        <div className='sliderWrap'>
          <FontAwesomeIcon  icon={faCircleXmark} className='btnClose' onClick={handleCloseModal}  />
          <FontAwesomeIcon  icon={faCircleChevronLeft} className='btnPrev' onClick={prevSlide} />
          <FontAwesomeIcon  icon={faCircleChevronRight} className='btnNext' onClick={nextSlide} />
          <div className='fullScreenImage'>
            <img src={images[slideNumber].src} alt='' />
            <div className='comments'>
            <h4>Comments</h4>
            <div>
              {images[slideNumber]?.comments?.map((comment, index) => (
                <div key={index} className='commentSection'>
                <p className='commentAuthor'>{comment.author}</p>
                <p>{comment.comment}</p>
                <p className='commentDate'>{comment.createdAt}</p>
                </div>
              ))}
            </div>
            </div>
            
          </div>
        </div>
      }
       
       {openUpload && 
        <Upload handleOpenUpload={handleOpenUpload} handleCloseUpload={handleCloseUpload} openUpload={openUpload} setOpenUpload={setOpenUpload}/> 
        }


      <Container className='galleryWrap'>
               {
           images?.map((slide, index) => {
            return(
              <div 
                className='single' 
                key={index}
                onClick={ () => handleOpenModal(index) }
              >
                <img src={slide.src} alt='' />
              </div>
            )
          })
        }
      
        <div className='plus'>
        <AiOutlinePlusCircle className='plusIcon' onClick={()=>setOpenUpload(true)}/>
        
        </div>
      </Container>
      
    </div>
    
  )
}

export default ImageSlider;