import { _price } from "@/lib/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ProductCardProps {
	title: string;
	image: string;
	tags: string[];
	price: number;
	handle: string;
}

export default function ProductCard({
	title,
	image,
	tags,
	price,
	handle,
}: ProductCardProps) {
	return (
		<Link href={`/products/${handle}`} className="flex flex-col">
			<div className="aspect-h-4 aspect-w-3 md:aspect-w-4 overflow-hidden">
				<Image
					height={328}
					width={301}
					src={image}
					className="h-full w-full object-cover object-top p-0 transition-transform duration-200 hover:scale-110"
					alt={title}
				/>
			</div>
			<div>
				<p className="text-lg md:text-xl min-h-[2.5rem] leading-5">{title}</p>
				<p className="text-sm text-gray-700">
					{tags.map((tag) => tag[0].toUpperCase() + tag.slice(1)).join(", ")}
				</p>

				<p className="text-base font-medium text-orange-600">{_price(price)}</p>
			</div>
		</Link>
	);
}
