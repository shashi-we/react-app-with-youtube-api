import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar'

const API_KEY = "AIzaSyDCYUlqeGRf_J4DFfKoqc_0WR1BP0Qqw8c"

// create a component. This component should peoduce some HTML
const App = () => {
  return (
      <div>
        <SearchBar />
      </div>
    );
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render (<App/>, document.querySelector('.container'));
