import React, { Component } from 'react';
import './App.css';

// This URL can be combined with an photo id to fetch an photo.
const PHOTO_URL = "https://picsum.photos/200?photo=";   // concat with photo.id at end for source
// This URL can be used to get an array of objects that contain information
// about various photos.
const PHOTO_LIST_URL = "https://picsum.photos/list";
// write a fetch request for the state
// componentDidMount is auto run when comp is added to the page. standard practice
// to put all of our fetch requests 

class App extends Component {
  // 1. Declare a state object that will be used to track an array of photos
  state = {gallery : []   //don't need a constructor b/c no methods yet for this constructor
  }                                 // not going to manipulate the data.

  // 2. Declare a life cycle method
  // This life cycle method should:
  // - will be called after the component is initially rendered
  // - will fetch an array of photos
  // - will add that array of photos to state once received

  componentDidMount(){
    fetch (PHOTO_LIST_URL)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      //grab each object and push into our state
      this.setState({gallery: data})
    })
  }
  // fetch request here 
  // get all data after fetch finished 
  // in final .then add this.setState({ overwrite gallery with data from fetch})
  // always use this to update the state

  // componentWillUnmount(){
  // }

  render() {
    const { gallery = [] } = this.state;
    return (
      <React.Fragment>
        <header>
          <h1>Gallery</h1>
          <p>
            Start by reading App.jsx and completing the numbered steps.
            Afterward, delete this paragraph. Then, open up App.css and
            complete the instructions there.
          </p>
        </header>
        <div className="collage">
            {/* We use map here because Array.prototype.map is an expression,
              * and for loops are not. You'll learn more about this soon! 
              */}
            {gallery.map( photo => 
                <img alt={photo.filename}/* 3. Fill me in with the photo's filename */ 
                     key={photo.id}/* 4. Fill me in with the photo's id */ 
                     src={PHOTO_URL + photo.filename}    // f/* 5. Fill me in with the photo's URL for one photo. concat photo.id
                />
            )}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
//integrating with another service to get the data.
