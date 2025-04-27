import React from 'react';

function Card({ title, image ,Effect }) {
  return (
    <div className={`w-[45vw] h-[80vh]  ${Effect}`}>
      <div className="w-[45vw] h-[10vh] pt-10">
        <h1 className="uppercase text-white flex items-center text-2xl gap-2">
          <div className="w-[1vw] h-[1vw] rounded-full bg-white "></div>
          {title}
        </h1>
      </div>
      <div className="card container w-[45vw] rounded-[2vw] overflow-hidden h-[70vh]">
        <div>
          <img className={`w-[45vw] h-[70vh] object-cover transition-all duration-300 ease-in-out transform hover:scale-110 hover:translate-x-2 hover:translate-y-2 hover:shadow-2xl rounded-[2vw] overflow-hidden`}  src={image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Card;
