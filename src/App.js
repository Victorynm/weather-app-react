import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<Weather />
			<p>
				<a
					href="https://github.com/Victorynm/weather-app-react"
					rel="noreferrer"
					target="_blank"
				>
					Open-source code
				</a>{" "}
				by Victoria Stanchak
			</p>
		</div>
	);
}

export default App;
