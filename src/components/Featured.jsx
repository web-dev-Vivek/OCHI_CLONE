import React from 'react';
import Card from '../components/Card';

function Featured() {
  return (
    <div className="w-full py-[7vw]">
      <div className="w-full px-10">
        <h1 className="border-b-[1px] border-white text-white text-[5vw]">
          Featured projects
        </h1>
      </div>
      <div className="py-[4vw] px-[4vw] flex flex-wrap gap-5  items-center">
        <Card
          title="SCIENCE LABS"
          image="Salience_Website_cover-663x551.png"
        />
        <Card
          title="Cardboard Spaceship"
          image="CS_Website_1-663x551.png"
        />
        <Card
          title="AH2 & Matt Horn"
          image="Frame-481692-1-663x551.png"
          Effect={"py-20"}
        />
        <Card
          title="Fyde"
          image="Fyde_Front-1-663x551.png"
          Effect={"py-20"}
        />
        
      </div>
    </div>
  );
}

export default Featured;
