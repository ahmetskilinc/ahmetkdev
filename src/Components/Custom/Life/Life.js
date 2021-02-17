import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Life.css";
import { animation } from "../../settings.js";

gsap.registerPlugin(ScrollTrigger);

export const Life = () => {
	let subheading = useRef(null);
	let xlnWork = useRef(null);
	let absoweblyWork = useRef(null);
	let kingstonUni = useRef(null);
	let workHeader = useRef(null);
	let educationHeader = useRef(null);

	useEffect(() => {
		TweenMax.from(subheading, {
			...animation,
			scrollTrigger: {
				trigger: subheading,
			},
		});

		TweenMax.from(xlnWork, {
			...animation,
			scrollTrigger: {
				trigger: xlnWork,
			},
		});

		TweenMax.from(absoweblyWork, {
			...animation,
			scrollTrigger: {
				trigger: absoweblyWork,
			},
		});

		TweenMax.from(kingstonUni, {
			...animation,
			scrollTrigger: {
				trigger: kingstonUni,
			},
		});

		TweenMax.from(workHeader, {
			...animation,
			scrollTrigger: {
				trigger: workHeader,
			},
		});

		TweenMax.from(educationHeader, {
			...animation,
			scrollTrigger: {
				trigger: educationHeader,
			},
		});
	});
	return (
		<section className="life">
			<h3
				ref={(e) => {
					subheading = e;
				}}
				className="subheading"
			>
				experience
			</h3>
			<div>
				<div className="experience">
					<h2
						ref={(e) => {
							workHeader = e;
						}}
					>
						Work
					</h2>
					<div>
						<div
							ref={(e) => {
								xlnWork = e;
							}}
						>
							<h3>XLN | For Small Business</h3>
							<p>November 2020 - Present</p>
							<p>Junior Full Stack Web Developer</p>
						</div>
						<div
							ref={(e) => {
								absoweblyWork = e;
							}}
						>
							<h3>Absowebly Ltd</h3>
							<p>July 2018 - September 2018</p>
							<p>Junior Web Developer</p>
						</div>
					</div>
				</div>
				<div className="education">
					<h2
						ref={(e) => {
							educationHeader = e;
						}}
					>
						Education
					</h2>
					<div>
						<div
							ref={(e) => {
								kingstonUni = e;
							}}
						>
							<h3>Kingston University, London</h3>
							<p>September 2017 - May 2020</p>
							<p>Computer Science BSc</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};
