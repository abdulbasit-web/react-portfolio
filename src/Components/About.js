import React from 'react'

function About({data}) {
  return (
    <section id='about'>
      <div className='row'>
        <div className='three columns'>
          {data && (
            <img className='profile-pic' src={`images/${data.image}`} alt='Tim Baker Profile Pic' />
          )}
        </div>
        <div className='nine columns main-col'>
          <h2>About Me</h2>

          <p>{data?.bio}</p>
          <div className='row'>
            <div className='columns contact-details'>
              <h2>Contact Details</h2>
              <p className='address'>
                <span>{data?.name}</span>
                <br />
                <span>
                  {data?.street}
                  <br />
                  {data?.city} {data?.state}, {data?.zip}
                </span>
                <br />
                <span>{data?.phone}</span>
                <br />
                <span>{data?.email}</span>
              </p>
            </div>
            <div className='columns download'>
              <p>
                <a href={data?.resumeDownload} className='button'>
                  <i className='fa fa-download'></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
