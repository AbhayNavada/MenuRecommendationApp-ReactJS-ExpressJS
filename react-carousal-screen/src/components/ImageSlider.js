import React, { useState } from 'react'
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa'

//Image slider function component
function ImageSlider ({slides}) {

    const [current, setCurrent] = useState(0)
    const length = slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    };

    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    };

    //Check if input is empty
    if (!Array.isArray(slides) || slides.length <= 0) {
        return null
    }

    return (
        <section className='slider'>
            <FaArrowAltCircleLeft className='left-arrow' onClick={prevSlide}/>
            <FaArrowAltCircleRight className='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {

                function imageClicked(imageUri) {

                    //The imageUri to be sent to the server
                    console.log(imageUri);

                    //Sending the clicked image to the server
                    fetch(`http://localhost:4000/clickedImage?uri=${imageUri}`)
                        .then(response => console.log(response.text()))
                        .catch(error => console.log(error));
                }

                return (
                    <div className={index === current ? 'slide-active' : 'slide'} key={index}>
                        {index === current && (
                            <img src={slide.image} alt='Img' className='image' onClick={() => imageClicked(slide.image)} />
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default ImageSlider