import { useEffect, useState } from 'react';

export const App = () => {

  const [quoteData, setQuoteData] = useState({
    author: '',
    content: ''
  })
  const { author, content } = quoteData;

  useEffect(() => {
    getQuote()
  }, [])
  
  const getQuote = async() => {
    const {content, author} = await (await fetch('https://api.quotable.io/random')).json()
    setQuoteData({
      content,
      author
    })
  }


  // Colors

  const colors = ['#657ED4', '#FF331F', '#3626A7', '#0FA3B1', '#FBAF00', '#FFD639', '#A13D63', '#F7B32B', '#D72638']
  const randomIndex = Math.floor(Math.random() * colors.length)


  const TweetLink = `https://twitter.com/intent/tweet?text="${content}"  - ${author} &hashtags=quote,freeCodeCamp`


  return (
    <div id="container" style={{ backgroundColor: colors[randomIndex] }} className='transition'>

      <section id="quote-box" className='transition'>

        <p id="text" className='transition'>{content}</p>
        <p id="author" className='transition'>- {author}</p>

        <footer>

          <a
            href={TweetLink}
            id="tweet-quote"
            className="button transition"
            style={{ backgroundColor: colors[randomIndex] }}
            target='_blank'
          >
            Tweet
          </a>

          <button
            id="new-quote"
            className="button transition"
            style={{ backgroundColor: colors[randomIndex] }}
            onClick={getQuote}
          >
            New quote
          </button>

        </footer>

      </section>
    </div>
  )
}
