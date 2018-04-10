import React from 'react';
import {Grid, Row, Col, Image} from 'react-bootstrap';
import './News.css';

export default class News extends React.Component {
	render() {
		return (
			<div>
				<Image src = "assets/view-2.jpg" className = "header-image-news" />
				<Grid>
					<h2> News</h2>
					<Row>
						<Col xs = {12} sm = {8} className = 'main-section'>
							<p>Not I, not any one else can travel that road for you, You must travel it for yourself. It is not far, it is within reach, Perhaps you have been on it since you were born and did not know, Perhaps it is everywhere on water and on land.</p>
							<p>
								We wanderers, ever seeking the lonelier way, begin no day where we have ended another day; and no sunrise finds us where sunset left us. Even while the earth sleeps we travel. We are the seeds of the tenacious plant, and it is in our ripeness and our fullness of heart that we are given to the wind and are scattered.

							</p>
						</Col>
						<Col xs={12} sm={4} className = "sidebar-section">
							<Image src = "assets/view-3.jpg" />
								<p>We wanderers, ever seeking the lonelier way, begin no day where we have ended another day; and no sunrise finds us where sunset left us.</p>
						</Col>
					</Row>
				</Grid>
			</div>
		);
	}
}
