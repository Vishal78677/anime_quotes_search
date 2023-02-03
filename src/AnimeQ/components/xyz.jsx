import React from 'react';

const xyz = () => {
  return (
    <div>
      <h2>{anime}</h2>

      <div className='pButton'>
        {show ? `${quote.substr(0, 90)}...` : quote}
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
  );
};

export default xyz;
