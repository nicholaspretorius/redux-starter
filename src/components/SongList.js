import React from "react";
import { connect } from "react-redux";

class SongList extends React.Component {
  render() {
    const songList = this.props.songs.map(song => {
      return (
        <div className="item" key={song.id}>
          <div className="left floated content">
            <p>
              Title: {song.name}
              <br />
              Duration: {(song.duration / 60).toFixed(2)}
            </p>
          </div>
          <div className="right floated content">
            <button
              className="ui button primary"
              onClick={() => {
                console.log(song);
              }}
            >
              Select
            </button>
          </div>
        </div>
      );
    });

    return <div className="ui relaxed divided list">{songList}</div>;
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { songs: state.songs };
};

export default connect(mapStateToProps)(SongList);
