import React from "react";
import SongList from "./SongList";
import SongDetail from "./SongDetail";

class App extends React.Component {
  state = {
    songs: []
  };

  componentDidMount() {
    const songs = [
      {
        id: 1,
        name: "Song 1",
        duration: 185
      },
      {
        id: 2,
        name: "Song 2",
        duration: 213
      },
      {
        id: 3,
        name: "Song 3",
        duration: 162
      },
      {
        id: 4,
        name: "Song 4",
        duration: 227
      }
    ];

    this.setState({ songs: songs });
  }

  onSelectSong() {
    console.log("Song: ");
  }

  render() {
    return (
      <div className="ui column stackable grid container">
        <div className="four wide column">
          <SongList songs={this.state.songs} onSelectSong={this.onSelectSong} />
        </div>
        <div className="twelve wide column">
          <SongDetail />
        </div>
      </div>
    );
  }
}

export default App;
