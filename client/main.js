import React, { Component } from 'react';
import { render } from 'react-dom';
import ImageList from './components/imageList';
import axios from 'axios';

// React Class Based Application

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { images: [] };
  }

  componentWillMount() {
    // Load Axios data, from the fetch request
    axios.get('https://api.imgur.com/3/gallery/hot/viral/0')
         .then(response => this.setState({
         images: response.data.data
       }));
  }
  render() {
    return(
      <div>
        <ImageList images={this.state.images} />
      </div>
    );
  }
};

Meteor.startup(() => {
  render(<App/>, document.getElementById("root"));
});
