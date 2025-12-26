'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, FileDown } from 'lucide-react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { useEffect, useRef, useState } from 'react';

import { Button } from '@/components/ui/button';
import { fadeIn, staggerContainer } from '@/lib/motion';

export function HeroSection() {
	const [vantaEffect, setVantaEffect] = useState<any>(null);
	const vantaRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!vantaEffect && vantaRef.current) {
			setVantaEffect(
				NET({
					el: vantaRef.current,
					THREE,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					scale: 1.0,
					scaleMobile: 1.0,
					color: 0x00ffff,
					backgroundColor: 0x0b0b16,
					points: 10.0,
					maxDistance: 18.0,
					spacing: 18.0,
					showDots: false,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);

	return (
		<section className="relative overflow-hidden min-h-[90vh] flex items-center">
			{/* Background */}
			<div ref={vantaRef} className="absolute inset-0 z-0 opacity-70" />

			{/* Content */}
			<div className="container relative z-10 px-4">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
					className="max-w-4xl mx-auto text-center"
				>
					<motion.h2
						variants={fadeIn('up', 0.2)}
						className="text-lg md:text-xl font-semibold text-primary"
					>
						Electronics & Communication Engineering
					</motion.h2>

					<motion.h1
						variants={fadeIn('up', 0.3)}
						className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mt-4"
					>
						<span className="text-gradient">Rekha Ruthika</span>
					</motion.h1>

					<motion.p
						variants={fadeIn('up', 0.5)}
						className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto"
					>
						Engineering ideas into intelligent, real-world solutions.
					</motion.p>

					<motion.div
						variants={fadeIn('up', 0.7)}
						className="mt-10 flex flex-wrap gap-4 justify-center"
					>
						<Button size="lg" asChild>
							<Link href="/projects">
								View Projects <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>

						<Button size="lg" variant="outline" asChild>
							<a
								href="/resume.pdf"
								target="_blank"
								rel="noreferrer"
								download
							>
								Resume <FileDown className="ml-2 h-4 w-4" />
							</a>
						</Button>
					</motion.div>
				</motion.div>
			</div>

			{/* Bottom fade */}
			<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
		</section>
	);
}
