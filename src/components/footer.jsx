import React from 'react';
import FDNLogo from '../assets/images/FDNLogo.png';
import AppStore from '../assets/images/app_store2.png';
import GooglePlay from '../assets/images/google_play2.png';

const Footer = () => {
  return (
    <footer className="w-[80%] mx-auto mt-5 mb-8">
      <div className="flex justify-between gap-5 mb-7">
        <div className="flex flex-col gap-2">
          <a href="/" className="md:text-sm text-base font-bold">About Us</a>
          <a href="/" className="md:text-sm text-base font-bold">Feedback</a>
          <a href="/" className="md:text-sm text-base font-bold">Contact</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/" className="md:text-sm text-base font-bold">Terms & Conditions</a>
          <a href="/" className="md:text-sm text-base font-bold">Privacy Policy</a>
          <a href="/" className="md:text-sm text-base font-bold">Help</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/" className="md:text-sm text-base font-bold">Awards</a>
          <a href="/" className="md:text-sm text-base font-bold">Newsletter</a>
        </div>
        <div className="flex flex-col gap-2">
          <a href="/" className="md:text-sm text-base font-bold">Download Our Mobile App</a>
          <div className="flex justify-between items-center gap-3">
            <img src={AppStore} alt="" className="h-[50px]" />
            <img src={GooglePlay} alt="" className="h-[50px]" />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-3mb-10">
        <div>
          <img src={FDNLogo} alt="" />
          <p className="text-xs font-medium text-[#b2b2b0]">Copyright 2015-2017 Female Daily Network . All rights reserved</p>
        </div>
        <div className="flex items-center gap-4">
          <img src="https://img.icons8.com/fluency/30/null/facebook-new.png" alt="" />
          <img src="https://img.icons8.com/color/30/null/twitter-circled--v1.png" alt="" />
          <img src="https://img.icons8.com/fluency/30/null/instagram-new.png" alt="" />
          <img src="https://img.icons8.com/color/30/null/youtube-play.png" alt="" />
        </div>
      </div>
      <div className="w-3/4 mx-auto bg-[#d8d8d6] flex items-center justify-center border-[1.5px] border-[#b7b7b5] p-2 mb-4 mt-8">
        <b className="text-[#5c5c5b] text-xl">
          Bottom Frame 970x50, 468x60, 320x50
        </b>
      </div>
    </footer>
  )
}

export default Footer