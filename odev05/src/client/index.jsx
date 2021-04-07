import React from "react";
import  ReactDOM from "react-dom";
import { BrowserRouter, HashRouter, Route, Switch } from "react-router-dom";
import {Game} from "./game";
import Home from "./home";

const notFound = () =>{
    return(
        <div>
            <h2>Sayfa bulunamadi: 404</h2>
            <p>Hata: Aradiginiz sayfaya su anda ulasilamiyor. Lutfen daha sonra tekrar deneyin...</p>
        </div>
    )
}

class App extends React.Component{

   render() {
       return(
          <HashRouter>
          <Switch>
            <Route exact path='/game' component={Game}/>
            <Route exact path='/' component={Home} />
            <Route component={notFound} />
          </Switch>
          </HashRouter>
       )
   }
}
ReactDOM.render(<App />, document.getElementById("root"));

