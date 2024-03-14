import './App.css'
import Blogs from './components/blogs/Blogs'
import BookMark from './components/bookMark/BookMark'
import Header from './components/header/Header'

function App() {

  return (
    <body>
<Header></Header>

<main className='max-w-6xl mx-auto flex flex-col-reverse md:flex-row gap-10'>
  <Blogs/>
  <BookMark/>
</main>

    </body>
  )
}

export default App
