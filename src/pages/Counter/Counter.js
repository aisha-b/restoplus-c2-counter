import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import "./Counter.css";
import { db } from "../../firebase-config";
import { collection, doc, getDoc, getDocs, setDoc } from "firebase/firestore";

export default function Counter() {
	const [count, setCount] = useState(0);

	function increment() {
		setCount(count + 1);
		sendCount(count + 1);
	}

	function decrement() {
		if (count !== 0) {
			setCount(count - 1);
			sendCount(count - 1);
		}
	}

	function reset() {
		setCount(0);
		sendCount(0);
	}

	function startCount() {
		const counterCollectionRef = collection(db, "counter");

		getDocs(counterCollectionRef).then((counterCollection) => {
			let isCountEmpty = counterCollection.empty;
			const startCountRef = doc(db, "counter", "count");

			if (isCountEmpty) {
				setDoc(startCountRef, {
					count: 0,
				});
			}
		});
	}

	function getCount() {
		console.log("get " + count);
		const countRef = doc(db, "counter", "count");

		getDoc(countRef).then((countCollectionDoc) => {
			let dbCount = countCollectionDoc.data().count;

			setCount(dbCount);
		});
	}

	function sendCount(newCount) {
		console.log("send " + count);
		const countRef = doc(db, "counter", "count");

		setDoc(countRef, {
			count: newCount,
		});
	}

	useEffect(() => {
		startCount();
		getCount();
	}, []);

	return (
		<div className="container">
			<h1 className="header">COUNTER</h1>
			<p>with Firebase</p>
			<p className="count-display">{count}</p>
			<div>
				<div className="button-group">
					<Button name="-" type="decrement" handleClick={decrement} />
					<Button name="+" type="increment" handleClick={increment} />
					<Button name="Reset" type="reset" handleClick={reset} />
				</div>
			</div>
		</div>
	);
}
