import React from 'react';

const DevCardList = ({jsonData}) => {

    const devList = jsonData.length ? jsonData.map( data => {
        return(
            <div className="row" id="dev-card" key={data.login}>
                <div className="col">
                    <div className="card" id="dev-card-main">
                        <div className="card-image">
                             <img src={data.avatar_url} alt="avatar" width='256px'/>
                             <span className="card-title">{data.login}</span>
                             <a className="btn-floating  halfway-fab waves-effect waves-light red scale-transition" target="_blank" rel="noopener noreferrer" href={'https://github.com/' + data.login}><i className="material-icons">launch</i></a>
                        </div>
                        <div className="card-content">
                            <p>Contributions : {data.contributions}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }) : <p>No Data now</p>

    return(
        <div>
            {devList}
        </div>
    );

}

export default DevCardList;