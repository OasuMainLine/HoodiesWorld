import Link from "next/link";
import React from "react";

export default function Footer() {
	return (
		<footer className="flex flex-col justify-between gap-4 bg-orange-600 px-5 py-5 text-center md:flex-row md:gap-0 md:px-14">
			<p className="text-brand-white">@2023 Hoodie World</p>
			<div className="flex justify-center gap-4 text-base font-semibold text-brand-white">
				<Link href="/">Home</Link>
				<Link href="/hoodies">Hoodies</Link>
				<Link href="/about">About</Link>
			</div>
			<p className="text-brand-white">
				All the images used are from{" "}
				<a
					className="font-bold underline"
					target="_blank"
					href="https://www.pexels.com/"
				>
					Pexels
				</a>
			</p>
		</footer>
	);
}
