import React from 'react'
import Projects from '../components/Projects'
import Footer from '../components/Footer'
import About from './About'
import defaultpfp from '../images/defaultpfp.png'
import github_logo from '../images/github_logo.png'
import instagram_logo from '../images/instagram_logo.png'
import discord_logo from '../images/discord_logo.png'
import linkedin_logo from '../images/linkedin_logo.png'

const  HomePage = () =>{
    



    return(

      <div class="container">
      <div className="head-preview">
      <div className="head-float-left">
          <About></About>
        </div>
        
        <div className="head-float-right">
          <h2 class="title">
            <span class="title-word title-letters-1">Mas</span>
            <span class="title-word title-letters-2">on</span>
            <span class="title-word title-letters-3"> Por</span>
            <span class="title-word title-letters-4">ter</span>
          </h2>
          <img id="snapshot" alt="Snapshot of Mason Porter" src={defaultpfp}></img>
          <br></br>
          <div className="socials">
            <p>Socials</p>
            <a target="_blank" href='https://github.com/MBarry22'><img src={github_logo} alt="Github Logo"></img></a>
            <a target="_blank" href='https://www.linkedin.com/in/mason-porter-b3561b1b5/'><img src={linkedin_logo} alt="Linkedin Logo" ></img></a>
            <a target="_blank" href='https://www.instagram.com/_masonporter_/?hl=en'><img src={instagram_logo} alt="Instagram Logo"></img></a>
            <a target="_blank" href='https://discord.com/users/215242572904267786'><img src={discord_logo} alt="Discord Logo" ></img></a>
          </div>
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