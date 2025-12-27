'use client';

import { motion } from 'framer-motion';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';

export default function ContactPage() {
	return (
		<section className="min-h-screen py-24 bg-background">
			<div className="container max-w-5xl mx-auto px-4">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="text-center mb-16"
				>
					<h1 className="text-4xl font-bold mb-4">Contact Me</h1>
					<p className="text-muted-foreground max-w-xl mx-auto">
						Feel free to reach out for internships, collaborations,
						or any professional opportunities.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 gap-14">

					{/* LEFT: CONTACT INFO */}
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						animate={{ opacity: 1, x: 0 }}
						className="space-y-6"
					>
						<div className="flex items-center gap-4">
							<Mail className="text-primary" />
							<a
								href="mailto:rekharuthika065@gmail.com"
								className="hover:underline"
							>
								rekharuthika065@gmail.com
							</a>
						</div>

						<div className="flex items-center gap-4">
							<Phone className="text-primary" />
							<a
								href="tel:+919959037430"
								className="hover:underline"
							>
								+91 99590 37430
							</a>
						</div>

						<div className="flex items-center gap-4">
							<Linkedin className="text-primary" />
							<a
								href="https://www.linkedin.com/in/rekharuthika0809"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								LinkedIn Profile
							</a>
						</div>

						<div className="flex items-center gap-4">
							<Github className="text-primary" />
							<a
								href="https://github.com/rekha98113"
								target="_blank"
								rel="noreferrer"
								className="hover:underline"
							>
								GitHub Profile
							</a>
						</div>
					</motion.div>

					{/* RIGHT: CONTACT FORM */}
					<motion.form
						action="https://formspree.io/f/maqyebzn"
						method="POST"
						initial={{ opacity: 0, x: 30 }}
						animate={{ opacity: 1, x: 0 }}
						className="space-y-5 bg-muted/40 p-8 rounded-xl border"
					>
						{/* Redirect after submit */}
						<input type="hidden" name="_next" value="/contact?success=true" />

						<input
							type="text"
							name="name"
							required
							placeholder="Your Name"
							className="w-full p-3 rounded-md bg-background border outline-none focus:ring-2 focus:ring-primary"
						/>

						<input
							type="email"
							name="email"
							required
							placeholder="Your Email"
							className="w-full p-3 rounded-md bg-background border outline-none focus:ring-2 focus:ring-primary"
						/>

						<select
							name="reason"
							required
							className="w-full p-3 rounded-md bg-background border outline-none focus:ring-2 focus:ring-primary"
						>
							<option value="">Reason for Contact</option>
							<option>Internship Opportunity</option>
							<option>Project Collaboration</option>
							<option>Hiring / Interview</option>
							<option>General Query</option>
						</select>

						<textarea
							name="message"
							required
							rows={5}
							placeholder="Your Message"
							className="w-full p-3 rounded-md bg-background border outline-none focus:ring-2 focus:ring-primary"
						/>

						<button
							type="submit"
							className="w-full py-3 rounded-md bg-primary text-primary-foreground font-semibold hover:opacity-90 transition"
						>
							Send Message
						</button>
					</motion.form>

				</div>
			</div>
		</section>
	);
}
