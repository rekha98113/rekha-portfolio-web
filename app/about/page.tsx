'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

export default function AboutPage() {
	return (
		<section className="py-20">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="A brief overview of my background, skills, and interests."
				/>

				<div className="grid lg:grid-cols-2 gap-12 mt-16 items-center">

					{/* PROFILE IMAGE */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
						className="flex justify-center"
					>
						<div className="relative w-64 h-64 rounded-2xl overflow-hidden border border-muted">
							<Image
								src="/images/prof-photo.jpg"

								alt="Rekha Ruthika"
								fill
								className="object-cover"
							/>
						</div>
					</motion.div>

					{/* ABOUT CONTENT */}
					<motion.div
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Card className="card-gradient">
							<CardContent className="p-6 space-y-4 text-muted-foreground">

								<p>
									I am a <span className="text-foreground font-medium">
									pre-final year Electronics and Communication Engineering student
									</span> at KL University, Hyderabad, with a strong interest in
									embedded systems, communication technologies, and intelligent
									software-driven solutions.
								</p>

								<p>
									My academic journey has provided me with a solid foundation in
									<span className="text-foreground font-medium">
									&nbsp;embedded systems, data structures, and basic operating systems
									</span>. I enjoy applying theoretical concepts to solve
									real-world engineering challenges.
								</p>

								<p>
									I have hands-on experience with platforms such as
									<span className="text-foreground font-medium">
									&nbsp;ESP32, Arduino, and STM32
									</span>, along with tools like
									<span className="text-foreground font-medium">
									&nbsp;MATLAB, LTspice, and Cadence
									</span>.
								</p>

								<p>
									I am motivated, curious, and committed to continuous learning.
									My goal is to contribute to impactful projects that integrate
									hardware, software, and intelligent systems.
								</p>

							</CardContent>
						</Card>
					</motion.div>

				</div>
			</div>
		</section>
	);
}
