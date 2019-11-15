import React from 'react';
import './App.css';
import VideoCard from "./Card";
import {Helmet} from 'react-helmet';

const maxRange = 120


class App extends React.Component{

  constructor(props) {
    super(props);
    this.state={
      loading: false,
    };
  }

  componentDidMount() {
    return fetch("http://localhost:8080/api/popular")
        .then((response) => response.json())
        .then((responseJson) => {
          this.setState({
              loading:true,
              data:responseJson.items,
          });
          const data_copy = this.state.data.slice();
          var i = 0
          for (var item in data_copy){
              var str = data_copy[i].snippet.description;
              if (str.length > maxRange){
                  str = str.substr(0,120) + "..."
                  data_copy[i].snippet.description = str
                  this.setState({
                      data: data_copy
                  })
              }
              i += 1
          }
            console.log(responseJson)
    })
        .catch((error) => {
          console.log(error)
        })
  }


  render() {
      if(this.state.loading){
          const cards = this.state.data.map((item, index) => {
              return (
                  <div key={index} className="card">
                      <VideoCard image={item.snippet.thumbnails.medium.url} title={item.snippet.title} sentence={item.snippet.description}/>
                  </div>
              );
          });
          return(
                  <div className="App">
                      <Helmet>
                          <style>{'body { background-color: gray; }'}</style>
                      </Helmet>
                      <h1>Youtube App</h1>
                      <div style={{display:"flex"}}>
                          <div style={{width:100}}>
                              <p>ホーム</p>
                          </div>
                          <div style={{flex:1}}>
                              {cards}
                          </div>
                      </div>
                  </div>
              )
      }else {
          return(
                  <div className="App">
                      <h1>Youtube App</h1>
                      <p>Loading...</p>
                  </div>
              )

      }
  }
}

export default App;
