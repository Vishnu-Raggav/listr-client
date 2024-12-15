import clsx from "clsx";
import { motion } from "motion/react";

export default function TaskBox({
	id,
	children,
	PopupDelay,
	deleteTask,
	round = true,
	addedHere = false,
}) {
	return (
		<motion.div
			layout
			initial={{
				scale: 0.0,
			}}
			animate={{
				scale: 1,
				transition: {
					delay: addedHere ? 0 : PopupDelay,
				},
			}}
			whileHover={{
				rotate: round ? 5 : -5,
			}}
			onMouseUp={() => deleteTask(id)}
			className={clsx(
				"bg-[#E6E6E6] flex items-center justify-center h-full px-3 py-3 border-[1px] border-[#D9D9D9] cursor-pointer",
				round ? "rounded-full" : "rounded-md",
				"hover:bg-black hover:text-[#F2F2F2] transition-colors duration-150"
			)}
		>
			<span className="text-sm">{children}</span>
		</motion.div>
	);
}
