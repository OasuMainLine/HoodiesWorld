import Image from "next/image";
import React from "react";

export default function About() {
	return (
		<section id="about" className="px-5 md:px-14 md:pt-4">
			<h1 className="text-center text-4xl font-bold">About us</h1>
			<div className="mt-4 flex flex-col items-center gap-5 md:mt-5">
				<p className="flex-[0_0_50%] text-lg md:text-xl">
					At Hoodie World, we understand that a hoodie is more than just a piece
					of clothing; it&apos;s a symbol of self-expression and personal style.
					That&apos;s why we curate our collection to cater to diverse tastes
					and preferences, ensuring that there&apos;s something for everyone.
				</p>

				<div className="relative grid h-full w-full flex-1/2 grid-cols-2 grid-rows-2 md:grid-cols-[repeat(3,33%)] md:grid-rows-1">
					<Image
						width={500}
						height={500}
						src="/images/about_image1.webp"
						className="about-image"
						alt="A man with an orange hoodie in a snowy place"
					/>
					<Image
						width={500}
						height={500}
						src="/images/about_image2.webp"
						className="about-image"
						alt="A man with a hoodie that says king"
					/>

					<Image
						width={500}
						height={500}
						src="/images/about_image3.webp"
						className="about-image col-span-2 md:col-auto"
						alt="A man with a hoodie that says we come in peace"
					/>
				</div>
			</div>
		</section>
	);
}
