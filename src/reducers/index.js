import { combineReducers } from "redux";

const songsReducer = () => {
  return [
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
};

const selectSongReducer = (selectedSong = null, action) => {
  if (action.type === "SELECT_SONG") {
    return action.payload;
  }

  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectSongReducer
});
