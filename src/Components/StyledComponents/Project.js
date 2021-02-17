import React from "react";
import { useRef, useEffect } from "react";
import styled from "styled-components";
import gsap from "gsap";
import { TweenMax } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animation } from "../settings";

export const ProjectWrapper = styled.div`
	margin-bottom: 58px;
	&:last-of-type {
		margin: 0;
	}
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	${(props) =>
		props.reverse === true &&
		`
				flex-direction: row-reverse;
			`}
	@media only screen and (max-width: 800px) {
		flex-direction: column;
	}
`;

export const ProjectImage = styled.img`
	display: block;
	border-radius: 4px;
	width: 60%;
	box-shadow: 0px 10px 32px -16px rgba(61, 61, 61, 0.9);
	@media only screen and (max-width: 800px) {
		width: 100%;
	}
`;

export const ProjectInfo = styled.div`
	box-shadow: 0px 21px 60px -20px rgba(61, 61, 61, 0.9);
	border-radius: 4px;
	padding: 20px;
	color: #f8f8f8;
	position: relative;
	background-color: #6b6b6b;
	width: 42%;
	height: 70%;

	${(props) => {
		if (props.reverse) {
			return `
				left: 3%;
				right: 0;
				text-align: right;
			`;
		} else {
			return `
				left: -3%;
				right: 0;
				text-align: left;
			`;
		}
	}}

	a {
		color: #f8f8f8;
	}

	a:hover {
		color: #c6c6c6;
	}

	a:first-of-type {
		margin-right: 20px;
	}

	h3 {
		font-size: 16px;
	}

	ul li,
	p,
	a {
		font-size: 14px;
		margin-top: 0;
	}

	p > a {
		margin-right: 0 !important;
	}

	@media only screen and (max-width: 800px) {
		width: 70%;
		margin-top: -7%;
		left: 0;
		right: 0;
		text-align: left;
		h3 {
			font-size: 14px;
		}
		ul li,
		p,
		p > a {
			font-size: 12px;
		}
	}

	@media only screen and (max-width: 500px) {
		width: 90%;
	}
`;

gsap.registerPlugin(ScrollTrigger);

export const Project = ({ src, alt, children, reverse }) => {
	let project = useRef(null);

	useEffect(() => {
		TweenMax.from(project, {
			...animation,
			scrollTrigger: {
				trigger: project,
			},
		});
	});
	return (
		<ProjectWrapper
			ref={(e) => {
				project = e;
			}}
			reverse={reverse}
		>
			<ProjectImage src={src} alt={alt} />
			<ProjectInfo reverse={reverse}>{children}</ProjectInfo>
		</ProjectWrapper>
	);
};
