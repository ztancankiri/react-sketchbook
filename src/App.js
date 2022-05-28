import "./App.css";
import { Greet } from "./components/Greet";
import { Message } from "./components/Message";
import { ClickHandler } from "./components/ClickHandler";
import { ParentComponent } from "./components/ParentComponent";

import { BootstrapButton } from "./components/BootstrapButton";
import { BootstrapNavbar } from "./components/BootstrapNavbar";

function App() {
	return (
		<div className="App">
			<BootstrapNavbar />
			<Greet name="Bruce" heroName="Batman" />
			<Greet name="Clark" heroName="Superman">
				<button>Actions</button>
			</Greet>
			<Greet name="Diana" heroName="Wonder Woman">
				<p>This is children props.</p>
			</Greet>

			<Message />
			<ClickHandler />
			<ParentComponent />
			<BootstrapButton />
		</div>
	);
}

export default App;
