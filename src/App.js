import React, { Component } from 'react'
import axios from 'axios'
import './index.css'
import { BrowserRouter , Route , Switch } from 'react-router-dom'



//Import Components 
import apiKey from './components/Config'
import Nav from './components/Nav'
import Search from './components/Search'
import Gallery from './components/Gallery'
import NotFound from './components/NotFound'
import Loading from './components/Loading'


export class App extends Component {

  //Constructor of states
  constructor (){
    super()
    this.state = {
      photos : [],
      button1 : [],
      button2 : [],
      button3 : [],
      isLoading : true,
      error : null
    }
  }

  //Functions
  //Fetch data with Axios
  fetchPhotos = (query = 'sun') => {
    let URL = `https://www.flickr.com/services/rest/?method=flickr.photos.search&text=${query}&per_page=24&api_key=${apiKey}&sort=relevance&safe_search=1&format=json&nojsoncallback=1` 
    this.setState({ isLoading: true })

    axios.get(URL)
    .then(response => {
      // this.setState({
      //   photos : results.data.photos.photo,
      //   isLoading : false
      // })
      if(query === 'sun'){
        this.setState({
          button1 : response.data.photos.photo, 
          isLoading : false
        })
      } 
      else if(query === 'stars') {
        this.setState({
          button2 : response.data.photos.photo,
          isLoading : false
        })
      }
      else if(query === 'moon') {
        this.setState({
          button3 : response.data.photos.photo,
          isLoading : false
        })
      }
      else {
        this.setState({
          photos : response.data.photos.photo,
          isLoading : false
        })
      }
    })
    .catch(error => {
      console.log(error)
      this.setState({
        isLoading : true,
        error : true
      })
    })

    console.log(query)
  }//End of fetchPhotos()
    
  //Lifecycle hooks
  componentWillUnmount() {
    clearInterval(this.state.photos);
    clearInterval(this.state.button1);
    clearInterval(this.state.button2);
    clearInterval(this.state.button3);
  }//

  componentDidMount(){
    this.fetchPhotos("sun")
    this.fetchPhotos("stars")
    this.fetchPhotos("moon")
  }//

  


  render() {
    return (
      <BrowserRouter>
        <div className="stars"></div>
        <div class="twinkling"></div>
        <div className="container">
        <h1>Search the universe below...</h1>
          <Search onSearch={this.fetchPhotos}/>
          <Nav/>
          {
            (this.state.isLoading)
            ? <Loading/>
            :
            <Switch>
              <Route exact path="/"
              render={ () => <Gallery title={'sun'} value={this.state.button1}/> } 
              />
              <Route path="/sun"
              render={ () => <Gallery title={'sun'}  value={this.state.button1}/> } 
              />
              <Route path="/stars"
              render={ () => <Gallery title={'stars'} value={this.state.button2}/> } 
              />
              <Route path="/moon"
              render={ () => <Gallery title={'moon'} value={this.state.button3} /> } 
              />
              <Route path="/search/:query"
              render={ () => (
                <div>
                {
                  this.state.loading ? <p> Loading ...</p> : this.state.photos ? <Gallery title={this.query} value={this.state.photos}/> : <NotFound /> 
                }
                </div>
              )} 
              />
            </Switch>
          }
        </div> 
      </BrowserRouter>
      
        
      
    )}//
  
}

export default App

     // console.log(response.data.photos.photo)
      // console.log(this.state.query)
      //Check query and render accordingly
      // if(query === 'sun'){
      //   this.setState({
      //     button1 : response.data.photos.photo, 
      //     isLoading : false
      //   })
      // } 
      // else if(query === 'stars') {
      //   this.setState({
      //     button2 : response.data.photos.photo,
      //     isLoading : false
      //   })
      // }
      // else if(this.query === 'moon') {
      //   this.setState({
      //     button3 : response.data.photos.photo,
      //     isLoading : false
      //   })
      // }
      // else {
      //   this.setState({
      //     search : response.data.photos.photo,
      //     isLoading : false
      //   })
      // }


       

