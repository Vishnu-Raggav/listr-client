import { IoMdArrowUp } from "react-icons/io";
import { useRef } from "react";

export default function InputBar({ addTask, taskState, setTaskState }) {
	const inputRef = useRef(null);

	return (
		<div className="relative bottom-[59px]">
			<input
				ref={inputRef}
				onKeyDown={(e) => {
					if (e.key === "Enter") {
						const currentTasks = [...taskState];
						addTask(inputRef.current.value, currentTasks);
						setTaskState(currentTasks);
					}
				}}
				className={`
          w-[595px] h-11 rounded-full shadow-input px-5 bg-[#FAFAFA] focus:outline-none
        placeholder-black font-normal placeholder-opacity-15
        `}
				placeholder="write something quick..."
			/>
			<div
				className={`
          absolute top-0 right-0 mt-1 mr-1 grid place-items-center
          rounded-full bg-[#E6E6E6] h-[36px] aspect-square cursor-pointer
        `}
			>
				<IoMdArrowUp className="text-[24px] rotate-45" />
			</div>
		</div>
	);
}
