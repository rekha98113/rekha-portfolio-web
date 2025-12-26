'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { fadeIn } from '@/lib/motion';

export function AboutPreview() {
	return (
		<section className="py-16 md:py-24">
			<div className="container px-4">
				<SectionHeader
					title="About Me"
					description="Designing intelligent systems at the intersection of electronics, embedded technology, and innovation."
				/>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
					{/* Profile Image */}
					<motion.div
						variants={fadeIn('right', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="relative h-[400px] rounded-lg overflow-hidden shadow-lg"
					>
						<Image
							src="/images/prof-photo.jpg"
							alt="Rekha Ruthika - Electronics and Communication Engineer"
							fill
							className="object-cover object-top"
							sizes="(max-width: 768px) 100vw, 50vw"
							priority
						/>
					</motion.div>

					{/* Content */}
					<motion.div
						variants={fadeIn('left', 0.3)}
						initial="hidden"
						whileInView="show"
						viewport={{ once: true }}
						className="flex flex-col justify-center"
					>
						<h3 className="text-2xl font-bold mb-4">
							Electronics & Embedded Systems Enthusiast
						</h3>

						<p className="text-muted-foreground mb-6">
							I am a fervent Electronics and Communication Engineering (ECE) student in my pre-final year at
							KL University, Hyderabad, with a strong focus on Embedded Systems, electronics, and
							programming. My interests lie in building intelligent, real-world systems by combining core
							engineering principles with modern technologies. I am driven by continuous learning,
							innovation, and the desire to contribute to impactful projects that bridge academic
							knowledge with practical applications.
						</p>

						{/* Info Cards */}
						<div className="grid grid-cols-2 gap-4 mb-6">
							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Domain</h4>
									<p className="text-sm text-muted-foreground">
									  ECE & Embedded Systems
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Skills</h4>
									<p className="text-sm text-muted-foreground">
										C, Java, Python , Data Structures & Algorithms , Basic Operating Systems
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Focus Areas</h4>
									<p className="text-sm text-muted-foreground">
										Machine Learning , IoT , AI ,Web development
									</p>
								</CardContent>
							</Card>

							<Card className="card-gradient">
								<CardContent className="p-4">
									<h4 className="font-semibold">Embedded & IoT</h4>
									<p className="text-sm text-muted-foreground">
										ESP32, ESP8266, MSP430, Arduino, STM32, Jetsan Nano
									</p>
								</CardContent>
							</Card>
						</div>

						<Button asChild>
							<Link href="/about">
								Learn More <ArrowRight className="ml-2 h-4 w-4" />
							</Link>
						</Button>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
