
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  github?: string;
  tags: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
