import React from 'react'

const News = ({title, description, src, url}) => {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{maxWidth:"345px"}}>
      <img src={src} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">{title?title.slice(0,50):"News"}</h5>
        <p className="card-text">{description? description.slice(0,90): "Apple has apologized and admitted it “missed the mark” with its latest iPad Pro advertisement"}</p>
        <a href={url} className="btn btn-primary">Read more</a>
      </div>
    </div>

  )
}

export default News
