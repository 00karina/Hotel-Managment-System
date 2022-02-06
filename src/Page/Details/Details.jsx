import React from 'react';
import "./Details.css"
import banner from "../../Image/Banners.png"
import Carousel from 'nuka-carousel';
import image1 from "../../Image/rrom1.jpeg"
import image2 from "../../Image/room2.png"
import image3 from "../../Image/image3.png"
import Card from '../../Component/Card';
const carosalImg=[
    {Img:image3},
    {Img:image2},
    {Img:image3},
    {Img:image1}

]

const Details = () => {
   
    return (
        <>
        <div className="details">
            <img src={banner}  className="banner" alt=""/>
            <div className=' detail'>
                <div className='container slider mb-5 '>
                    <h2 className='text-center'>Standered Room</h2>
                    
                        <Carousel >
                                {carosalImg.map((items,i)=>(
                                    <>
                                    <img src={items.Img} alt=""  />
                                    </>
                                ))}
                        </Carousel>
                
                    
                </div>


                <div className='row'>
                    <div className='col-md-3 text-center'><p><i class="fas fa-air-freshener"></i>A/C Room</p></div>
                    <div className='col-md-2 text-center'>  <p><i class="fas fa-wifi"></i>Free Wifi</p></div>
                    <div className='col-md-2 text-center'><p><i class="fas fa-tv"></i>32'' Led TV</p></div>
                    <div className='col-md-2 text-center'><p><i class="fas fa-bath"></i>Bath Tub</p></div>
                    <div className='col-md-3 text-center'> <p><i class="fas fa-coffee"></i>Coffee maker</p></div>
                </div>
                <p className='Paragraph'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, voluptatem impedit earum aspernatur consequuntur, magnam voluptatibus harum necessitatibus numquam, velit distinctio molestiae ipsa a vitae! Corrupti error inventore quis neque!
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Asperiores architecto illo expedita voluptatem vitae impedit itaque corrupti eligendi perspiciatis suscipit nesciunt laudantium deserunt in accusamus ullam, vel, laborum, provident ex!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ex exercitationem, dolores adipisci inventore explicabo et vel ipsam, perspiciatis cupiditate qui autem delectus commodi eligendi molestiae blanditiis quae a in.
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae, tempora. Quos repudiandae dolore corrupti error esse architecto autem deserunt, quidem recusandae, voluptates veniam dolorum vero odio tempore. Iste, cumque aliquam.
                </p>
                <div className='text-center'>
                <button type="button " class=" View">Book Now</button>
            </div>
            </div>
        </div>
      <Card/>
        </>
    );
};

export default Details;