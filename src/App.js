import "./App.css";
import Weather from "./Weather";

function App() {
	return (
		<div className="App">
			<div className="container-fluid">
				<Weather defaultCity="London" />
				<p className="text-center">
					<a
						href="https://github.com/Victorynm/weather-app-react"
						rel="noreferrer"
						target="_blank"
						id="git-link"
					>
						Open-source code
					</a>{" "}
					by Victoria Stanchak
				</p>
			</div>
		</div>
	);
}

export default App;
