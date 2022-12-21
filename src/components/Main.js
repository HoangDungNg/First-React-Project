import React, { useState, useEffect } from 'react';
/** @jsxImportSource theme-ui */
import './Main.css';
import instagramLogo from '../assets/owner/instagram.png';
import darkInstagram from '../assets/owner/dark_instagram.png';
import twitterLogo from '../assets/owner/twitter.png';
import darkTwitter from '../assets/owner/dark_twitter.png';
import moreIcon from '../assets/owner/more.png';
import darkMore from '../assets/owner/dark_more.png';
const Main = ({ selectedPunk, punkListData, colorMode }) => {
  const [activePunk, setActivePunk] = useState(punkListData[0]);

  useEffect(() => {
    setActivePunk(punkListData[selectedPunk]);
  }, [punkListData, selectedPunk]); // [punkListData, selectedPunk] is for updating page when either punkListData changes
  // or selectedPunk changes
  return (
    <div className="main">
      <div className="mainContent">
        <div className="punkHighLight">
          <div className="punkContainer">
            <img className="selectedPunk" src={activePunk.image_url} alt="" />
          </div>
        </div>

        <div className="punkDetails">
          <div className="title">
            {activePunk.name}
            <span className="itemNumber" sx={{ color: 'idColor' }}>
              ·#{activePunk.token_id}
            </span>
          </div>

          <div className="owner">
            <div className="ownerImageContainer">
              <img
                src={activePunk.creator.profile_img_url}
                alt="This is the owner's avatar"
              />
            </div>

            <div className="ownerDetails">
              <div className="ownerNameAndHandle">
                <div>{activePunk.creator.address}</div>
                <div className="ownerHandle" sx={{ color: 'primary' }}>
                  @lucian.ft.17
                </div>
              </div>

              <div className="ownerLink">
                <img
                  src={colorMode === 'light' ? darkInstagram : instagramLogo}
                  alt=""
                />
              </div>
              <div className="ownerLink">
                <img
                  src={colorMode === 'light' ? darkTwitter : twitterLogo}
                  alt=""
                />
              </div>
              <div className="ownerLink">
                <img src={colorMode === 'light' ? darkMore : moreIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
