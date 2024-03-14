import PropTypes from 'prop-types'
import { useEffect } from 'react'
import { useState } from 'react'
import Blog from '../blog/Blog'

function Blogs({handleBookMark,handleMarkAsRead}) {

const [blog,setBlogs]=useState([])
useEffect(()=>{

fetch('data.json')
.then(res=>res.json())
.then(data=>setBlogs(data))

},[])


  return (
    <div className=' md:w-[65%] '>

{
blog.map((blog,index)=><Blog key={index} blog={blog} handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}/>)
}

    </div>
  )
}

Blogs.propTypes = {

Blogs:PropTypes.func

}

export default Blogs
