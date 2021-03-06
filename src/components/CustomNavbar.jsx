import React from 'react';
import {Navbar, Nav, NavItem} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends React.Component {
	render() {
		return (
			<Navbar default collapseonselect = "true">
				<Navbar.Header>
					<Navbar.Brand>
						<Link to = "/">CodeLife </Link> 
					</Navbar.Brand>
					<Navbar.Toggle />
				</Navbar.Header>
				<Navbar.Collapse>
					<Nav pullRight>
						<NavItem eventKey = {1} componentClass = {Link} href = "/" to="/">
							Home
						</NavItem>
						<NavItem eventKey = {2} componentClass = {Link} href="/about" to="/about">
							About
						</NavItem>
						<NavItem eventKey = {3} componentClass = {Link} href = "/news" to="/news">
							News
						</NavItem>
						<NavItem eventKey = {4} componentClass = {Link} href = "/todo" to="/todo">
							Todo
						</NavItem>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		);
	}
}
