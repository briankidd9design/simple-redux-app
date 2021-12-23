//Look at the documentation from a library to see if you need to import using curly braces
import { combineReducers } from 'redux';

//This is a static array
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:30' },
        { title: 'All Star', duration: '3:15' },
        { title: 'I Want it That Way', duration: '3:33' }
    ]
}

const selectedSongReducer = (selectedSong=null, action) => {
//We are going to look at the action object and inspect its type
//If it's type is SONG_SELECTED then we are going to return its payload property
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
//If that's not the case then return whatever the currently selected song is
    return selectedSong;
}
//the keys of this object are going to be the keys that show up in the state object

export default combineReducers({
    //by export default any other file inside the project can get access to the combined set of reducers
    songs: songsReducer,
    selectedSong: selectedSongReducer

})