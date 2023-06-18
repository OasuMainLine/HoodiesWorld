import Image from "next/image";
import React from "react";
import Navlink from "./Navlink";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useCart } from "@/contexts/CartProvider";
import Menu from "./Menu";
import MenuItem from "./MenuItem";
import ShoppingButton from "./ShoppingButton";

interface HeaderProps {
	setShowCart: React.Dispatch<boolean>;
}
export default function Header({ setShowCart }: HeaderProps) {
	const cartContext = useCart();
	return (
		<header className="flex w-full flex-col">
			<div className="flex flex-col items-center justify-between gap-5 px-14 py-6 md:flex-row md:gap-0">
				<div className="flex w-full items-center justify-center md:w-auto">
					<Link href="/" className="mx-auto h-13 w-13 md:m-0">
						<Image
							width={130}
							height={130}
							src="/logo.png"
							alt="Hoodies World logo"
						/>
					</Link>
					<ShoppingButton
						className="block md:hidden"
						onClick={() => setShowCart(true)}
					/>
				</div>
				<nav className="flex gap-4">
					<Navlink href="/">Home</Navlink>
					<Navlink href="/hoodies">Hoodies</Navlink>
					<Menu title="Collections">
						<MenuItem href="/collections/vivid">Vivid</MenuItem>
						<MenuItem href="/collections/bold">Bold</MenuItem>
						<MenuItem href="/collections/monochrome">Monochrome</MenuItem>
						<MenuItem href="/hoodies">All</MenuItem>
					</Menu>
					<Navlink href="/about">About</Navlink>
				</nav>
				<ShoppingButton
					onClick={() => setShowCart(true)}
					className="hidden md:block"
				/>
			</div>
			<span className="before:contents-[''] h-px w-full px-14 before:block before:h-full before:w-full before:bg-gray-600"></span>
		</header>
	);
}
