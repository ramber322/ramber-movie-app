import React, { useState } from 'react';

import Header from './Header';
import MainContent from './MainContent';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const movies = [
    { title: 'Family Guy', image: require('./images/family-guy.jpg') },
    { title: 'Aladdin', image: require('./images/aladdinIMAGE.jpg') },
    { title: 'Shrek', image: require('./images/shrekIMAGE.jpg') },
    { title: 'Arcane', image: require('./images/arcaneIMAGE.jpg') },
    { title: 'Shrek 2', image: require('./images/shrek2IMAGE.jpg') },
    { title: 'Spongebob', image: require('./images/spongebobIMAGE.jpg') },
    { title: 'Shark Tale', image: require('./images/sharktaleIMAGE.jpg') },
    { title: 'Over the Hedge', image: require('./images/over-the-hedgeIMAGE.jpg') },
    { title: 'Prince of Egypt ', image: require('./images/prince-of-egyptIMAGE.jpg') },
    { title: 'How to Train Your Dragon Guy', image: require('./images/httydIMAGE.jpg') },

    { title: 'Spirit', image: require('./images/spiritIMAGE.jpg') },
    { title: 'The Road to El Dorado', image: require('./images/the-road-to-el-doradoIMAGE.jpg') },
    { title: 'Kung Fu Panda', image: require('./images/kung-fu-pandaIMAGE.jpg') },
    { title: 'Kung Fu Panda 2', image: require('./images/kung-fu-panda2IMAGE.jpg') },
    { title: 'Up', image: require('./images/upIMAGE.jpeg') },
    { title: 'The Emperors New Groove', image: require('./images/the-emperors-new-grooveIMAGE.jpg') },
    { title: 'Nemo', image: require('./images/nemoIMAGE.jpg') },
    { title: 'Bolt', image: require('./images/boltIMAGE.jpg') },
    { title: 'Howls Moving Castle', image: require('./images/howls-moving-castleIMAGE.jpg') },
    { title: 'Ponyo', image: require('./images/ponyoIMAGE.jpg') },
   
  ];
  

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Header onSearch={handleSearch} />
      <MainContent movies={movies} searchQuery={searchQuery} />
    </div>
  );
}

export default App;
