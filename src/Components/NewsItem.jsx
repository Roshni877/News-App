const NewsItem = ({title,description,src,url}) => {
    // Convert http URLs to https to avoid mixed content warnings
    const secureImageUrl = src 
      ? src.replace(/^http:\/\//i, 'https://') 
      : "https://via.placeholder.com/345x200";
    
    return (
        <div className="card m-3" style={{maxWidth:"345px"}}>
  <img src={secureImageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title || "No Title"}</h5>
    <p className="card-text">{description || "No Description"}</p>
    <a href={url} className="btn btn-primary">Read More</a>
  </div>
</div>
    )
}
export default NewsItem