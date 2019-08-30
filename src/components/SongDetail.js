import React from "react";

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

export default SongDetail;
