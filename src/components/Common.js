import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
  return (
    <div>
      <section className='d-flex align-items-center'>
        <div className='container-fluid nav_bg'>
          <div className="row" >
            <div className="col-10 mx-auto" >
              <div className="col-md-6 pt-5 mt-5 pt-lg-0 order-2 order-lg-1">
              <h1><strong>{props.heading}</strong>
              </h1>
              <h5 className='mt-3'>
                {props.para}
              </h5>
              </div>
              <div className="mt-3">
              <NavLink to={props.visit} type="button" className="btn btn-primary btn-lg " role="button" aria-pressed="true">{props.btnname} →</NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Common;