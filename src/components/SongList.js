import React from "react";

class SongList extends React.Component {
  onClick = e => {
    console.log(e);
    this.props.onSelectSong();
  };
  render() {
    const songList = this.props.songs.map(song => {
      return (
        <div className="item" key={song.id}>
          <div className="content">
            <p>Title: {song.name}</p>
            <p>Duration: {(song.duration / 60).toFixed(2)}</p>
            <button onClick={this.onClick}>Select</button>
          </div>
        </div>
      );
    });

    return <div className="ui relaxed divided list">{songList}</div>;
  }
}

export default SongList;
