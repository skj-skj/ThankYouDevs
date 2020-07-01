import React from 'react';

import axios from 'axios';

const API_URL_START = 'https://api.github.com/repos/';
const API_URL_END = '/contributors';

class InputBar extends React.Component{

    state = {
        link: ''
    }


    handleChange = (e) => {
        this.setState({
            link: e.target.value
        });
    }


    handleSubmit = (e) => {
        e.preventDefault();
        let inputdata = this.state.link;
        let dotComPosition = inputdata.indexOf(".com")+5;
        let userData = inputdata.slice(dotComPosition);
        console.log(userData);
        

        axios.get(`${API_URL_START}${userData}${API_URL_END}`).then(res => {
            this.props.getJsonData(res.data);
            this.props.setTitle(`${userData}`);
        })
    }

    render(){
        return(
            <div className="row">
                <form className="col s12" onSubmit={this.handleSubmit} autoComplete="off">
                    <div className="row">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">search</i>
                            <input id="searchBox" className="validate" placeholder="Paste the Repo Link" onChange={this.handleChange}></input>
                            <label htmlFor="searchBox" className="active">Search</label>
                        </div>
                    </div>
                </form>
            </div>
          
        );
    }

}

export default InputBar;