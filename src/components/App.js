import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";
import { selectSong } from "./../actions";

class App extends React.Component {
  componentDidMount() {}

  onSelectSong = song => {
    this.setState({ selectedSong: song });
  };

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
