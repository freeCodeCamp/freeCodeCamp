import React, { PureComponent } from 'react';

// import PropTypes from 'prop-types';

const propTypes = {};

export class NotFound extends PureComponent {
  render() {
    return (
        <div className='container'>
          <div className='row'>
            <div className='col-sm'>
            <div className='alert alert-danger' role='alert'>
              <h4 className='alert-heading' className='mb-12'>
                This challenge is not found.</h4>
               <p>Head back to <a className='alert-link'
                   href='/en/challenges/basic-html-and-html5/learn-how-freecodecamp-works'
                   >
                    Map
                </a>
               </p>
            </div>
            </div>
           </div>
        </div>
    );
  }
}

NotFound.displayName = 'NotFound';
NotFound.propTypes = propTypes;
export default NotFound;
