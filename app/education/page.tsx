'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export default function EducationPage() {
	return (
		<section className="py-20">
			<div className="container px-4">
				<SectionHeader
					title="Education"
					description="My academic journey — learning, growing, and building step by step."
				/>

				<div className="mt-16 space-y-14">

					{/* 🎓 B.Tech */}
					<motion.div
						variants={fadeIn('up', 0.1)}
						initial="hidden"
						animate="show"
						className="grid md:grid-cols-2 gap-10 items-center"
					>
						<Card className="card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold">
									B.Tech – Electronics & Communication Engineering
								</h3>

								<p className="text-muted-foreground mt-1">
									<Link
										href="https://www.kluniversity.in/"
										target="_blank"
										className="text-primary hover:underline"
									>
										KL University, Hyderabad
									</Link>
								</p>

								<div className="flex gap-4 mt-3 text-sm text-muted-foreground">
									<span>2023 – 2027 (Expected)</span>
									<span>CGPA: 9.83</span>
								</div>

								<p className="mt-4 text-sm text-muted-foreground">
									Focused on Embedded Systems, Communication Technologies, and
									real-world AI-driven engineering solutions.
								</p>
							</CardContent>
						</Card>

						{/* Graduation GIF – Bigger + Transparent */}
						<div className="flex justify-center">
							<motion.img
								src="/gifs/education/graduation-schl.gif"
								alt="Graduation animation"
								className="w-64 h-64 object-contain bg-transparent"
								animate={{ y: [0, -18, 0] }}
								whileHover={{ scale: 1.1, rotate: 2 }}
								transition={{ repeat: Infinity, duration: 3 }}
							/>
						</div>
					</motion.div>

					{/* 📘 Intermediate */}
					<motion.div
						variants={fadeIn('up', 0.2)}
						initial="hidden"
						animate="show"
						className="grid md:grid-cols-2 gap-10 items-center"
					>
						{/* Studying Girl GIF */}
						<div className="flex justify-center order-2 md:order-1">
							<motion.img
								src="/gifs/education/girlgif.gif"
								alt="Student studying animation"
								className="w-60 h-60 object-contain bg-transparent"
								animate={{ y: [0, -10, 0] }}
								whileHover={{ scale: 1.08 }}
								transition={{ repeat: Infinity, duration: 3.5 }}
							/>
						</div>

						<Card className="card-gradient order-1 md:order-2">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold">
									Intermediate (MPC)
								</h3>

								<p className="text-muted-foreground mt-1">
									Gayathri Junior College
								</p>

								<div className="flex gap-4 mt-3 text-sm text-muted-foreground">
									<span>2021 – 2023</span>
									<span>CGPA: 9.8</span>
								</div>

								<p className="mt-4 text-sm text-muted-foreground">
									Built a strong foundation in Mathematics, Physics, and Chemistry
									that shaped analytical and logical thinking.
								</p>
							</CardContent>
						</Card>
					</motion.div>

					{/* 🏫 High School */}
					<motion.div
						variants={fadeIn('up', 0.3)}
						initial="hidden"
						animate="show"
						className="grid md:grid-cols-2 gap-10 items-center"
					>
						<Card className="card-gradient">
							<CardContent className="p-6">
								<h3 className="text-xl font-bold">
									High School
								</h3>

								<p className="text-muted-foreground mt-1">
									Sri Narayana High School, Hyderabad
								</p>

								<div className="flex gap-4 mt-3 text-sm text-muted-foreground">
									<span>2020 – 2021</span>
									<span>CGPA: 10</span>
								</div>

								<p className="mt-4 text-sm text-muted-foreground">
									Developed discipline, curiosity, and consistency —
									the habits that shaped my early learning journey.
								</p>
							</CardContent>
						</Card>

						{/* NEW School GIF + Cute Hover */}
						<div className="flex justify-center">
							<motion.img
								src="/gifs/education/schl.gif"
								alt="Cute school animation"
								className="w-60 h-60 object-contain bg-transparent"
								animate={{ y: [0, -8, 0] }}
								whileHover={{
									scale: 1.15,
									rotate: -3,
								}}
								transition={{ repeat: Infinity, duration: 4 }}
							/>
						</div>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
