import { Component } from "solid-js";
import logo from "./logo.svg";
import "./PageLayout.css";

export { PageLayout };

const PageLayout: Component = (props) => {
  return (
	<div style={{
		display: "flex",
		"max-width": "900px",
		margin: "auto",
	}}>
		{props.children}
	</div>
	)
}