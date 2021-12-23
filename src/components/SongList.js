import React,  { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'
//Get data from the Redux store into a component
//1. we are alaways going to import connect at the top
//2. we are alaways going to call connect and then pass in our component as the second function call
//3. we are alaways going to define mapStateToProps
//4. Map state to props is always going to get a first argument of state
//5. We are always going to return an object that is going to show up as props inside of our component
class SongList extends Component {

    renderList() {
        return this.props.songs.map((song) => {
            //the inner return statement is returning some amount of JSX for the mapping function
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                        className="ui button primary"
                        onClick={() => this.props.selectSong(song)}
                        >
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }


    render() {
        // this.props === { songs: state.songs }
        // console.log(this.props)
        // return <div>SongList</div>
        return <div className="ui divided list">{this.renderList()}</div>
    }
}
//please see for explanation https://drive.google.com/drive/u/0/folders/102Kj8gi7N_kXkyqx-ktqtu1I9QcRBgmc
//we are going to tell the connect component that we want to get a list of things, songs, out of our Redux store from the Provider

//take the State object, essentially all of the data inside the Redux Store and run some calculation on it or some computation that's going to cause that data to show up as props inside of our component VVVVVVV see below
//We get the information from the Redux Store by defining the mapStateToProps function and passing it to the connect function
const mapSateToProps = (state) => {
    //state is going to be the entire list of songs from the SongList reducer
    //and our currentlySelected song from the selectedSongReducer
    // console.log(state);
    // return state;
    //this is going to show up as props inside of our component
    // console.log(state);
    return { songs: state.songs }

}


//please see for explanation https://drive.google.com/drive/u/0/folders/102Kj8gi7N_kXkyqx-ktqtu1I9QcRBgmc
//For dispatch the connect function does a special set of operations on the object. It looks at all the functions inside the object and essentially wraps them all inside another JavaScript function
//When we call the new JavaScript function the connect function is going to naturally call our ActionCreator It's going to take the action that gets returned and automatically call dispatch function for us
//Anytime you call an action creator from a component, you are always going to have to call if from the connect function as opposed to aribitarily calling it in renderList()
export default connect(mapSateToProps, {
    // selectSong: selectSong
    selectSong
})(SongList);
