import React from 'react';
import data from '../repo-data/repo.json';
import axios from 'axios';

const API_URL_START = 'https://api.github.com/repos/';
const API_URL_END = '/contributors';

const PopularRepo = (props) => {
    const popularRepoData = data.map(data => {

        return(
            <div className="row" id="dev-card" key = {data.link}>
                <div className="col">
                    <div className="card" id="dev-card-main">
                        <div className="card-image">
                             <img src={data.avatar_url} alt="avatar" width='256px'/>
                             <span className="card-title">{data.name}</span>
                            <a className="btn-floating  halfway-fab waves-effect waves-light red scale-transition" href="#root" onClick={(e) => {
                                let inputdata = data.link;
                                let dotComPosition = inputdata.indexOf(".com")+5;
                                let userData = inputdata.slice(dotComPosition);
                                axios.get(`${API_URL_START}${userData}${API_URL_END}`).then(res => {
                                    props.getJsonData(res.data);
                                    props.setTitle(`${userData}`);
                                })
                             }}>
                                 <i className="material-icons">eject</i></a>
                        </div>
                        <div className="card-content">
                            <p>Creator: {data.user}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    });

    return(
        <div>
            {popularRepoData}
        </div>
    );

}


export default PopularRepo;