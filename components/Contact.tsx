/** @jsxImportSource react */
import React, { useState } from 'react';
import { 
  Mail, 
  MapPin, 
  CheckCircle, 
  Send, 
  Phone, 
  Facebook, 
  Instagram, 
  Github,
  Loader2
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      // Reset after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/ryancerda.nye", label: 'Facebook' },
    { icon: Instagram, href: "https://www.instagram.com/prmo.ry/", label: 'Instagram' },
    { icon: Github, href: "https://github.com/ryan-dev-gi", label: 'Github' }
  ];

  const contactDetails = [
    { 
      icon: Mail, 
      label: 'Email Address', 
      value: PERSONAL_INFO.email, 
      href: `mailto:${PERSONAL_INFO.email}` 
    },
    { 
      icon: Phone, 
      label: 'Mobile Number', 
      value: PERSONAL_INFO.phone, 
      href: `tel:${PERSONAL_INFO.phone}` 
    },
    { 
      icon: MapPin, 
      label: 'Base Location', 
      value: PERSONAL_INFO.location, 
      href: '#' 
    }
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-500">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-indigo-600/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[30%] h-[30%] bg-purple-600/5 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column: Information & Socials */}
          <div className="lg:col-span-5 flex flex-col justify-center fade-in">
            <div>
              <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
                Connect With Me
              </div>
              <h2 className="text-5xl md:text-6xl font-black mb-8 tracking-tighter text-slate-900 dark:text-white leading-[1.1]">
                Let's build your <br />
                <span className="gradient-text">future today.</span>
              </h2>
              <p className="text-slate-500 dark:text-slate-400 text-lg mb-12 leading-relaxed font-light max-w-md">
                Have a concept in mind? Let's discuss how we can bring it to life with modern technology and elegant design.
              </p>

              <div className="space-y-8 mb-12">
                {contactDetails.map((detail, idx) => (
                  <div key={idx} className="flex items-start space-x-6 group">
                    <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 border border-slate-200 dark:border-slate-800 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      <detail.icon size={20} />
                    </div>
                    <div>
                      <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest block mb-1">{detail.label}</span>
                      <a href={detail.href} className="text-lg font-bold text-slate-800 dark:text-white hover:text-indigo-600 transition-colors">
                        {detail.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-6">
                <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest block">Follow My Journey</span>
                <div className="flex space-x-4">
                  {socialLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-white border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 transition-all shadow-sm hover:scale-110 hover:-translate-y-1"
                      aria-label={link.label}
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Custom Form */}
          <div className="lg:col-span-7 fade-in">
            <div className="glass p-8 md:p-12 rounded-[3rem] border border-slate-200 dark:border-slate-800 shadow-2xl relative">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-20 text-center">
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-6 border border-emerald-500/20">
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-4">Message Sent!</h3>
                  <p className="text-slate-500 dark:text-slate-400 max-w-sm">
                    Thank you for reaching out. I'll review your inquiry and get back to you as soon as possible.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 text-indigo-600 dark:text-indigo-400 font-bold uppercase tracking-widest text-[10px] hover:underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Name</label>
                      <input
                        required
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Email Address</label>
                      <input
                        required
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Subject</label>
                    <input
                      required
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Project Inquiry"
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-2">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project..."
                      className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-2xl px-6 py-4 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white resize-none"
                    />
                  </div>

                  <button
                    disabled={isSubmitting}
                    className="w-full bg-indigo-600 text-white font-bold py-5 rounded-2xl shadow-xl shadow-indigo-600/20 hover:bg-indigo-500 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 hover:scale-[1.02] transition-transform"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="animate-spin" size={20} />
                        <span className="uppercase tracking-[0.2em] text-xs">Processing...</span>
                      </>
                    ) : (
                      <>
                        <span className="uppercase tracking-[0.2em] text-xs">Send Message</span>
                        <Send size={18} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;