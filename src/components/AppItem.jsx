import React, { useState } from "react";

const AppItem = ({ type, label, IconComponent, isOpen }) => {
	let [open, setOpen] = useState(isOpen);
	if (type === "panel") {
		return (
			<div className={open ? "panel-item panel-item-opened" : "panel-item"}>
				<IconComponent />
			</div>
		);
	} else if (type === "desktop") {
		return (
			<div className="desktop-item">
				<IconComponent />
				<p>{label}</p>
			</div>
		);
	} else if (type === "menu") {
		return (
			<div className="menu-app">
				<IconComponent />
				<p>{label}</p>
			</div>
		);
	} else {
		return <div>BAD TYPE BRO</div>;
	}
};

export default AppItem;