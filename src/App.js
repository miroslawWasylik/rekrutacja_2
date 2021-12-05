import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

state = {
  a: '',
  c_back: '',
  b: '',
  b_back: '',
  c: '',
  data: ['b'],
  responseJson: null,
}

poprzedniStan() {
  return(
    this.setState({
      c: this.state.c_back,
      b: this.state.b_back,
    }
  )
  )
}
  
nastepnyStan() {
    return fetch('https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json')
    .then((response) => response.json())
    .then((responseJson) => {
    
    this.setState({data: responseJson});
    let min = Math.ceil(1);
    let max = Math.floor(101);
    let liczba = Math.floor((Math.random() * (max - min + 1)) + min);
    const objectArray = Object.entries(this.state.data);
    let a = objectArray[liczba];

    this.setState((prevState) => {
      return {
        c: a[1].author,
        b: a[1].quote,
        c_back: prevState.c,
        b_back: prevState.b,
      }
    });

      return responseJson;
    }) 
    .catch((error) => {
      console.error(error);
    });  
  }

  maps() {
    return(
      <figure>
        <table>
          <tbody>
            <tr>
             <td>
                {this.state.c}:
              </td>
              <td>
                {this.state.b}
              </td>
            </tr>
          </tbody>
        </table>
      </figure>
    )
  }

  
  Apps() {
  return (
    <div className="Apps">
      <header className="Apps-header">
        <img src={logo} className="Apps-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="Apps-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => this.getMoviesFromApiAsync}>click</button>
              {this.maps()}
      </header>
    </div>
  )}
  
  render() {
    return (
      <div>
        <button onClick={() => this.poprzedniStan()}>Poprzedni cytat</button>
        <button onClick={() => this.nastepnyStan()}>Nestępny cytat</button>
        {this.maps()}
      </div>
    )
  };
}
export default App;
