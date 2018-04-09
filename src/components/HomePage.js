import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <Grid>
            	<Jumbotron>
            		<h2>Welcome to GodeLife.io</h2>
            		<p>This is how to build website with React, React-Router&React-Bootstrap</p>
            	</Jumbotron>
            	<Link to = '/about'>
            		<Button byStyle = 'primay'>About</Button>
            		
            	</Link>
            </Grid>

        );
    }
}

export default HomePage;
