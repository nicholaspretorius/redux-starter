import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    const { song } = this.props;

    if (!song) {
      return <></>;
    } else {
      return (
        <div className="ui segment">
          <h4>{song.name}</h4>
          <p>{song.duration}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return { song: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
