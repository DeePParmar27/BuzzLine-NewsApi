import React, { useState} from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import propTypes from 'prop-types'
import { useEffect } from 'react';
import { useLayoutEffect } from 'react';


const News=(props)=> {
  const[articles,setArticle]=useState([])
  const[loading,setLoading]=useState(true)
  const[page,setPage]=useState(1)
  const[totalResults,setTotalResults]=useState(0)
  //document.title=`${capitalizeFirstLetter(props.category)}-BuzzLine`


  const capitalizeFirstLetter=(string)=> {
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  


//life-cycle method-run after render 



const updatepage=async()=> 
{

  console.log('cmd');
 props.setProgress(20)
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
setLoading(true)
  let data= await fetch(url);
 props.setProgress(50)
  let parsedData=await data.json();
  console.log(parsedData)
 props.setProgress(100)
 setArticle(parsedData.articles);
 setTotalResults(parsedData.totalResults);
 setLoading(false)
  

}

useEffect(()=>{
  document.title=`${capitalizeFirstLetter(props.category)}-BuzzLine`
  updatepage();
},[])

const componentDidMount=async()=>
{
  console.log('cmd');
 props.setProgress(20)
  let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pagesize=${props.pageSize}`;
setLoading(true)
  let data= await fetch(url);
 props.setProgress(50)
  let parsedData=await data.json();
  console.log(parsedData)
 props.setProgress(100)
 setArticle(parsedData.articles);
 setTotalResults(parsedData.totalResults);
 setLoading(false)
  


}

const handlePrevClick=async()=>{
  // console.log("previous")

  // let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page - 1}&pagesize=${props.pageSize}`;
  // this.setState({loading:true})
  // let data= await fetch(url);
  // let parsedData=await data.json();
  // console.log(parsedData)
  // this.setState(
  //   {
  //     page:this.state.page - 1,
  //     articles:parsedData.articles,
  //     loading:false



  //   }
  // )
 setPage(page-1)
 updatepage()
}


const handleNextClick=async()=>{
//   console.log("Next");
//   if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/20))) //if not ......of
//   {
   
//   let url=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${this.state.page + 1}&pagesize=${props.pageSize}`;
//   this.setState({loading:true})
//   let data= await fetch(url);
 
//   let parsedData=await data.json()
//   console.log(parsedData)
//   this.setState(
//     { 
//       page:this.state.page + 1,
//       articles:parsedData.articles,
//       loading:false

//     }
//   )
// }
setPage(page+1)
updatepage()
}





    return (

       
      
       <div className="container ">

        <h2 className='text-center' style={{marginTop:'90px'}}>BuzzLine - Top Headlines on {capitalizeFirstLetter(props.category)}.</h2>
        {loading && <Spinner/>} 
       
        <div className="row">
              {!loading &&  articles.map((element)=>{
          return  <div className="column col-md-4" key={element.url}>
                    <NewsItem   title={element.title?element.title:""} source={element.source.name} discription={element.description?element.description:""} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt}/>
        </div>
         
        })}

        <div className="container d-flex justify-content-between my-3 ">
        <button type="button" disabled={page<=1} onClick={handlePrevClick} className="btn btn-dark">&larr; Previous</button>
        <button type="button" disabled={page + 1 > Math.ceil(totalResults/20)} onClick={handleNextClick} className="btn btn-dark">Next &rarr;</button>
        </div>







        </div>
        
      </div>
    
    )
  }


News.defaultProps=
{
  country:"in",
  pageSize:6,
  category:'general',
}

News.propTypes=
{
  country:propTypes.string,
  pageSize:propTypes.number,
  category:propTypes.string,
}


export default News
