import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router-dom';
import {Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import './HomePage.css';

class HomePage extends Component {
    render() {
        return (
            <Grid>
            	<Jumbotron>
            		<h2>Welcome to My first Boostrap Website</h2>
            		<p>This is how to build website with React, React-Router&React-Bootstrap</p>
            		<Link to = '/about'>
            			<Button byStyle = 'primay'>About</Button>
            		</Link>
            	</Jumbotron>

				<Row className = "show-grid text-center">
					<Col xs = {12} sm={4} className = "person-wrapper">
						<Image src = "assets/person-1.jpg" circle className = "profile-pric" />
						<h3>Peilin</h3>
						<p>That's a crooked tree. we'll send hime to Washington.</p>
					</Col>
					<Col xs = {12} sm={4} className = "person-wrapper">
						<Image src = "assets/person-2.jpg" circle className = "profile-pric" />
						<h3>Peilin</h3>
						<p>That's a crooked tree. we'll send hime to Washington.</p>
					</Col>
					<Col xs = {12} sm={4} className = "person-wrapper">
						<Image src = "assets/person-3.jpg" circle className = "profile-pric" />
						<h3>Peilin</h3>
						<p>That's a crooked tree. we'll send hime to Washington.</p>
					</Col>
				 </Row>
            </Grid>

        );
    }
}

export default HomePage;
