export default function TaskBox({ children, round = false }) {
	return (
		<div
			className={`bg-[#E6E6E6] flex items-center justify-center h-full px-3 py-3 border-[1px] border-[#D9D9D9] rounded-full cursor-pointer`}
		>
			<span className="text-sm">{children}</span>
		</div>
	);
}
