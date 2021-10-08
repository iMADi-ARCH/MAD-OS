import React from "react";
import AppItem from "./AppItem";

import { ReactComponent as Power } from "../assets/icons/power.svg";
import { ReactComponent as Settings } from "../assets/icons/settings.svg";
import * as apps from "./Apps";

const Menu = ({ openClose, open }) => {
	return (
		<div className={open ? "menu menu-open" : "menu menu-closed"}>
			<div className="power-items">
				<Settings className="power-item" />
				<Power className="power-item" />
			</div>
			<div className="menu-apps">
				{apps.appsList.map((app) => {
					return (
						<AppItem
							key={app.id}
							type="menu"
							IconComponent={app.icon}
							label={app.label}
							onClick={() => {
								openClose(app.id, true);
							}}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default Menu;
