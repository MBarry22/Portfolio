import React from 'react'
import Projects from '../components/Projects'

const  HomePage = () =>{
    



    return(

      <div class="container">
      <h2 class="title">
        <span class="title-word title-letters-1">Mas</span>
        <span class="title-word title-letters-2">on</span>
        <span class="title-word title-letters-3"> Por</span>
        <span class="title-word title-letters-4">ter</span>
      </h2>
      <div className="my-projects">
      <Projects></Projects>
      </div>
    </div>
      
      );
      
}
export default HomePage;