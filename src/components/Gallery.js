import React from 'react';
import GalleryItem from './GalleryItem';
import NotFound from './NotFound'

const Gallery = ({value}) => {
  //Generate image url with the provide template url
  let results = value;
  let display;
  let obj;
  let objArr = [];

  //Iterate through the data
  results.map( function (result, i ) {
    // generate an array of URL for farming image that match the searched query 
    let jpg = `https://farm${result.farm}.staticflickr.com/${result.server}/${result.id}_${result.secret}.jpg`
    let imgName = `${result.title}`
    let key = i
    
    obj = { jpg , imgName , key}
    objArr.push(obj)
    return objArr
    
  });// end of ForEach

  

  if (objArr.length > 0 ) {
    //Iterate through farmed data
    display = objArr.map((objItem, i) => { 
      return <GalleryItem obj={objItem} key={objItem.key} />
    });//end of map
  } 
  else {
    display = <NotFound/>
  }



  
  return (
      
      <div className="photo-container">
        <ul>
          {display}
        </ul>
      </div>
    );
}//end of component 

export default Gallery;
