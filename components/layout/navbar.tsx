'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { Menu, ChevronDown } from 'lucide-react';

import { siteConfig } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import {
	Sheet,
	SheetContent,
	SheetTrigger,
} from '@/components/ui/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();

	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 50);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<motion.header
			className={`fixed top-0 w-full z-50 transition-all duration-300 ${
				isScrolled
					? 'bg-background/95 backdrop-blur-sm shadow-md'
					: 'bg-transparent'
			}`}
			initial={{ y: -100 }}
			animate={{ y: 0 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container flex h-16 items-center justify-between py-4">
				{/* Logo */}
				<Link href="/" className="font-bold text-2xl text-gradient">
					Portfolio
				</Link>

				{/* Desktop Nav */}
				<nav className="hidden md:flex gap-6">
					{siteConfig.mainNav.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className={`text-sm font-medium transition-colors hover:text-primary ${
								pathname === item.href
									? 'text-primary'
									: 'text-muted-foreground'
							}`}
						>
							{item.title}
						</Link>
					))}
				</nav>

				{/* Desktop Action */}
				<div className="hidden md:flex">
					<Link href="/contact">
						<Button>Contact Me</Button>
					</Link>
				</div>

				{/* Mobile Menu */}
				<div className="md:hidden">
					<Sheet>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon">
								<Menu className="h-5 w-5" />
							</Button>
						</SheetTrigger>
						<SheetContent className="flex flex-col p-6">
							<nav className="flex flex-col gap-4">
								{siteConfig.mainNav.map((item) => (
									<Link
										key={item.href}
										href={item.href}
										className={`text-base font-medium ${
											pathname === item.href
												? 'text-primary'
												: 'text-muted-foreground'
										}`}
									>
										{item.title}
									</Link>
								))}
							</nav>

							<div className="mt-auto pt-6">
								<DropdownMenu>
									<DropdownMenuTrigger asChild>
										<Button variant="outline" className="w-full justify-between">
											Social Links
											<ChevronDown className="h-4 w-4 ml-2" />
										</Button>
									</DropdownMenuTrigger>
									<DropdownMenuContent>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.github} target="_blank">
												GitHub
											</Link>
										</DropdownMenuItem>
										<DropdownMenuItem asChild>
											<Link href={siteConfig.links.linkedin} target="_blank">
												LinkedIn
											</Link>
										</DropdownMenuItem>
									</DropdownMenuContent>
								</DropdownMenu>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</motion.header>
	);
}
