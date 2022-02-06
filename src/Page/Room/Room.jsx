import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../Image/Banners.png"
import image from "../../Image/image.png"
import "./Room.css"

const products=[
    {   img:image,
        Heading:'Standered Room',
        price:"350 USD/Night"

    },
    {   img:image,
        Heading:'Delux Room',
        price:"400 USD/Night",

    },
    {   img:image,
        Heading:'Executive Suit',
        price:"500 USD/Night"

    },
]
const Room = (props) => {
    return (
        <div className='wrapper'>
            <img src={banner}  className="banner" alt=""/>
            <div className='container'>
            {products?.map((items,i)=>(
                <div className='row category'>
                <div className='col-md-6'>
              
                  <img src={items.img} className="image1 text-center" alt=''/>
                  <p className='top-right' style={{color:"white"}}>{items.price}</p>
               
                </div>
                <div className='col-md-6'>
                   <h2>{items.Heading}</h2> 
                    <div className='row'>
                    <p><i class="fas fa-air-freshener"></i>A/C Room</p>
                    <p><i class="fas fa-wifi"></i>Free Wifi</p>
                    <p><i class="fas fa-tv"></i>32'' Led TV</p>
                    <p><i class="fas fa-bath"></i>Bath Tub</p>
                    <p><i class="fas fa-coffee"></i>Coffee maker</p>
                    </div>
                   <Link to="/details"><button type="button" class=" View">View More</button></Link>
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
};

export default Room;