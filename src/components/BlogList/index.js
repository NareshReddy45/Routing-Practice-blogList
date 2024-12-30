// import React from 'react';
import BlogItem from '../BlogItem'
import './index.css'

function BlogList({blogsList}) {
  return (
    <ul>
      {blogsList.map((blog, index) => (
        <BlogItem
          key={blog.id || index}
          title={blog.title}
          publishedDate={blog.publishedDate}
          description={blog.description}
        />
      ))}
    </ul>
  )
}

export default BlogList
