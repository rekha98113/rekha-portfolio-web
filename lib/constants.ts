export const siteConfig = {
	name: 'Engineering Portfolio',
	description:
		'A professional portfolio website for an Electronics and Communication Engineering student.',
	mainNav: [
		{ title: 'Home', href: '/' },
		{ title: 'About', href: '/about' },
		{ title: 'Education', href: '/education' },
		{ title: 'Skills', href: '/skills' },
		{ title: 'Projects', href: '/projects' },
		{ title: 'Certificates', href: '/certificates' },
		{ title: 'Contact', href: '/contact' },
	],
	links: {
		github: 'https://github.com/yourusername',
		linkedin: 'https://linkedin.com/in/yourusername',
		twitter: 'https://twitter.com/yourusername',
		facebook: 'https://facebook.com/yourusername',
		instagram: 'https://instagram.com/yourusername',
		whatsapp: 'https://wa.me/yourphonenumber',
		email: 'mailto:youremail@example.com',
		phone: 'tel:+1234567890',
	},
};

/* ===========================
   EXPERIENCE (DATA ONLY)
   Not shown in navbar
=========================== */

export type Experience = {
	title: string;
	company: string;
	location: string;
	startDate: string;
	endDate: string;
	description: string[];
	technologies: string[];
};

export const experiences: Experience[] = [
	{
		title: 'Engineering Intern',
		company: 'Tech Company',
		location: 'City, Country',
		startDate: 'May 2023',
		endDate: 'Aug 2023',
		description: [
			'Worked on developing and testing embedded system components',
			'Collaborated with senior engineers on system integration',
			'Performed validation and testing of firmware modules',
		],
		technologies: ['C', 'Python', 'MATLAB', 'Git'],
	},
];

/* ===========================
   PROJECTS
=========================== */

export type Project = {
	title: string;
	description: string;
	image: string;
	tags: string[];
	link?: string;
	repo?: string;
};

export const projects: Project[] = [
	{
		title: 'ESP32-Based Robotic Arm & Car for Remote Assistance',
		description:
			'Web-controlled robotic arm and vehicle system for agriculture, delivery, and automation, extended toward AI-enabled autonomous rover functionality.',
		image: '/projects/robotic-arm.jpg',
		tags: ['ESP32', 'Embedded C', 'IoT', 'Robotics'],
	},
	{
		title: 'Human Activity Recognition using Deep Learning',
		description:
			'Video-based human activity recognition using deep learning architectures with performance and accuracy evaluation.',
		image: '/projects/activity-recognition.jpg',
		tags: ['Deep Learning', 'Python', 'Computer Vision'],
	},
	{
		title: 'Smart Traffic Management using Edge AI',
		description:
			'Edge AI-based traffic monitoring system for real-time vehicle detection and adaptive signal control.',
		image: '/projects/smart-traffic.jpg',
		tags: ['Edge AI', 'CNN', 'Smart Cities'],
	},
];

/* ===========================
   EDUCATION
=========================== */

export type Education = {
	degree: string;
	field: string;
	institution: string;
	location: string;
	startDate: string;
	endDate: string;
	gpa?: string;
	achievements: string[];
};

export const education: Education[] = [
	{
		degree: 'B.Tech',
		field: 'Electronics and Communication Engineering',
		institution: 'KL University, Hyderabad',
		location: 'Hyderabad, India',
		startDate: '2023',
		endDate: '2027 (Expected)',
		gpa: '9.83 CGPA',
		achievements: [
			'Merit-based academic performance',
			'Active project and research involvement',
		],
	},
];

/* ===========================
   CERTIFICATES
=========================== */

export type Certificate = {
	title: string;
	issuer: string;
	date: string;
	id?: string;
	url?: string;
	pdf?: string;
};

export const certificates: Certificate[] = [
	{
		title: 'AWS Cloud Practitioner',
		issuer: 'Amazon Web Services',
		date: '2024',
	},
	{
		title: 'Automation Anywhere RPA',
		issuer: 'Automation Anywhere University',
		date: '2024',
	},
];

/* ===========================
   SKILLS
=========================== */

export type Skill = {
	name: string;
	level: number;
	category: 'technical' | 'software' | 'soft';
};

export const skills: Skill[] = [];

/* ===========================
   BLOG DATA (OPTIONAL)
   Not shown in navbar
=========================== */

export type BlogPost = {
	title: string;
	excerpt: string;
	date: string;
	author: string;
	image: string;
	slug: string;
};

export const blogPosts: BlogPost[] = [];
