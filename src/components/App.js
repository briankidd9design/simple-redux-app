import React from 'react';
//we use curly braces because we are importing a named export from the file and not a default export
// import { selectSong } from '../actions';
import SongList from './SongList';
import SongDetail from './SongDetail';


const App = () => {
    return ( 
        <div className="ui container grid">
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
}

export default App;