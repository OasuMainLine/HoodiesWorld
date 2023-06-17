import { useCart } from "@/contexts/CartProvider";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import React from "react";

interface ShoppingButtonProps extends React.HTMLAttributes<HTMLDivElement> {}
export default function ShoppingButton({
	className,
	...props
}: ShoppingButtonProps) {
	const cartContext = useCart();
	return (
		<div
			className={`relative h-fit w-fit cursor-pointer ${className}`}
			{...props}
		>
			<ShoppingBagIcon className="h-8 w-8" />
			<span className="absolute -bottom-2 -right-1 grid h-5 w-5 place-content-center rounded-full bg-red-600 text-xs text-brand-white">
				{cartContext?.purchases.length || 0}
			</span>
		</div>
	);
}
