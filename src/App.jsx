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
		fetch("http://localhost:8080/")
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					const initialTasks = [[]];
					for (let task of data.tasks) {
						addTask(task, initialTasks);
					}
					setTasks(initialTasks);
				}
			});
	}, []);

	const addTask = (newTask, currentTasks) => {
		const charWidth = 10;
		const newTaskWidth = newTask.name.length * charWidth + 26;

		let lastRowWidth = 0;
		for (let taskName of currentTasks[currentTasks.length - 1]) {
			lastRowWidth += taskName.name.length * charWidth + 26;
		}

		const totalWidth = lastRowWidth + newTaskWidth;
		if (totalWidth > 1200) {
			currentTasks.push([newTask]);
		} else {
			if (currentTasks.length != 8) {
				currentTasks[currentTasks.length - 1].push(newTask);
			}
		}
	};

	const deleteTask = (taskId) => {
		fetch(`http://localhost:8080/${taskId}`, { method: "DELETE" })
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					setTasks(
						tasks.map((taskRow) =>
							taskRow.filter((taskItem) => taskItem.id != taskId)
						)
					);
				}
			});
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
				<span className="text-[110px] font-bold cursor-default">
					create a new task
				</span>
				<InputBar
					addTask={addTask}
					taskState={tasks}
					setTaskState={setTasks}
				/>
			</div>

			{/* task grid */}
			{tasks.length > 1 || tasks[0].length > 0 ? (
				<div className="w-full h-full mt-10 flex flex-col gap-4">
					{tasks.map((row, rowIndex) => (
						<div
							key={rowIndex}
							transition={{ duration: 1 }}
							className="flex items-center justify-center w-full h-[36px] gap-4"
						>
							{row.map((item, itemIndex) => (
								<TaskBox
									exit={{
										scale: 0,
									}}
									id={item.id}
									key={item.id}
									deleteTask={deleteTask}
									PopupDelay={
										itemIndex * 0.2 + 0.05 + rowIndex
									}
									addedHere={item.addedHere ? true : false}
									round={itemIndex % 2 == 0 ? true : false}
								>
									{item.name}
								</TaskBox>
							))}
						</div>
					))}
				</div>
			) : (
				<div className="size-full grid place-items-center">
					<h1>add Task</h1>
				</div>
			)}
		</div>
	);
}
