import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "../../";
import "./MyWork.css";
import { animation } from "../../settings.js";

import calendarProject from "url:~/static/images/projects/calendar.png";
import rescutrakProject from "url:~/static/images/projects/rescutrak.png";
import coloursProject from "url:~/static/images/projects/colours.png";
import covid19appProject from "url:~/static/images/projects/covid19app.png";

gsap.registerPlugin(ScrollTrigger);

export const MyWork = () => {
	let subheading = useRef(null);

	useEffect(() => {
		TweenMax.from(subheading, {
			...animation,
			scrollTrigger: {
				trigger: subheading,
			},
		});
	});
	return (
		<section className="mywork">
			<h3
				ref={(e) => {
					subheading = e;
				}}
				className="subheading"
			>
				some of my work
			</h3>
			<div className="projects">
				<Project src={rescutrakProject} alt="" reverse={false}>
					<p>RescuTrak</p>
					<p>
						This was a project I built using React, Redux, Firebase and MaterialI-UI. I built it as my first
						big React project in order to learn React and Redux. It is a Vet/Rescue service patient tracking
						database.
					</p>
					<a target="_blank" rel="noreferrer" href="https://rescutrak.web.app/">
						Demo
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/ahmetskilinc/rescutrak/">
						Source
					</a>
				</Project>
				<Project src={calendarProject} alt="" reverse={true}>
					<p>Calendar App</p>
					<p>
						A simple calendar app to learn Firebase with vanilla Javascript. It uses Firebase Auth and
						Firebase Firestore in order to authenticate and serve the correct calendar to the user. It also
						uses{" "}
						<a target="_blank" rel="noreferrer" href="https://fullcalendar.io">
							FullCalendar
						</a>{" "}
						to display the calendar.
					</p>
					<a target="_blank" rel="noreferrer" href="https://calendar.ahmet.wtf">
						Demo
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/ahmetskilinc/calendarfirebaseapp">
						Source
					</a>
				</Project>
				<Project src={coloursProject} alt="" reverse={false}>
					<p>Colours</p>
					<p>Simple Javascript app that gives you a random colour hex value and the name of the colour.</p>
					<a target="_blank" rel="noreferrer" href="https://colors.ahmetk.dev">
						Demo
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/ahmetskilinc/colors">
						Source
					</a>
				</Project>
				<Project src={covid19appProject} alt="" reverse={true}>
					<p>Covid-19 Tracker</p>
					<p>
						A Covid-19 tracker app made using React and Material-UI. I made this app to learn how to use API
						calls in React using the{" "}
						<a target="_blank" rel="noreferrer" href="https://disease.sh/">
							disease.sh
						</a>{" "}
						API.
					</p>
					<a target="_blank" rel="noreferrer" href="https://covid19app-react.web.app">
						Demo
					</a>
					<a target="_blank" rel="noreferrer" href="https://github.com/ahmetskilinc/covid-tracker-react">
						Source
					</a>
				</Project>
			</div>
		</section>
	);
};
