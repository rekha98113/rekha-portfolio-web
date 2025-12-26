'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export default function ContactPage() {
	return (
		<section className="py-20">
			<div className="container px-4">
				<SectionHeader
					title="Contact"
					description="Open to opportunities, collaborations, and meaningful conversations."
				/>

				{/* CONTACT INFO CARDS */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

					<ContactCard icon={<Mail />} title="Email" value="rekharuthika065@gmail.com" link="mailto:rekharuthika065@gmail.com" />
					<ContactCard icon={<Phone />} title="Phone" value="+91 99590 37430" link="tel:+919959037430" />
					<ContactCard icon={<MapPin />} title="Location" value="Hyderabad, India" />
					<ContactCard icon={<Linkedin />} title="LinkedIn" value="linkedin.com/in/rekharuthika0809" link="https://www.linkedin.com/in/rekharuthika0809" />
					<ContactCard icon={<Github />} title="GitHub" value="github.com/rekha98113" link="https://github.com/rekha98113" />

				</div>

				{/* CONTACT FORM */}
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="max-w-2xl mx-auto mt-24"
				>
					<Card className="card-gradient">
						<CardContent className="p-8 space-y-6">

							<h3 className="text-xl font-semibold text-center">
								Send a Message
							</h3>

							{/* NAME */}
							<input
								type="text"
								placeholder="Your Name"
								className="w-full px-4 py-3 rounded-md bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
							/>

							{/* EMAIL */}
							<input
								type="email"
								placeholder="Your Email"
								className="w-full px-4 py-3 rounded-md bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
							/>

							{/* DROPDOWN / SUGGESTION BOX */}
							<select
								className="w-full px-4 py-3 rounded-md bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary"
							>
								<option value="">Reason for Contact</option>
								<option>Internship / Job Opportunity</option>
								<option>Project Collaboration</option>
								<option>Research / Academic Discussion</option>
								<option>Portfolio Feedback</option>
								<option>General Query</option>
							</select>

							{/* MESSAGE */}
							<textarea
								placeholder="Your Message"
								rows={4}
								className="w-full px-4 py-3 rounded-md bg-background border border-muted focus:outline-none focus:ring-2 focus:ring-primary resize-none"
							/>

							{/* SUBMIT */}
							<Button className="w-full">
								Send Message
							</Button>

						</CardContent>
					</Card>
				</motion.div>

			</div>
		</section>
	);
}

/* 🔹 Reusable Contact Card */
function ContactCard({
	icon,
	title,
	value,
	link,
}: {
	icon: React.ReactNode;
	title: string;
	value: string;
	link?: string;
}) {
	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			whileHover={{ scale: 1.05 }}
		>
			<Card className="card-gradient transition hover:shadow-[0_0_25px_rgba(99,102,241,0.25)]">
				<CardContent className="p-6 flex flex-col items-center text-center space-y-3">
					<div className="text-primary w-8 h-8">{icon}</div>
					<h3 className="font-semibold">{title}</h3>

					{link ? (
						<a
							href={link}
							target="_blank"
							rel="noreferrer"
							className="text-sm text-muted-foreground hover:text-primary transition"
						>
							{value}
						</a>
					) : (
						<p className="text-sm text-muted-foreground">{value}</p>
					)}
				</CardContent>
			</Card>
		</motion.div>
	);
}
