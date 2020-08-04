import React from 'react';
import ReactDOM from 'react-dom';
import Feed from './components/Feed/Feed.js';

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Feed />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
