import React from 'react';
import ImageGrid from './components/ImageGrid'
import Header from './components/Header'

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <ImageGrid></ImageGrid>
    </React.Fragment>
  );
}

export default App;
