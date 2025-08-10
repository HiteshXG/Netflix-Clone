"use client"
import cards_data from "@/libs/Cards_data";
import { useEffect, useRef } from "react";

  const TitleCard = ({title, category}) => {

    const cardsRef = useRef();
    
    const handleWheel = (event) => {
      event.preventDefault();
      cardsRef.current.scrollLeft += event.deltaY;
    }

    useEffect(()=>{
      cardsRef.current.addEventListener('wheel', handleWheel)
    },[])
    return (
      <div className="popular-section mt-12 mb-8" style={{marginBottom: "24px"}}>
        <h2 className="section-title mb-2 text-white text-xl font-semibold" style={{padding: "10px 0px"}}>{title?title:"Popular on Netflix"}</h2>
        <div className="cards-container flex overflow-x-scroll gap-2.5 pb-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]" ref={cardsRef}>
          {cards_data.map((card, index) => (
            <div className="card flex-shrink-0 relative" key={index}>
              <img 
                src={card.image} 
                alt={card.name} 
                className="card-image rounded-sm cursor-pointer"  
              />
              <p className="card-title absolute bottom-2.5 right-2.5">{card.name}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  export default TitleCard;