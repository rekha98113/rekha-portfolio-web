'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn, staggerContainer } from '@/lib/motion';

const skillDomains = [
	{
		title: 'Programming Languages',
		skills: ['C', 'Java', 'Python'],
	},
	{
		title: 'Embedded & IoT',
		skills: ['ESP32', 'ESP8266', 'MSP430', 'Arduino', 'STM32', 'PCB Design'],
	},
	{
		title: 'Electronic Design Tools',
		skills: ['LTspice', 'Cadence', 'MATLAB', 'Proteus'],
	},
	{
		title: 'Core Concepts',
		skills: ['Data Structures & Algorithms', 'Basic Operating Systems'],
	},
	{
		title: 'Artificial Intelligence',
		skills: ['Machine Learning with Python', 'NumPy'],
	},
	{
		title: 'Web Technologies',
		skills: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Next.js'],
	},
];

export function SkillsPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="Skills & Expertise"
					description="A snapshot of my technical strengths across electronics, embedded systems, and intelligent technologies."
				/>

				<motion.div
					variants={staggerContainer()}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
				>
					{skillDomains.map((domain, index) => (
						<motion.div
							key={index}
							variants={fadeIn('up', index * 0.1)}
						>
							<Card className="card-gradient h-full hover:shadow-[0_0_30px_rgba(0,255,255,0.15)] transition">
								<CardContent className="p-6">
									<h3 className="text-xl font-bold mb-4">
										{domain.title}
									</h3>

									<ul className="space-y-2 text-muted-foreground">
										{domain.skills.map((skill, i) => (
											<li
												key={i}
												className="flex items-center gap-2"
											>
												<span className="w-2 h-2 rounded-full bg-primary" />
												{skill}
											</li>
										))}
									</ul>
								</CardContent>
							</Card>
						</motion.div>
					))}
				</motion.div>

				<div className="flex justify-center mt-12">
					<Button asChild>
						<Link href="/skills">
							View Detailed Skills <ArrowRight className="ml-2 h-4 w-4" />
						</Link>
					</Button>
				</div>
			</div>
		</section>
	);
}
