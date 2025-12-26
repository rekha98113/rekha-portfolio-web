'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
	Mail,
	Phone,
	Linkedin,
	Github,
	FileText
} from 'lucide-react';

export function Footer() {
	return (
		<footer className="border-t border-border/50 bg-background">
			<div className="container px-6 py-14">

				{/* TOP GRID */}
				<div className="grid gap-12 md:grid-cols-4">

					{/* BRAND */}
					<div>
						<h3 className="text-2xl font-bold text-gradient mb-3">
							Portfolio
						</h3>
						<p className="text-sm text-muted-foreground leading-relaxed">
							A professional portfolio showcasing my skills,
							projects, and achievements in engineering.
						</p>

						{/* CONTACT ICONS */}
						<div className="mt-6 flex flex-wrap gap-3">
							{[
								{
									icon: Phone,
									href: 'tel:+919959037430',
									label: 'Phone',
								},
								{
									icon: Mail,
									href: 'mailto:rekharuthika065@gmail.com',
									label: 'Email',
								},
								{
									icon: Linkedin,
									href: 'https://www.linkedin.com/in/rekharuthika0809',
									label: 'LinkedIn',
								},
								{
									icon: Github,
									href: 'https://github.com/rekha98113',
									label: 'GitHub',
								},
								{
									icon: FileText,
									href: '/resume.pdf',
									label: 'Resume',
								},
							].map(({ icon: Icon, href, label }, i) => (
								<motion.a
									key={i}
									href={href}
									target="_blank"
									rel="noreferrer"
									whileHover={{ scale: 1.15 }}
									whileTap={{ scale: 0.95 }}
									className="p-3 rounded-xl border border-border/50
										bg-muted/20 hover:bg-primary/10
										hover:shadow-[0_0_20px_rgba(0,255,255,0.35)]
										transition-all"
									aria-label={label}
								>
									<Icon className="h-5 w-5 text-primary" />
								</motion.a>
							))}
						</div>
					</div>

					{/* ABOUT */}
					<div>
						<h4 className="font-semibold mb-4">About</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/about" className="hover:text-primary">About Me</Link></li>
							<li><Link href="/education" className="hover:text-primary">Education</Link></li>
							<li><Link href="/skills" className="hover:text-primary">Skills</Link></li>
						</ul>
					</div>

					{/* WORK */}
					<div>
						<h4 className="font-semibold mb-4">Work</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/projects" className="hover:text-primary">Projects</Link></li>
							<li><Link href="/certificates" className="hover:text-primary">Certificates</Link></li>
						</ul>
					</div>

					{/* CONNECT */}
					<div>
						<h4 className="font-semibold mb-4">Connect</h4>
						<ul className="space-y-3 text-sm text-muted-foreground">
							<li><Link href="/contact" className="hover:text-primary">Contact</Link></li>
							<li>
								<a href="/resume.pdf" target="_blank" className="hover:text-primary">
									Resume
								</a>
							</li>
						</ul>
					</div>

				</div>

				{/* BOTTOM BAR */}
				<div className="mt-12 pt-6 border-t border-border/50 flex flex-col md:flex-row justify-between text-sm text-muted-foreground">
					<p>© 2025 Engineering Portfolio. All rights reserved.</p>
					<div className="flex gap-4 mt-2 md:mt-0">
						<Link href="/privacy" className="hover:text-primary">Privacy Policy</Link>
						<Link href="/terms" className="hover:text-primary">Terms of Service</Link>
					</div>
				</div>

			</div>
		</footer>
	);
}
