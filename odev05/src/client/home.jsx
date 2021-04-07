import React, {Component} from "react";
import {Link} from "react-router-dom";

class Home extends Component{
    render(){
        return(
            <div>
                <h2>Kart Oyunu</h2>
                <p>Bu oyunda 3 kapalı kart içindeki kediyi bulman gerekmektedir. ilk tercihte Kedi kartını bulamaz isen 2.seçim hakkı tanınacaktır.</p>
                <div className="action">
                    <Link className="play" to={"/game"}>Oyna</Link>
                </div>
            </div>
        )
    }
}
export default Home;