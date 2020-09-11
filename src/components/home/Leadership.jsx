import React, { useState, useEffect, Profiler } from "react";
import Cgdatascience from "../../editable-stuff/cgdatascience-logo.jpg";

const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Leadership = () => {
return (
    <div id="leadership" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'#f7f7f7'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Leadership</h1>
            {/* <h1 className="display-4 pb-5">Leadership</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-left" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Cgdatascience}
                        alt="CG Data Science logo"
                        width="420"

                    />
                    <br/>
                    <br/>
                    <p className="lead text-left" style={{fontSize:'22px'}}>
                        Campina Grande (CG) Data Science
                        <br/>
                        I lead a group of enthusiastic people about data science, machine learning and artificial intelligence. We share news and updates about the latest developments in these fields, discuss research papers, participate on kaggle competitions together and others. Join our global community of learners: <a href="https://chat.whatsapp.com/C3cn3AEkhFu5gyw5Tagajn" target="_blank">CG Data Science</a>.

                    </p>
                    
                    
                    {/* <h3>AirTOp</h3> */}
                </div>
                
            </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Leadership;
