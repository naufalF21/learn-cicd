import Link from "next/link";

export default function Home() {
	return (
		<div>
			<h1>Home</h1>
			<ul>
				<li>
					<Link href="/about">About</Link>
				</li>
				<li>
					<Link href="/contact">Contact</Link>
				</li>
				<li>
					<Link href="/shop">Shop</Link>
				</li>
			</ul>
		</div>
	);
}
