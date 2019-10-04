import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem,Jumbotron, Button} from 'reactstrap';

class Header extends React.Component{
    render(){
        return(
            <React.Fragment>
                <Navbar color="light" light expand="md" className ='mb-5'>
                    <div className = 'container'>
                        <NavbarBrand href="/" className='mr-5'>
                        <img src ={ "assets/logo_whitepanda_dark.png"} height = '100px' alt='logo_lmao' className='mt-0 pr-0' /> 
                        </NavbarBrand>
                        <Nav navbar>
                            <NavItem className = 'mr-2'>
                                <i className = 'fa fa-bell-o lg'></i> 
                            </NavItem>
                            <NavItem>
                                <i className = 'fa fa-user-circle-o lg'></i>
                            </NavItem>
                        </Nav>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className = 'container'>
                        <div className = 'row row-header mb-5 ml-2'>
                            <h2>
                            Content Store
                            </h2>
                        </div>
                        <div className = 'row-content ml-4 '>
                            <p className ='green'>
                                Got bulk orders or almost similar orders?
                                Fill the excel sheet
                            </p>
                            <p className = 'faded'>
                                If you are wondering about an easy way to place orders  in large numbers, we provide a way customized
                                just for that. Download our excel sheet , and fill the order brief in the prescribed format and submit.
                                In case you need any help, <u>we are just a click away</u>
                            </p>
                            <Button outline color = 'success' className = 'order_excel'> Order via excel sheet</Button>
                        </div>
                    </div>
                </Jumbotron>
            </React.Fragment>
        );
    }

}

export default Header;
