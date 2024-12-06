import InputBar from "./components/InputBar";

function App() {
	return (
		<div className="relative w-screen h-screen px-44 py-20 bg-[#F2F2F2] font-outfit">
			<div className="flex items-center justify-between">
				<span className="text-2xl font-semibold">Listr.</span>
				<span className="mr-8">👋</span>
			</div>
			<div className="relative w-full flex flex-col items-center">
				<span className="text-[110px] font-bold">
					create a new task
				</span>
				<InputBar />
			</div>
		</div>
	);
}

export default App;
