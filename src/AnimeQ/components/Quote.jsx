import React, { useState } from 'react';

const Quote = ({ curAnime }) => {
  const [show, setShow] = useState(true);

  const { anime, character, quote } = curAnime;
  return (
    <>
      <div className='Quotes_card' data-aos='zoom-in-up'>
        <h2>{anime}</h2>

        <div className='pButton'>
          {show ? `${quote.substr(0, 100)}...` : quote}
          {show ? (
            <button onClick={() => setShow(!show)} className='readMore'>
              Read More
            </button>
          ) : (
            <button onClick={() => setShow(!show)} className='readMore'>
              Less Read
            </button>
          )}
        </div>
        <div className='iconHead'>
          <p className='name_tag'> - {character}</p>
          <i className='fa-solid fa-quote-right'></i>
        </div>
      </div>
    </>
  );
};

export default Quote;
