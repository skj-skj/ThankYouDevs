import React from 'react'

class About extends React.Component{
    render(){
        return(
            <footer className="page-footer">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                <h5 className="white-text">About</h5>
                <p className="grey-text text-lighten-4">This project is a small token of appreciation to all the Developers around the world whoes contributions to the open source community have done Marvelous Wonders in the age of the internet. 
                Thank You <span role="img" aria-label="ThankYou">🙏</span> to all the Developers out there</p>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            © 2020 Copyright
            </div>
          </div>
        </footer>
        );
    }
}

export default About;