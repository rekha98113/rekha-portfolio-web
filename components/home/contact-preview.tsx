'use client';

import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { SectionHeader } from '@/components/ui/section-header';
import { fadeIn } from '@/lib/motion';

export function ContactPreview() {
	return (
		<section className="py-16 md:py-24 bg-muted/30">
			<div className="container px-4">
				<SectionHeader
					title="Get In Touch"
					description="Interested in working together or have a question? Feel free to reach out!"
					className="text-center"
				/>

				<motion.div
					variants={fadeIn('up', 0.3)}
					initial="hidden"
					whileInView="show"
					viewport={{ once: true }}
					className="max-w-md mx-auto mt-10"
				>
					<form
						action="https://formspree.io/f/maqyebzn"
						method="POST"
						className="space-y-4"
					>
						{/* Redirect after submit */}
						<input type="hidden" name="_next" value="/?success=true" />

						<div>
							<Input
								type="text"
								name="name"
								placeholder="Your Name"
								required
							/>
						</div>

						<div>
							<Input
								type="email"
								name="email"
								placeholder="Your Email"
								required
							/>
						</div>

						<div>
							<Textarea
								name="message"
								placeholder="Your Message"
								required
								className="min-h-[150px]"
							/>
						</div>

						<Button type="submit" className="w-full">
							Send Message <Send className="ml-2 h-4 w-4" />
						</Button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}