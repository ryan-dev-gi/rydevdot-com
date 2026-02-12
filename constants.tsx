
import { Project, Service, Testimonial } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'MediCare',
    description: 'A comprehensive healthcare management system designed for patient records, automated appointment scheduling, and secure telemedicine consultations.',
    category: 'Healthcare / SaaS',
    image: 'https://images.unsplash.com/photo-1504813184591-01592fd03cf7?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://medicare-neon-seven.vercel.app/',
    github: 'https://github.com/ryan-dev-gi/medicare',
    tags: ['React', 'Firebase', 'Tailwind CSS']
  },
  {
    id: '2',
    title: 'Lumina Luxe',
    description: 'A high-end luxury e-commerce platform featuring an immersive shopping experience, real-time product discovery, and integrated secure payment gateways.',
    category: 'E-commerce / Retail',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800&h=600',
    link: 'https://lumina-luxe-e-commerce-snowy.vercel.app/',
    github: 'https://github.com/ryan-dev-gi/lumina-luxe',
    tags: ['Next.js', 'Stripe', 'Tailwind CSS']
  },
  {
    id: '3',
    title: 'EcoSphere App',
    description: 'A mobile application focused on local sustainability, carbon footprint tracking, and community-led green initiatives.',
    category: 'Mobile / GreenTech',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=800&h=600',
    link: '#',
    github: 'https://github.com/ryan-dev-gi/ecosphere',
    tags: ['React Native', 'Node.js', 'Tailwind']
  }
];

export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Brand Identity',
    description: 'Crafting unique visual stories that resonate with your target audience through deep market research.',
    icon: 'Palette'
  },
  {
    id: 's2',
    title: 'Full-Stack Development',
    description: 'Building robust, scalable applications using modern stacks like MERN and Next.js.',
    icon: 'Code2'
  },
  {
    id: 's3',
    title: 'UI/UX Design',
    description: 'Designing intuitive user experiences that prioritize functionality and aesthetic appeal.',
    icon: 'Zap'
  },
  {
    id: 's4',
    title: 'Mobile Solutions',
    description: 'Native and cross-platform mobile apps that provide seamless experiences across all devices.',
    icon: 'Smartphone'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Chen',
    role: 'Product Lead',
    company: 'NextGen Systems',
    content: 'The attention to detail and ability to translate complex requirements into elegant solutions is truly remarkable.',
    avatar: '/profile.png'
  },
  {
    id: 't2',
    name: 'Marcus Thorne',
    role: 'CEO',
    company: 'Skyline Ventures',
    content: 'Working with this team was a game-changer for our brand identity. Professional, creative, and fast.',
    avatar: '/profile.png'
  }
];

export const PERSONAL_INFO = {
  name: "Cerda Ryan, A.",
  title: "Web Developer",
  bio: "To obtain a challenging position in a reputable organization where I can apply my skills, grow professionally, and contribute positively to team success.",
  location: "Pambujan",
  email: "cerdaryan276@gmail.com",
  phone: "09565963942",
  age: "24-year-old",
  dob: "August 11, 2001",
  birthplace: "Pambujan",
  avatar: "Profile.png",
  skills: ["React", "TypeScript", "Node.js", "Python", "PostgreSQL", "UI Design"]
};
