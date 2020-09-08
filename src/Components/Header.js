import React from 'react'
import Particles from 'react-particles-js'

function Header({data}) {
  return (
    <header id='home'>
      <nav id='nav-wrap'>
        <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
          Show navigation
        </a>
        <a className='mobile-btn' href='#home' title='Hide navigation'>
          Hide navigation
        </a>

        <ul id='nav' className='nav'>
          <li className='current'>
            <a className='smoothscroll' href='#home'>
              Home
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#about'>
              About
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#resume'>
              Resume
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#portfolio'>
              Works
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#testimonials'>
              Testimonials
            </a>
          </li>
          <li>
            <a className='smoothscroll' href='#contact'>
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className='row banner'>
        <div className='banner-text'>
          <h1 className='responsive-headline'>I'm {data?.name}.</h1>
          <h3>
            I'm a {data?.city} based <span>{data?.occupation}</span>. {data?.description}.
          </h3>
          <hr />
          <ul className='social'>
            {data?.social.map(item => (
              <li key={item.name}>
                <a href={item.url}>
                  <i className={item.className}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Particles
        className='particle'
        params={{
          particles: {
            number: {
              value: 300,
              density: {
                enable: 1000,
              },
            },
            size: {
              value: 5,
              random: true,
            },
            move: {
              direction: 'bottom',
              out_mode: 'out',
            },
            line_linked: {
              enable: false,
            },
          },
          interactivity: {
            events: {
              onclick: {
                enable: true,
                mode: 'push',
              },
            },
            modes: {
              remove: {
                particles_nb: 10,
              },
            },
          },
        }}
      />

      <p className='scrolldown'>
        <a className='smoothscroll' href='#about'>
          <i className='icon-down-circle'></i>
        </a>
      </p>
    </header>
  )
}

export default Header
