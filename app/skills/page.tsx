'use client';

import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

export default function SkillsPage() {
	return (
		<section className="py-20 relative overflow-hidden">
			<div className="container px-4">
				<SectionHeader
					title="Skills"
					description="Focused learning, cozy coding vibes, and continuous improvement."
				/>

				<div className="grid lg:grid-cols-3 gap-12 mt-16 items-center">

					{/* 🧠 SKILLS CARDS */}
					<div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
						{[
							{
								title: 'Programming Languages',
								items: ['C', 'Java', 'Python'],
							},
							{
								title: 'Electronic Design Tools',
								items: ['LTspice', 'Cadence', 'MATLAB', 'Proteus'],
							},
							{
								title: 'Embedded & IoT',
								items: ['ESP32', 'ESP8266', 'Arduino', 'STM32', 'PCB Design'],
							},
							{
								title: 'Core Concepts',
								items: ['DSA', 'Basic Operating Systems'],
							},
							{
								title: 'Web Technologies',
								items: ['HTML', 'CSS', 'JavaScript (Basics)'],
							},
							{
								title: 'Artificial Intelligence',
								items: ['Machine Learning (Python)', 'NumPy'],
							},
						].map((group, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 25 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
								whileHover={{ scale: 1.05 }}
							>
								<Card className="card-gradient hover:shadow-[0_0_30px_rgba(255,182,193,0.25)] transition">
									<CardContent className="p-6">
										<h3 className="text-lg font-bold mb-4 text-primary">
											{group.title}
										</h3>

										<ul className="space-y-2 text-sm text-muted-foreground">
											{group.items.map((item, i) => (
												<li
													key={i}
													className="flex items-center gap-2 hover:text-foreground transition"
												>
													<span className="w-2 h-2 rounded-full bg-primary"></span>
													{item}
												</li>
											))}
										</ul>
									</CardContent>
								</Card>
							</motion.div>
						))}
					</div>

					{/* 🎧 ANIME CODING GIRL */}
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.6 }}
						className="flex flex-col items-center text-center"
					>
						<motion.img
							src="/skills/skillgif.gif"
							alt="Anime girl coding with music"
							className="w-72 h-72 object-contain bg-transparent"
							animate={{ y: [0, -10, 0] }}
							whileHover={{
								scale: 1.1,
								rotate: 1,
							}}
							transition={{
								repeat: Infinity,
								duration: 3,
							}}
						/>

						<p className="mt-4 text-sm text-muted-foreground max-w-xs">
							Headphones on 🎧, code flowing,  
							and learning never paused 🍿
						</p>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
