import React from "react";
import { connect } from "react-redux";

class SongDetail extends React.Component {
  render() {
    const { selectedSong } = this.props;

    if (!selectedSong) {
      return <></>;
    } else {
      return (
        <div className="ui segment">
          <h4>{selectedSong.name}</h4>
          <p>{selectedSong.duration}</p>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  console.log(state);
  return { selectedSong: state.selectedSong };
};

export default connect(mapStateToProps)(SongDetail);
