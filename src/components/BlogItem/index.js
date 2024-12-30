import './index.css'

function BlogItem({title, publishedDate, description}) {
  return (
    <li className="blog-item-container">
      <div className="blog-item">
        <h1 className="blog-item-heading">{title}</h1>
        <p className="blog-item-description">{description}</p>
      </div>
      <div className="blog-item-date">
        <p>{publishedDate}</p>
      </div>
    </li>
  )
}

export default BlogItem
