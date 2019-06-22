import React from 'react'

function GalleryItem({obj}) {

    return(
        <li><img src={obj.jpg} alt={obj.imgName}/></li>    
    )

}

export default GalleryItem
