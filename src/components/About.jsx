import React from 'react';
import {Grid, Col, Image } from 'react-bootstrap';
import './About.css';
export default class About extends React.Component {
	render() {
		return (
			<div>
				<Image src = "assets/view-1.jpg" className = "header-image" />
				<Grid>
					<Col xs = {12} sm ={8} smOffset={2} >
						<Image src = "assets/person-1.jpg" className = "about-profile-pic" rounded />
						<h3>Traveling With Me</h3>
						<p>
						Air out the linens, unlatch the shutters on the eastern side, and maybe find that deck of Bicycle cards lost near the sofa. Or maybe walk around and look out the back windows first. I hear the view’s magnificent: old silent pines leading down to the lakeside, layer upon layer of magnificent light. Should you be hungry, I’m sorry but there’s no Chinese takeout, only a General Store. You passed it coming in, 
but you probably didn’t notice its one weary gas pump along with all those Esso cans from decades ago. If you’re somewhat confused, think Vermont, that state where people are folded into the mountains like berries in batter. . . . What I’d like when I get there is a few hundred years to sit around and concentrate on one thing at a time. I’d start with radiators and work my way up to Meister Eckhart, or why do so few people turn their lives around, so many take small steps into what they never do,
the first weeks, the first lessons, until they choose something other,
beginning and beginning their lives, so never knowing what it’s like to risk last minute failure. . . .I’d save blue for last. Klein blue,
or the blue of Crater Lake on an early June morning. That would take decades. . . .Don’t forget to sway the fence gate back and forth a few times just for its creaky sound. When you swing in the tire swing make sure your socks are off. You’ve forgotten, I expect, the feeling of feet brushing the tops of sunflowers: In Vermont, I once met a ski bum on a summer break who had followed the snows for seven years and planned on at least seven more.
						</p>

					</Col>
				</Grid>
			</div>
		);
	}
}
