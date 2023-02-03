import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './anime.css';
import Error from './components/Error/Error';
import LoaderA from './components/Loader/LoaderA';
import { FetchByName, FetchRandom } from './Reducer/Reducer';
import { toast } from 'react-toastify';
import Quote from './components/Quote';
import narutoImg from './components/image/naruto.png';
import Footer from './components/Footer/Footer';

const AnimeQ = () => {
  const [value, setValue] = useState('');
  const { anime, loading, error } = useSelector((state) => state.anime);

  const dispatch = useDispatch();

  // if (loading === true) {
  //   return (
  //     <>
  //       <div className='main_con'>
  //         <LoaderA />
  //       </div>
  //     </>
  //   );
  // }

  const handleRandom = () => {
    dispatch(FetchRandom());
    // console.log('run');
  };

  const handleSearch = () => {
    if (!value) {
      toast.info('Please write something !', {
        position: 'top-center',
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'dark',
      });
    } else {
      dispatch(FetchByName(value));
    }
    setValue('');
  };

  useEffect(() => {
    handleRandom();
  }, []);

  // if (!anime) {
  //   return (
  //     <>
  //       <h2>oops you wrote wrong </h2>
  //     </>
  //   );
  // }

  return (
    <>
      <div className='main_con'>
        <div className=' container continentWrapper'>
          <div className='heading_2'>
            <h1 className='heading_1'>
              Anime
              <img
                style={{ height: '30px', margin: '0px 5px' }}
                src={narutoImg}
                alt=''
              />
              Characters Quotes
            </h1>
          </div>

          <div className='searchInput'>
            <input
              type='text'
              placeholder='Search character quotes...'
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <div>
              <button onClick={handleSearch}>Search</button>
              <button className='random' onClick={handleRandom}>
                Random
              </button>
            </div>
          </div>
          {loading ? (
            <LoaderA />
          ) : (
            <div className='Quotes_Cont'>
              {!error ? (
                anime.map((curAnime, index) => {
                  return <Quote curAnime={curAnime} key={index} />;
                })
              ) : (
                <Error />
              )}
            </div>
          )}

          <div className='footer_con'>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default AnimeQ;
