// Components
import InputBar from "./components/InputBar";
import TaskBox from "./components/TaskBox";

// Libraries
import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function App() {
	const [tasks, setTasks] = useState([[]]);

	useEffect(() => {
		// fetch tasks
		const taskItems = [
			"pay Utility Bills",
			"Review and refactor go Codebase",
		];

		const initialTasks = [[]];
		for (let taskItem of taskItems) {
			addTask(taskItem, initialTasks);
		}
		setTasks(initialTasks);
	}, []);

	const addTask = (newTaskName, currentTasks) => {
		const charWidth = 10;
		const newTaskWidth = newTaskName.length * charWidth + 26;

		let lastRowWidth = 0;
		for (let taskName of tasks[tasks.length - 1]) {
			lastRowWidth += taskName.length * charWidth + 26;
		}

		const totalWidth = lastRowWidth + newTaskWidth;
		if (totalWidth > 1200) {
			currentTasks.push([newTaskName]);
		} else {
			currentTasks[currentTasks.length - 1].push(newTaskName);
		}
	};

	return (
		<div className="relative flex flex-col w-screen h-screen px-44 py-20 bg-[rgb(242,242,242)] font-outfit">
			<div className="flex items-center justify-between">
				<span className="text-2xl font-semibold">Listr.</span>
				<motion.span
					animate={{
						rotate: [0, 20, -20, 20, -20, 20, -20, 0],
					}}
					transition={{ duration: 2 }}
					className="mr-8 text-2xl origin-bottom-right leading-none"
				>
					👋
				</motion.span>
			</div>
			<div className="relative w-full flex flex-col items-center">
				<span className="text-[110px] font-bold">
					create a new task
				</span>
				<InputBar
					addTask={addTask}
					taskState={tasks}
					setTaskState={setTasks}
				/>
			</div>

			{/* task grid */}
			<div className="w-full h-full mt-10 flex flex-col gap-4">
				{tasks.map((row, rowIndex) => (
					<div
						key={rowIndex}
						className="flex items-center justify-center w-full h-[36px] gap-4"
					>
						{row.map((item, itemIndex) => (
							<TaskBox key={itemIndex}>{item}</TaskBox>
						))}
					</div>
				))}
			</div>
		</div>
	);
}
