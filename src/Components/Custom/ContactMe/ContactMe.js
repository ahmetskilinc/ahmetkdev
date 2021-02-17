import React from "react";
import { useRef, useEffect } from "react";
import gsap from "gsap";
import { TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileDownload, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { animation } from "../../settings.js";
import "./ContactMe.css";

gsap.registerPlugin(ScrollTrigger);

export const ContactMe = () => {
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
		<section
			ref={(e) => {
				subheading = e;
			}}
			className="contactme"
		>
			<h3 className="subheading">contact me</h3>
			<div className="cta-container">
				<a href="https://google.com/">
					Resume/CV <FontAwesomeIcon icon={faFileDownload} />
				</a>
				<a href="mailto:ahmetskilinc@icloud.com">
					Email <FontAwesomeIcon icon={faEnvelope} />
				</a>
			</div>
		</section>
	);
};
