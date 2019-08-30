import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends React.Component {
  render() {
    return (
      <div className="ui container grid">
        <div className="ui row">
          <div className="six wide column">
            <SongList />
          </div>
          <div className="ten wide column">
            <SongDetail />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
