import React from 'react'
import  '../main/main.css'
function Main({title, content}) {
    const blogPosts = 
        [
            { title: "Technology", content: "Technology is the most important thing in our day to day life. Sarova Holdings Provides A space where technology interacts with humanity.",author:"linter" },
            { title: "Health", content: "A healthy community is what sarova holdings relies on, we embed technology and health to ensure a better future" ,author:"Microsoft" },
            { title: "Money", content: "We believe in the power of investment  and therefore we help our clients in managing thier wealth and investments",author:"Kali-linux" },
            { title: "Lifestyle", content: "A great lifestyle is a future for all our clients" ,author:"Ubuntu" }
        ];
    
  return (
      <>
          <div className='main'>
              <div className='content'>
                  <ul>
                      {blogPosts.map((post, index) => (
                          <li key={index}>
                              <h3>{post.title}</h3>
                              <p>{post.content}</p>
                          </li>
                      ))}
                  </ul>
          
              I</div>
          
          <div className=' sidebar-main'>
              <ul>
                  {blogPosts.map((post) => (
                      <li>
                          <h3>{post.title}</h3>
                      </li>
                      
                  ))}
              </ul>
          </div>
          <div className='sidebar-footer'>
              <ul>
                  {blogPosts.map((post) => (
                      <li>
                          <h3>{post.author}</h3>
                      </li>
                      
                  ))}
              </ul>
          </div>
         </div> 
      </>
  )
  }
export default Main
