import { IoMdArrowUp } from "react-icons/io";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function InputBar({ addTask, taskState, setTaskState }) {
	const inputRef = useRef(null);

	useEffect(() => {
		const focusInput = (event) => {
			if (event.key === "/") {
				event.preventDefault();
				inputRef.current.focus();
			}
		};

		window.addEventListener("keydown", focusInput);
		return () => window.removeEventListener("keydown", focusInput);
	}, []);

	const sendTaskAndAddTask = () => {
		fetch("http://localhost:8080/", {
			method: "POST",
			body: JSON.stringify({
				name: inputRef.current.value,
			}),
		})
			.then((res) => res.json())
			.then((data) => {
				if (data.success) {
					const initialTasks = [...taskState];
					addTask({ ...data.task, addedHere: true }, initialTasks);
					inputRef.current.value = "";
					setTaskState(initialTasks);
				}
			});
	};

	return (
		<motion.div className="relative bottom-[59px]">
			<input
				ref={inputRef}
				onKeyDown={(e) => {
					if (e.key === "Enter" && inputRef.current.value) {
						sendTaskAndAddTask();
					}
				}}
				className={`
          w-[595px] h-11 rounded-full shadow-input px-5 bg-[#FAFAFA] focus:outline-none
        placeholder-black font-normal placeholder-opacity-15
        `}
				placeholder="write something quick..."
			/>
			<motion.div
				whileHover={{
					rotate: 180,
				}}
				className={`
          absolute top-0 right-0 mt-1 mr-1 grid place-items-center
          rounded-full bg-[#E6E6E6] h-[36px] aspect-square cursor-pointer
        `}
			>
				<IoMdArrowUp
					className="text-[24px] rotate-45"
					onClick={() => {
						if (inputRef.current.value) {
							sendTaskAndAddTask();
						}
					}}
				/>
			</motion.div>
		</motion.div>
	);
}
