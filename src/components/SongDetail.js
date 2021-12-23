import React from 'react';
import { connect } from 'react-redux';
// Steps
//1.Create components as you usually do
//2. Then select specific components inside of our application that need to receive some information or need to make changes to our state
//3. If we need to make changes or receive information, then import the { connect } helper
//4. Then at the bottom of the file, define a mapStateToProps function
//5. pass that function off to connect()
// 6. Put the function that we care about as a second function call in connect. The first argument is the mapsToStateFunction
const SongDetail = ({ song }) => {
    // this.props.title let's destructure it to { song }
    // console.log(props)
    if(!song) {
      return  <div>Select a Song</div>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title} 
            </p>
            <p>
                Duration: {song.duration}            
            </p>
        </div>
    ) 
}

const mapStateToProps = (state) => {
    //you can customize the key here so song can be called whatever you want 
    return { song: state.selectedSong }
};


export default connect(mapStateToProps)(SongDetail) ;