'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { SectionHeader } from '@/components/ui/section-header';
import { Card, CardContent } from '@/components/ui/card';

const certificates = [
	{
		title: 'AWS Cloud Practitioner',
		image: '/certificates/aws cloud.jpg',
		issuer: 'Amazon Web Services',
		year: '2025',
	},
	{
		title: 'Automation Anywhere',
		image: '/certificates/automation anywhere.png',
		issuer: 'Automation Anywhere University',
		year: '2025',
	},
	{
		title: 'Data Structures and Algorithms',
		image: '/certificates/cps.jpg',
		issuer: 'Being Zero',
		year: '2025',
	},
	{
		title: 'InnovateTech Certification',
		image: '/certificates/innovatech.jpg',
		issuer: 'KL University',
		year: '2025',
	},
	{
		title: 'Salesforce Certification',
		image: '/certificates/salesforce.png',
		issuer: 'Salesforce',
		year: '2025',
	},
];

export default function CertificatesPage() {
	return (
		<section className="py-20">
			<div className="container px-4">
				<SectionHeader
					title="Certificates & Achievements"
					description="Certifications earned through dedication, consistency, and hands-on learning."
				/>

				{/* CERTIFICATES GRID */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

					{certificates.slice(0, 3).map((cert, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: index * 0.08 }}
							whileHover={{ scale: 1.04 }}
						>
							<CertificateCard cert={cert} />
						</motion.div>
					))}

					{/* SECOND ROW — CENTERED */}
					<div className="lg:col-span-3 flex justify-center gap-8 flex-wrap">
						{certificates.slice(3).map((cert, index) => (
							<motion.div
								key={index}
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: (index + 3) * 0.08 }}
								whileHover={{ scale: 1.04 }}
								className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1rem)]"
							>
								<CertificateCard cert={cert} />
							</motion.div>
						))}
					</div>

				</div>
			</div>
		</section>
	);
}

/* 🔹 Reusable Card Component */
function CertificateCard({ cert }: { cert: any }) {
	return (
		<Card className="card-gradient w-full max-w-md mx-auto transition hover:shadow-[0_0_25px_rgba(173,216,230,0.25)]">
			<CardContent className="p-5">
				<h3 className="font-semibold mb-3 text-center">
					{cert.title}
				</h3>

				<div className="relative w-full h-44 mb-4">
					<Image
						src={cert.image}
						alt={cert.title}
						fill
						className="object-contain rounded-md"
					/>
				</div>

				<div className="text-center text-sm text-muted-foreground space-y-1">
					<p>
						<span className="font-medium text-foreground">
							Presented by:
						</span>{' '}
						{cert.issuer}
					</p>
					<p>
						<span className="font-medium text-foreground">
							Year:
						</span>{' '}
						{cert.year}
					</p>
				</div>
			</CardContent>
		</Card>
	);
}
