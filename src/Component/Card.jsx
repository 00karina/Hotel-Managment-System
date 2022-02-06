import React from 'react';
import image from "../Image/image.png"
import Carousel from "react-grid-carousel";
import "../Page/Details/Details.css"
const cards=[
    {
        title:"Name",
        images:image,
        desc:"Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus.)",

    },
    {
        title:"Name",
        images:image,
        desc:"Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus.)",

    },
    {
        title:"Name",
        images:image,
        desc:"Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus.)",

    },
    {
        title:"Name",
        images:image,
        desc:"Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus.)",

    },
    {
        title:"Name",
        images:image,
        desc:"Pinnipeds, commonly known as seals,[a] are a widely distributed and diverse clade of carnivorous, fin-footed, semiaquatic marine mammals. They comprise the extant families Odobenidae (whose only living member is the walrus.)",

    }
]
const Card = () => {
    return (
        <div className='container'>
            
             <Carousel cols={3} rows={1} gap={0} loop>
                 
             {cards?.map((items,i)=>(
                   <Carousel.Item>
                 <div class="cards">
                    <div class="card">
                             <h2 class="card-title">{items.title}</h2>
                         <img src={items.images} alt=""/>
                        <p class="card-desc">{items.desc}</p>
                   </div>
                   
            </div>
            </Carousel.Item>
             ))}
            
                </Carousel>
</div>
                
    );
};

export default Card;