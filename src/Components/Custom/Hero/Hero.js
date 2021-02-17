import React, { useRef, useEffect } from "react";
import "./Hero.css";
import heroimage from "url:~/static/images/hero.jpg";

import { TweenMax } from "gsap";
import { animation } from "../../settings.js";

export const Hero = () => {
	let heroTextHeader = useRef(null);
	let heroTextCopy = useRef(null);
	let heroImage = useRef(null);

	useEffect(() => {
		TweenMax.from(heroTextHeader, {
			...animation,
			delay: 1,
		});

		TweenMax.from(heroTextCopy, {
			...animation,
			delay: 1.2,
		});

		TweenMax.from(heroImage, {
			...animation,
			x: "-400px",
			zIndex: -1,
			y: 0,
			delay: 0.7,
		});
	});
	return (
		<div className="hero">
			<div
				ref={(e) => {
					heroImage = e;
				}}
				className="image-cover"
				style={{ backgroundImage: `url(${heroimage})` }}
			>
				<div className="image-overlay"></div>
			</div>
			<div className="hero-info">
				<h1
					ref={(e) => {
						heroTextHeader = e;
					}}
					className="heading"
				>
					Hey!
				</h1>
				<h3
					ref={(e) => {
						heroTextCopy = e;
					}}
					className="hero-subheading"
				>
					I'm Ahmet, a <span style={{ color: "rgb(221, 31, 63)" }}>Full Stack</span> Web Developer from{" "}
					<span style={{ color: "rgb(221, 31, 63)" }}>London</span>.
				</h3>
			</div>
		</div>
	);
};
