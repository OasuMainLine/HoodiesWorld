import {
	ChevronDoubleDownIcon,
	ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";
import React, { ReactElement, useEffect, useRef, useState } from "react";

interface ReadMoreTextProps extends React.HTMLAttributes<HTMLParagraphElement> {
	children: string;
}

export default function ReadMoreText({
	children,
	className,
	...props
}: ReadMoreTextProps) {
	const [fullSize, setFullSize] = useState(false);
	const [height, setHeight] = useState(0);
	const textRef = useRef<HTMLParagraphElement | null>(null);
	useEffect(() => {
		setHeight(textRef.current?.scrollHeight || 0);
	}, []);
	return (
		<div className="flex flex-col">
			<p
				ref={textRef}
				className={`${
					!fullSize ? "max-h-[7rem]" : "max-h-fit"
				} overflow-hidden ${
					!fullSize && height > 130 ? "read-more" : ""
				} ${className}`}
				{...props}
			>
				{children}
			</p>

			{height > 130 && (
				<button
					onClick={() => setFullSize(!fullSize)}
					className="flex items-center justify-center gap-1 text-gray-600"
				>
					<p className="font-bold">{!fullSize ? "Read More" : "Read Less"}</p>{" "}
					{!fullSize ? (
						<ChevronDoubleDownIcon className="h-5 w-5" />
					) : (
						<ChevronDoubleUpIcon className="h-5 w-5" />
					)}{" "}
				</button>
			)}
		</div>
	);
}
