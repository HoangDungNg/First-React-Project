import './App.css';
import Header from './components/Header';
import { useColorMode } from 'theme-ui';
import { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import axios from 'axios';
import Punklist from './components/Punklist';
import Main from './components/Main';
import Login from './components/Login';
// userState: pulling data from OpenSea and store it in a variable (array)
// userEffect: API request
// before using userState and userEffect, installing anxios ('yarn add axios' or 'npm install axios')
function App() {
  // initialize empty arrays
  // punkListData: store all the NFTs
  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);
  const [open, setOpen] = useState(false);
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const getMyNFTs = async () => {
      const openseaData = await axios.get(
        'https://testnets-api.opensea.io/api/v1/assets?order_direction=asc&offset=0&limit=20&asset_contract_addresses=0x8E32dD44C090177EB0D536DA486131B05888970A'
      );
      //console.log(openseaData.data.assets);
      setPunkListData(openseaData.data.assets);
    };

    getMyNFTs();
  }, []);

  // listen to prefferred color of OS users
  useMediaQuery(
    {
      query: '(prefer-color-scheme: dark)',
    },
    undefined,
    (isDarkPreffered) => setColorMode(isDarkPreffered ? 'dark' : 'light')
  );
  return (
    // set condition for assigning variables to Main and PunkList only
    // after the API call is finished (returned an array of punks)
    <div className="app">
      <Header
        setColorMode={setColorMode}
        colorMode={colorMode}
        setOpen={setOpen}
      />
      <Login open={open} setOpen={setOpen} />
      {punkListData.length > 0 && (
        <>
          <Main
            selectedPunk={selectedPunk}
            punkListData={punkListData}
            colorMode={colorMode}
          />
          <Punklist
            punkListData={punkListData}
            setSelectedPunk={setSelectedPunk}
          />
        </>
      )}
    </div>
  );
}

export default App;
