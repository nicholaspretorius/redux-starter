import React from "react";
import { connect } from "react-redux";
import { selectSong } from "./../actions";

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map(song => {
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
                this.props.selectSong(song);
              }}
            >
              Select
            </button>
          </div>
        </div>
      );
    });
  }

  render() {
    const songList = this.renderList();
    return <div className="ui relaxed divided list">{songList}</div>;
  }
}

const mapStateToProps = state => {
  console.log("SongList: ", state);
  return { songs: state.songs };
};

export default connect(
  mapStateToProps,
  { selectSong }
)(SongList);
