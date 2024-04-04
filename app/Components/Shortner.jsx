'use client';
import React, { useState } from 'react';

const Shortner = () => {
  const [inputUrl, setInputUrl] = useState('');
  const [shortenedUrl, setShortenedUrl] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInputUrl(e.target.value);
  };

  const handleShortenUrl = async () => {
    const url = 'https://url-shortener-service.p.rapidapi.com/shorten';
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'YOUR_INFO',
        'X-RapidAPI-Key': 'YOUR_API_KEY',
        'X-RapidAPI-Host': 'YOUR_API_HOST'
      },
      body: new URLSearchParams({
        url: inputUrl
      })
    };

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      if (result.result_url) {
        setShortenedUrl(result.result_url);
        setError('');
      } else {
        setError('Error shortening URL (Please enter a valid URL)');
      }
    } catch (error) {
      console.error('Error shortening URL:', error);
      setError('Error shortening URL (Please enter a valid URL)');
    }
  };

  return (
    <div className='bg-[#ececec] flex flex-col justify-center items-center mt-40 rounded-lg p-10 shadow-xl'>
      <h1 className='text-6xl text-[#3949FC] font-bold'>URL Shortner</h1>
      <p className='text-[#3949FC] font-semibold text-lg text-center'>Url Shortner is a free tool to shorten URLs powered by Hashem.top to Create short & memorable links in seconds.</p>
      <div className='flex flex-row mt-5 '>
        <input 
          type='text' 
          className='text-black border border-black rounded-l-lg p-1 min-w-96 sm:max-w-96 mb-2' 
          placeholder='Enter the URL'
          value={inputUrl}
          onChange={handleChange}
        />
        <button 
          type='button' 
          onClick={handleShortenUrl} 
          className='px-5 rounded-r-lg bg-[#3949FC] hover:bg-cyan-950 transition mb-2'
        >
          Click to Shorten
        </button>
        
      </div>
      {error && <p className="text-red-500">{error}</p>}
        {shortenedUrl && (
          <input 
            type='text' 
            className='text-black border border-black rounded-lg p-1 text-center min-w-96 sm:max-w-96 mb-14' 
            placeholder='Shortened URL'
            value={shortenedUrl}
            readOnly
          />
        )}
    </div>
  );
};

export default Shortner;
