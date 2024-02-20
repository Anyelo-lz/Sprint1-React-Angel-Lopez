import React from 'react';
import { GoogleFontLoader } from 'react-google-font-loader';

const Card = () => {
  return (
    <>
      <GoogleFontLoader fonts={[{ font: 'Space Mono', weights: [400, 400, '400i', 700, 700, '700i'] }]} />
      <div className="card bg-white rounded-lg overflow-hidden shadow-lg">
        {/* Parte delantera de la tarjeta */}
        <div className="card__front card__part p-6">
          <img className="card__front-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" alt="square" />
          <img className="card__front-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" alt="logo" />
          <p className="card_numer text-lg font-semibold mt-4">**** **** **** 6258</p>
          <div className="card__space-75 flex justify-between items-center">
            <span className="card__label text-sm text-gray-500 uppercase">Card holder</span>
            <p className="card__info text-base">John Doe</p>
          </div>
          <div className="card__space-25 flex justify-between items-center">
            <span className="card__label text-sm text-gray-500 uppercase">Expires</span>
            <p className="card__info text-base">10/25</p>
          </div>
        </div>
        
        {/* Parte trasera de la tarjeta */}
        <div className="card__back card__part p-6">
          <div className="card__black-line"></div>
          <div className="card__back-content">
            <div className="card__secret">
              <p className="card__secret--last">420</p>
            </div>
            <img className="card__back-square card__square" src="https://image.ibb.co/cZeFjx/little_square.png" alt="square" />
            <img className="card__back-logo card__logo" src="https://www.fireeye.com/partners/strategic-technology-partners/visa-fireeye-cyber-watch-program/_jcr_content/content-par/grid_20_80_full/grid-20-left/image.img.png/1505254557388.png" alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;