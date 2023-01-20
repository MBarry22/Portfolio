import React from 'react'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from './About'
import defaultpfp from '../images/defaultpfp.png'

const  HomePage = () =>{
    



    return(

      <div class="container">
      <div className="head-preview">
        <div className="head-float-right">
          <h2 class="title">
            <span class="title-word title-letters-1">Mas</span>
            <span class="title-word title-letters-2">on</span>
            <span class="title-word title-letters-3"> Por</span>
            <span class="title-word title-letters-4">ter</span>
          </h2>
          <img alt="Snapshot of Mason Porter" src={defaultpfp}></img>
          
        </div>
        <div className="head-float-left">
            <About></About>
          </div>
      </div>
      <div className="my-projects">
      <Projects></Projects>
      </div>
      <div className="Footer">
      
      </div>
      <div className="About">
        
      </div>
    </div>
    
      
      );
      
}
export default HomePage;