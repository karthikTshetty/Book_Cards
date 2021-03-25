import React, { Component } from 'react'

import Searcharea from './Searcharea';
import request from 'superagent';
import BookList from './BookList';


 class Books extends Component {
  constructor(props) {
      super(props)
  
      this.state = {
           books:[],
           searchField:'',
           sort:''
      }
  }
  
  
  searchBook=(e)=>{
      e.preventDefault();
      request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({q:this.state.searchField})
      .then((data)=>{
          console.log(data);
          const cleanData = this.cleanData(data)
        this.setState({books:cleanData  })
      })
      

  }





  handleSearch=(e)=>{
      this.setState({
        searchField:e.target.value
      })
  }

  handleSort=(e)=>{
      this.setState({ sort: e.target.value})
  }

  cleanData=(data)=>{
      const cleanData=data.body.items.map((book)=>{
          if(book.volumeInfo .hasOwnProperty('publishedDate')===false){
              book.volumeInfo['publishedDate']='0000';
      }
       else if(book.volumeInfo.hasOwnProperty('imageLinks')===false){
           book.volumeInfo['imageLinks']={ thumbnail: 'https //vignette.wikia.nocookie.net/pandorahearts/images/a/ad/Not_available.jpg/revision/latest?c' }
       }
       return book;
  })
  return cleanData;
}
    render() {
        const sortedBooks=this.state.books.sort((a,b)=>{
            if(this.state.sort==='Newest'){
                return parseInt(b.volumeInfo.publishedDate.substring(0,4)) - parseInt(a.volumeInfo.publishedDate.substring(0,4))
            }
           else if(this.state.sort==='Oldest'){
                return parseInt(a.volumeInfo.publishedDate.substring(0,4)) - parseInt(b.volumeInfo.publishedDate.substring(0,4))
            }
        })
        return ( 
            <>
            <div>
                <Searcharea  searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                 
            </div>
             <BookList books={sortedBooks}/>
       </>
        );
    }
}

export default Books
