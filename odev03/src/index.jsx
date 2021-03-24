import React from 'react';
import ReactDOM from 'react-dom';
import {random_image, random_image_2, random_image_3} from './functions';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
      
        }
    }
    render() {
        return (
            <div>
            <h1>Find The Cat!</h1>
            <p className="text-explain">You have two choices to find the cat.</p>
            <div className="images_area">
            <div className="img_div" id="img1" onClick={this.random_image}></div>
            <div className="img_div" id="img2" onClick={this.random_image_2}></div>
            <div className="img_div" id="img3" onClick={this.random_image_3}></div>
            </div>
            <div className="message">
            <p className="message_p" id="msg">You have to click on the cards to find the cat.</p>
            </div>
        </div>
       );
    }
}

ReactDOM.render(<App></App>, document.getElementById("root"));