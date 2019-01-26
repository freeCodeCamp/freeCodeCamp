/* eslint-disable max-len*/
import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className='pt-5 pb-4 footer' id='contact'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-5 col-md-6 col-sm-6  '>
            <p>
              freeCodeCamp is a donor-supported tax-exempt 501(c)(3) nonprofit
              organization (United States Federal Tax Identification Number:
              82-0779546)
            </p>
            <p>
              Our mission: to help people learn to code for free. We accomplish
              this by creating thousands of videos, articles, and interactive
              coding lessons - all freely available to the public. We also have
              thousands of freeCodeCamp study groups around the world.
            </p><p>
              Donations to freeCodeCamp go toward our education initiatives, and
              help pay for servers, services, and staff. You can&nbsp;
              <a className='underline  white' href='https://donate.freecodecamp.org'>make a tax-deductible donation here</a>.
            </p>
          </div>
           <div className='col-lg-2 col-md-2 col-sm-2 col-xs-6'>
             <div className='row'>
              <b className='paddingLow  font-weight-bold col-xs-12'>Our Nonprofit</b>
              <a className=' col-xs-12' href='https://about.freecodecamp.org'>About </a>
              <a className=' col-xs-12' href='https://donate.freecodecamp.org'>Donate</a>
              <a className=' col-xs-12' href='https://shop.freecodecamp.org'>Shop</a>
              <a className=' col-xs-12' href='https://sponsors.freecodecamp.org'>Sponsors</a>
              <a className=' col-xs-12' href='mailto:team@freecodecamp.org'>Contact email</a>
            </div>
           </div>
           <div className='col-lg-2 col-md-2 col-sm-2 col-xs-6'>
             <div className='row'>
              <b className='paddingLow  font-weight-bold col-xs-12'>Our Community</b>
              <a className=' col-xs-12' href='https://www.linkedin.com/school/free-code-camp/people/'>Alumni Network </a>
              <a className=' col-xs-12' href='https://study-group-directory.freecodecamp.org'>Study Groups </a>
              <a className=' col-xs-12' href='https://www.freecodecamp.org/forum'>Forum </a>
              <a className=' col-xs-12' href='https://gitter.im/FreeCodeCamp/home'>Gitter </a>
              <a className=' col-xs-12' href='https://github.com/freeCodeCamp/'>GitHub</a>
              <a className=' col-xs-12' href='https://support.freecodecamp.org'>Support </a>
              <a className=' col-xs-12' href='https://code-of-conduct.freecodecamp.org'>Code of Conduct </a>
              <a className=' col-xs-12' href='https://privacy.freecodecamp.org'>Privacy Policy</a>
              <a className=' col-xs-12' href='https://terms-of-service.freecodecamp.org'>Terms of Service </a>
             </div>
           </div>
           <div className='col-lg-3 col-md-2 col-sm-2 col-xs-12'>
             <div className='row'>
              <b className='paddingLow  font-weight-bold col-xs-12'>Our Learning Resources</b>
              <a className=' col-xs-12' href='https://learn.freecodecamp.org'>Curriculum </a>
              <a className=' col-xs-12' href='https://guide.freecodecamp.org'>Guide </a>
              <a className=' col-xs-12' href='https://www.youtube.com/freecodecamp'>Youtube </a>
              <a className=' col-xs-12' href='https://podcast.freecodecamp.org'>Podcast </a>
              <a className=' col-xs-12' href='https://twitter.com/freecodecamp'>Twitter </a>
              <a className=' col-xs-12' href='https://medium.freecodecamp.org'>Medium </a>
              <a className=' col-xs-12' href='https://instagram.com/freecodecamp'>Instagram </a>
            </div>
           </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
