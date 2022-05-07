import '../stylesheets/TopNavBar.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

//The top navigation bar function component
function TopNavBar() {
    return (
        <Navbar bg="dark" variant="dark" fixed='top' className='top-nav-bar'>
          <div className='navbar-text'>
            <Container className='container'>
              <Navbar.Brand href="#home">
                <img
                  alt=""
                  src='https://images.unsplash.com/photo-1516876437184-593fda40c7ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGZvb2QlMjBsb2dvfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60'
                  width="30"
                  height="30"
                  className="d-inline-block align-top logo"
                />{' '}
              USC Restaurant Recommends...
              </Navbar.Brand>
            </Container>
          </div>
        </Navbar>
    );
}

export default TopNavBar;