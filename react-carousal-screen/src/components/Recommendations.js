import '../stylesheets/Recommendations.css';
import { Component } from 'react';
import ImageSlider from './ImageSlider';

//The main App function component
class Recommendations extends Component {

  constructor(props) {
    super(props);

    this.state = {
      appetizerImages : [],
      sweetImages: [],
      softDrinkImages: []
    };
  }

  //Initialize the data by making GET requests to the Express server
  componentDidMount() {
    fetch('http://localhost:4000/appetizerImages')
        .then(response => response.json())
        .then(response => {
            this.setState({ appetizerImages : response });
            this.state.appetizerImages.forEach((picture) => {
                let img = new Image();
                img.src = picture.image;
            })
        });
    
      fetch('http://localhost:4000/sweetImages')
        .then(response => response.json())
        .then(response => this.setState({ sweetImages : response }));
    
      fetch('http://localhost:4000/softDrinkImages')
        .then(response => response.json())
        .then(response => this.setState({ softDrinkImages : response }));
  }

  render() {
    return (
        <div>
          <div className='category-heading-container'>
            <h1 className='category-heading'>Appetizers</h1>
          </div>
          <div>
            <ImageSlider className='slider-container' slides={ this.state.appetizerImages } />
          </div>
          <h1 className='category-heading'>Sweets</h1>
          <div>
            <ImageSlider className='slider-container' slides={ this.state.sweetImages } />
          </div>
          <h1 className='category-heading'>Soft Drinks</h1>
          <div>
            <ImageSlider className='slider-container' slides={ this.state.softDrinkImages } />
          </div>
        </div>
    );
  }

}

export default Recommendations;
