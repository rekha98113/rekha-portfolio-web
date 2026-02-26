'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { staggerContainer, fadeInScale } from '@/lib/motion';

const projects = [
	{
		title: 'ESP32-Based Robotic Arm & Car for Remote Assistance',
		description:
			'Developed a web-controlled robotic arm and vehicle system for remote operations in agriculture, delivery, and 3D printing. Currently extending the system into an AI-enabled rover for automated crop detection and harvesting.',
		image: '/projects/robo.jpg',
		tags: ['ESP32', 'Embedded C', 'IoT', 'Robotics'],
	},
	{
		title: 'Gesture Controlled User Interface',
		description:
			'Built a real-time gesture-driven interface enabling touchless interaction with digital systems. Focused on low-latency execution and efficient signal interpretation for smooth user experience.',
		image: '/projects/HAR.jpg',
		tags: ['OpenCV', 'Python'],
	},
	{
		title: 'Smart Traffic Management using Edge AI (Ongoing)',
		description:
			'Developing an intelligent traffic monitoring system using Edge AI for real-time vehicle detection and adaptive signal control. Focused on deploying optimized CNN models on edge devices to minimize latency and improve traffic flow efficiency. Secured 1 Lakh funding from TiHAN, IIT Hyderabad for Edge AI Traffic Management system.',
		image: '/projects/traffic.jpg',
		tags: ['Edge AI', 'CNN', 'Smart Cities'],
	},
];

export function ProjectsPreview() {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Featured Projects"
					description="Real-world projects showcasing my work in embedded systems, artificial intelligence, and intelligent automation."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
				>
					{projects.map((project, index) => (
						<motion.div
							key={index}
							variants={fadeInScale(index * 0.1)}
							className="flex"
						>
							<Card className="flex flex-col h-full card-gradient hover:shadow-[0_0_40px_rgba(0,255,255,0.18)] transition">
								
								<div className="relative h-48 w-full overflow-hidden rounded-t-lg">
									<img
										src={project.image}
										alt={project.title}
										className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
									/>
								</div>

								<CardContent className="p-6 flex flex-col flex-grow">
									<h3 className="text-xl font-bold mb-3">
										{project.title}
									</h3>

									<p className="text-muted-foreground mb-6 flex-grow">
										{project.description}
									</p>

									<div className="flex flex-wrap gap-2 mt-auto">
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
				</motion.div>

				<div className="flex justify-center mt-12">
					<Button asChild>
						<Link href="/projects">
							View All Projects <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}