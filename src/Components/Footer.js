import React from 'react'

function Footer({data}) {
  return (
    <footer>
      <div className='row'>
        <div className='twelve columns'>
          <ul className='social-links'>
            {data?.social.map(function (network) {
              return (
                <li key={network.name}>
                  <a href={network.url}>
                    <i className={network.className}></i>
                  </a>
                </li>
              )
            })}
          </ul>

          <ul>
            <li>
              Modified with love by the Clever Programmer team{' '}
              <span role='img' aria-label='heart'>
                ♥
              </span>
            </li>
          </ul>

          <ul className='copyright'>
            <li>&copy; All credit goes to Tim Baker - Copyright 2017 Tim Baker</li>
            <li>
              Design by{' '}
              <a title='Styleshout' href='http://www.styleshout.com/'>
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id='go-top'>
          <a className='smoothscroll' title='Back to Top' href='#home'>
            <i className='icon-up-open'></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
