import React , {useState} from 'react';
import Card from '../components/Card';

function Featured() {
  const [card , setcard] = useState(null);
    return (
    <div className="w-full py-[7vw] relative">
      <h1 id="card1" className={`text-[7vw] z-40 text-white hidden font-black absolute top-[70vh] left-[24vw]  ${card === 'SCIENCE LABS'?'block':'hidden'}`}>SCIENCE LABS</h1>
      <h1 id="card2" className={`text-[7vw] z-40 text-white hidden font-black absolute top-[70vh] left-[24vw]  ${card === 'Cardboard Spaceship'?'block':'hidden'}`}>Cardboard Spaceship</h1>
      <h1 id="card3" className={`text-[7vw] z-40 text-white hidden font-black absolute top-[160vh] left-[24vw] ${card === 'AH2 & Matt Horn'?'block':'hidden'} `}>AH2 & Matt Horn</h1>
      <h1 id="card4" className={`text-[7vw] z-40 text-white hidden font-black absolute top-[160vh] left-[24vw] ${card === 'FYDE'?'block':'hidden '} `}>FYDE</h1>
      <div className="w-full px-10">
        <h1 className="border-b-[1px] border-white text-white text-[5vw]">
          Featured projects
        </h1>
      </div>
      <div className="py-[4vw] px-[4vw] flex flex-wrap gap-5  items-center">
        <Card
          title="SCIENCE LABS"
          image="Salience_Website_cover-663x551.png"
          onHover={() => setcard('SCIENCE LABS')}
          onLeave={() => setcard(null)}
        />
        <Card
          title="Cardboard Spaceship"
          image="CS_Website_1-663x551.png"
          onHover={() => setcard('Cardboard Spaceship')}
          onLeave={() => setcard(null)}
        />
        <Card
          title="AH2 & Matt Horn"
          image="Frame-481692-1-663x551.png"
          Effect={"py-20"}
          onHover={() => setcard('AH2 & Matt Horn')}
          onLeave={() => setcard(null)}
        />
        <Card
          title="FYDE"
          image="Fyde_Front-1-663x551.png"
          Effect={"py-20"}
          onHover={() => setcard('FYDE')}
          onLeave={() => setcard(null)}
        />
        
      </div>
    </div>
  );
}

export default Featured;
