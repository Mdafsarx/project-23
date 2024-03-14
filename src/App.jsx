import { useState } from 'react'
import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMark from './components/bookMark/BookMark'
import Header from './components/header/Header'

function App() {

  // book Mark store
  const[bookMark,setBookMark]=useState([])

const handleBookMark=(blog)=>{
  setBookMark([...bookMark,blog])
}
/////


// reading time useState
const [read,setRead]=useState(0)

const handleMarkAsRead=function(readingTime){
  setRead(read+readingTime)
  const clearBookMark=bookMark.filter((mark)=>mark.reading_time!==readingTime)
  setBookMark(clearBookMark)
}


  return (
    <body>
<Header></Header>

<main className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10'>
  <Blogs handleBookMark={handleBookMark} handleMarkAsRead={handleMarkAsRead}/>
  <BookMark bookMark={bookMark} read={read}/>
</main>

    </body>
  )
}

export default App
