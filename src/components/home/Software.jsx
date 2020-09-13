import React, { useState, useEffect, Profiler } from "react";
import Scikit from "../../editable-stuff/scikit-learn-logo.png";
import Airtop from "../../editable-stuff/airtop-logo.png";
import RLDMAN from "../../editable-stuff/rldman-logo.png";
const divStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  };
const Software = () => {
return (
    <div id="software" className="jumbotron jumbotron-fluid m-0" style={{backgroundColor:'white'}}>
      <div className="container container-fluid">
        <div className="row">
            <div className="col d-lg-inline align-self-center">
            <h1 className="display-4 mb-5 text-center">Software</h1>
            {/* <h1 className="display-4 pb-5">Software</h1> */}
            <div className="row" style={divStyle}>
                <div className="col text-left" >
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Scikit}
                        alt="Scikit-Learn logo"
                        width="420"

                    />
                    <br/>
                    <br/>
                    <p className="lead text-left" style={{fontSize:'22px'}}>
                        Role: <a href="https://scikit-learn.org/stable/developers/contributing.html" target="_blank">Contributor</a>  (September 2020 - Present)
                        <br/>
                        <a href="https://scikit-learn.org/stable/" target="_blank">Scikit-learn</a> has emerged as one of the most popular open source machine learning toolkits, and is widely used in academia and industry. Scikit-learn provides easy-to-use interfaces to perform advanced analysis and build powerful predictive models.

                    </p>
                    <br/>
                    <hr></hr>
                    <br/>
                    <img
                        // className="border border-secondary rounded-circle"
                        src={Airtop}
                        alt="AirTOp logo"
                        width="420"

                    />
                    <br/>
                    <br/>
                    <p className="lead text-left" style={{fontSize:'22px'}}>
                        Role: Developer  (June 2010 - July 2016)
                        <br/>
                        AirTOp, developed by <a href="https://airtopsoft.com/" target="_blank">Airtopsoft</a>, is the leading fast-time air traffic complexity modelling, simulation and assessment software. Today, AirTOP users include major air navigation service providers (ANSPs), airport authorities, airlines, research labs and consulting companies globally. AirTOP is used to assess air traffic and airport complexity, measure controller workload, improve airspace and airport capacity, and much more. I rewrote the airspace conflict detection and resolution module and the airport Departure MANagement (DMAN) module. I was responsible for the iPort (Innovative Airport) project. Collaborative initiative between Airtopsoft and DFS (Deutsche Flugsicherung), delair Air Traffic Systems e DLR (German Aerospace
Center), the last three based in Germany. Finally, I was also responsible for the ASAS (Airborne Separation Assistance System) project with ENAV in Italy. Project part of the SESAR (Single European Sky) initiative of Eurocontrol.

                    </p>
                    
                    <br/>
                    <hr></hr>
                    <br/>
                    <img
                        // className="border border-secondary rounded-circle"
                        src={RLDMAN}
                        alt="RLDMAN logo"
                        width="420"

                    />
                    <br/>
                    <br/>
                    <p className="lead text-left" style={{fontSize:'22px'}}>
                        Role: Researcher  (February 2013 - July 2016)
                        <br/>
                        RLDMAN (Reinforcement Learning Departure MANagement) was the first prototype developed in the world of a decision support system based on reinforcement learning for the control and management of departure aircraft in busy airports. It was built on top of the fast-time simulator AirTOp. For more details, see published paper: <a href="https://ieeexplore.ieee.org/document/7313285" target="_blank">Departure MANagement with a Reinforcement Learning Approach: Respecting CFMU Slots</a>.

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

export default Software;
