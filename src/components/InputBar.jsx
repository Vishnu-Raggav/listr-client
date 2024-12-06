import { IoMdArrowUp } from "react-icons/io";

export default function InputBar() {
	return (
		<div className="relative bottom-14">
			<input
				className={`
          w-[595px] h-11 rounded-full shadow-input px-5 bg-[#FAFAFA] focus:outline-none
        placeholder-black font-normal placeholder-opacity-15
        `}
				placeholder="write something quick..."
			/>
			<div
				className={`absolute top-0 right-0 mt-1 mr-1 grid place-items-center
          rounded-full bg-[#E6E6E6] h-[36px] aspect-square
          `}
			>
				<IoMdArrowUp className="text-[23px] rotate-45" />
			</div>
		</div>
	);
}
