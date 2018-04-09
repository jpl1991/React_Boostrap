import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends React.Component {
	render() {
		return (
			<Navbar default collapseOnselect>
				<Navbar.Header>
					<Navbar.Brand>
						<Link to = "/">CodeLife </Link> 
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey = {1} componentClass = {Link}  to="/">
							Home
						</NavItem>
						<NavItem eventKey = {2} componentClass = {Link}  to="/">
							About
						</NavItem>
						<NavItem eventKey = {3} componentClass = {Link}  to="/">
							News
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
