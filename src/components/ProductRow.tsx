import Link from "next/link";
import React, { ReactElement } from "react";

interface ProductRowProps {
	title?: string;
	link?: string;
	children: ReactElement | ReactElement[];
}
export default function ProductRow({ title, link, children }: ProductRowProps) {
	return (
		<div className="flex flex-col gap-3 px-5 md:px-14">
			{title && (
				<>
					<h2 className="text-3xl font-bold">{title}</h2>
					<span className="block h-px w-full bg-gray-300"></span>
				</>
			)}
			<div className="grid grid-cols-2 md:grid-cols-4 gap-y-8 gap-x-4 md:gap-y-0 grid-flow-row md:grid-rows-1">{children}</div>
			{link != undefined && link.length > 0 && (
				<div className="flex h-fit w-full items-center justify-center">
					<Link
						className="h-fit w-fit bg-orange-600 px-4 py-2 text-brand-white transition-all hover:brightness-110"
						href={link}
					>
						View More
					</Link>
				</div>
			)}
		</div>
	);
}
