import React from 'react'


const Contact = () =>{
    



    return(
        <main>
        <div className="container">
            <div class="form-container">
                <form action="#">
                    <h2 id="contact-h2">Contact Me</h2>
                    <div class="account-info">
                        <fieldset>
                        <legend><label class="nums">1</label> Account Info </legend>
                        <label for="firstname">Name:</label>
                        <input type="text" name="username" id="usename" required placeholder="Full name..." pattern="^[a-zA-Z].*[\s\.]*$"/>
                        <br/>
                        <label for="email">Email</label>
                        <input type="email" name="email" id="email" required placeholder="Email Address..."/>
                        <br/>
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required placeholder="Password... min 8 chars" pattern=".{8,}" />
                        <label for="comments">About</label>
                        <br/>
                        <textarea name="contact-about" id="contact-about"></textarea>
                        <br/>
                        <input type="submit" value="Submit"/>
                        <input type="reset" value="Clear Form"/>
        
                        </fieldset>
                    </div>

                </form>
            </div>
        </div>
        </main>
      );
    
}
export default Contact;