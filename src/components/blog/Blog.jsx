import PropTypes from 'prop-types'
import { FaRegBookmark } from "react-icons/fa";


function Blog({blog,handleBookMark,handleMarkAsRead}) {
    const {cover,title,author_img,author,posted_date,reading_time,hashtags}=blog

  return (

    <div className='mb-8 space-y-3'>
        <img src={cover} alt=""  className='w-[80%] lg:w-full '/>
                                            <div className='flex flex-col md:flex-row justify-between px-1'>
                                                <div className='flex items-center gap-3'>
                                                    <img src={author_img} alt="" className='w-[50px]'/>
                                                    <div>
                                                        <h2 className='font-bold text-xl'>{author}</h2>
                                                        <h2>{posted_date}</h2>
                                                    </div>
                                                </div>

                                                <div className='flex items-center gap-2'>
                                                    <h3>{reading_time} min read</h3>
                                                    <button onClick={()=>handleBookMark(blog)}><FaRegBookmark /></button>
                                                </div>
                                           </div>
         <h3 className='md:text-2xl font-bold text-balance max-w-[80%]'>{title}</h3>
         {
            hashtags.map((hash,index)=><span className='pr-2' key={index}><a href="">#{hash}</a></span>)
         }
<button className='text-indigo-500 border-b block' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
    </div>
  )
}

Blog.propTypes = {
    Blog:PropTypes.func
    // props:PropTypes.object,
}

export default Blog
