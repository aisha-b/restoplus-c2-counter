import { useEffect, useState } from "react";
import "./Button.css";

export default function Button(props) {
	const name = props.name;
	const type = props.type;
	const handleClick = props.handleClick;

	const [style, setStyle] = useState("");

	useEffect(() => {
		if (type === "increment") {
			setStyle("btn-a btn-inc btn-eff");
		} else if (type === "decrement") {
			setStyle("btn-a btn-dec btn-eff");
		} else if (type === "reset") {
			setStyle("btn-b btn-res btn-eff");
		}
	}, []);

	return (
		<div className={style} onClick={handleClick}>
			{name}
		</div>
	);
}
