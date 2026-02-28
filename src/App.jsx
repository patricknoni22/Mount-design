import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Entry from './mount'
import Header from './Header'
import data from './data'





function App() {
  
const entryElements = data.map( (item)=>{
 return <Entry  
   key={item.id}
  entry={item}
  //  imgsrc={item.img.src}
  //  imgalt={item.img.alt}
  


  //  country={item.country}

  //  map={item.googleMapsLink}

  //  title={item.title}

  //  date={item.dates}


  //  text={item.text}


 

           />
})

  
  return (
    <>
    
      <Header />
      {entryElements}
       {/* <Entry
        img={ 
          {
            src:"./src/assets/mountain.jpg", 
          alt:"Mount Fuji"
          }
    }


        country="Japan"

        map="View on google maps"

        title="Mount Fuji"

        date={"12 Jan, 2021 - 24 Jan, 2021"}


        text="Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists."






      /> */}


 

    </>
  )
}


export default App