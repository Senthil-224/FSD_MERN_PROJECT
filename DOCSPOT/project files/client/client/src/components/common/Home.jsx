import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button } from 'react-bootstrap';


const Home = () => {
  return (
    <>
      <Navbar expand="lg" className="bg" >
        <Container fluid >
          <Navbar.Brand  >
            <Link to={'/'} >MedicoCentre</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '150px' }}
              navbarScroll
            >
            </Nav>
            <Nav >
              <Link to={'/'}>Home</Link>
              <Link to={'/login'}>Login</Link>
              <Link to={'/register'}>Register</Link>
            </Nav>

          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className='home-container'>
        <div className="left-side">
          <img alt="" src={'https://plus.unsplash.com/premium_photo-1663013439760-cb73ca606ae1?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9jdG9yJTIwYXBwb2ludG1lbnR8ZW58MHx8MHx8fDA%3D'} />
        </div>
        <div className="right-side">
          <p>
            <span className='f-letter'>Book your doctor in seconds</span><br />
            <span className='s-letter'>Fast and easy scheduling</span> <br />
            <span className='t-letter'>putting your health in your hands.</span><br />
            <Button color='black' className='mt-3 register'><Link to={'/Login'}>Book your Doctor</Link></Button>
          </p>
        </div>
      </div>


      <Container>
        <h1 className='text-center mb-4'>About Us</h1>
        <div className="right-side">
          <p>
           Booking a doctor is now quick and hassle-free with our easy online system.
You can explore many doctors, check their details, and pick the one that suits your needs.
Choose any available time slot and confirm your visit in just a few clicks.
You’ll get instant updates and reminders so you never miss an appointment.
Enjoy smooth, simple, and fast healthcare booking from anywhere.
          </p>
        </div>
      </Container>



    </>
  )
}

export default Home
