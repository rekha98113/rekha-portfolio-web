'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { staggerContainer, fadeInScale } from '@/lib/motion';

const projects = [
	{
		title: 'ESP32-Based Robotic Arm & Car',
		description:
			'Web-controlled robotic system with AI rover extension for real-world automation.',
		image: '/projects/robo.jpg',
		tags: ['ESP32', 'IoT', 'Robotics'],
	},
	{
		title: 'Human Activity Recognition',
		description:
			'Deep learning-based video activity recognition using CNN architectures.',
		image: '/projects/HAR.jpg',
		tags: ['Deep Learning', 'CNN'],
	},
	{
		title: 'Smart Traffic Management',
		description:
			'Edge AI-based adaptive traffic monitoring and signal control system.',
		image: '/projects/traffic.jpg',
		tags: ['Edge AI', 'CNN'],
	},
];

export default function ProjectsPage() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					animate="show"
				>
					<motion.h1
						variants={fadeInScale(0.1)}
						className="text-4xl font-bold text-center mb-4"
					>
						Projects
					</motion.h1>

					<motion.p
						variants={fadeInScale(0.2)}
						className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
					>
						A showcase of my engineering projects demonstrating real-world impact.
					</motion.p>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{projects.map((project, index) => (
							<motion.div
								key={index}
								variants={fadeInScale(index * 0.1)}
							>
								<Card className="card-gradient h-full">
									<div className="relative h-48 w-full">
										<Image
											src={project.image}
											alt={project.title}
											fill
											priority={index === 0}
											className="object-cover rounded-t-lg"
										/>
									</div>

									<CardContent className="p-6">
										<h3 className="font-bold text-xl mb-2">
											{project.title}
										</h3>
										<p className="text-muted-foreground mb-4">
											{project.description}
										</p>
										<div className="flex flex-wrap gap-2">
											{project.tags.map((tag, i) => (
												<Badge key={i} variant="secondary">
													{tag}
												</Badge>
											))}
										</div>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>
				</motion.div>
			</div>
		</section>
	);
}
