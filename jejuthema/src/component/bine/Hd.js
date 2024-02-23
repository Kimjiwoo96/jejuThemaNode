import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { naviObj } from '../../js/menu';
import HdStyle from '../../scss/bine/Hd.module.scss';

function Hd() {

  return (
    <header className={HdStyle.hd}>
      <div className={`${HdStyle.minibanner} text-center`}>
        <a href="https://www.jeju.go.kr/booking/index.htm" target="_blank" rel="noopener noreferrer">
         <span className='d-none d-lg-inline me-3 text-white'>💚다른 체험과 혜택도 확인해보세요.</span> 통합 예약
          </a>
      </div>
      <Navbar expand="lg">
        <div className='container-xl px-0 px-lg-4'>
          <Navbar.Brand href="#home" className={`${HdStyle.logo} ms-3 ms-lg-0 pb-3 pb-lg-0`}>
            <img src="/img/logo.png" alt="제주테마여행" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='border-0' />
          <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end flex-grow-0 border-top '>
            <Nav className={`${HdStyle.gnbs} px-3 px-lg-0`}>
              {
                naviObj.map((el, idx) => (
                  <Nav.Item as="li" className={idx < (naviObj.length - 1) ? `px-lg-4` : 'ps-lg-4'} key={idx}>
                    <Nav.Link href={el.href} className="px-0">
                      {el.title}
                    </Nav.Link>
                  </Nav.Item>
                ))
              }
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </header>
  );
}

export default Hd;