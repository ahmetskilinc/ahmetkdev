import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Project } from "../../";
import "./MyWork.css";
import { animation } from "../../settings.js";

import * as images from "./Images";
import JsonData from "./MyWork.json";

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
				{JsonData.map(({ image, title, reverse, desc, demoUrl, sourceUrl }) => (
					<Project src={images[image]} key={image} alt={title} reverse={reverse}>
						<p>{title}</p>
						<p>{desc}</p>
						<a target="_blank" rel="noreferrer" href={demoUrl}>
							Demo
						</a>
						<a target="_blank" rel="noreferrer" href={sourceUrl}>
							Source
						</a>
					</Project>
				))}
			</div>
		</section>
	);
};
