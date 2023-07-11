import React from 'react'

const NewsItem=(props)=> {


    let{title,discription,imageUrl,newsUrl,author,date,source}=props
    return (
        <div>
        <div className="card my-3" style={{width: "18rem",display:'flex' , border:'2px solid black'}} >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
            <h5 className="card-title">{title}<span class="badge rounded-pill text-bg-primary">{source}</span></h5>
            <p className="card-text">{discription}</p>
            <p className="card-text"><small className="text-body-secondary"> By {author} - {date}</small></p>
           

 
            <a href={newsUrl} target='_blank' rel="noreferrer" className="btn  btn-sm btn-dark">ReadMore</a>
        </div>
        </div>
    </div>
    )
  }


export default NewsItem
