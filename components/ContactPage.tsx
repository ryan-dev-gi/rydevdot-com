/** @jsxImportSource react */
import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Facebook, 
  Instagram, 
  Github, 
  CheckCircle,
  Loader2,
  MessageSquare
} from 'lucide-react';
import { PERSONAL_INFO } from '../constants';

interface ContactPageProps {
  onBack: () => void;
}

const ContactPage: React.FC<ContactPageProps> = ({ onBack }) => {
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
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactMethods = [
    { 
      icon: Mail, 
      label: 'Email Address', 
      value: PERSONAL_INFO.email, 
      href: `mailto:${PERSONAL_INFO.email}`,
      desc: 'Typical response within 24 hours'
    },
    { 
      icon: Phone, 
      label: 'Mobile Number', 
      value: PERSONAL_INFO.phone, 
      href: `tel:${PERSONAL_INFO.phone}`,
      desc: 'Available Mon-Fri, 9am - 6pm'
    },
    { 
      icon: MapPin, 
      label: 'Current Base', 
      value: PERSONAL_INFO.location, 
      href: '#',
      desc: 'Open for remote & local roles'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-200 z-[60] relative transition-colors duration-500 pb-20 fade-in">
      {/* Background Decor */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-600/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/5 blur-[150px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 py-32 relative z-10">
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-indigo-600 dark:text-indigo-400 font-bold mb-12 hover:text-indigo-500 dark:hover:text-indigo-300 transition-all hover:-translate-x-1"
        >
          <ArrowLeft size={20} />
          <span>Back to Home</span>
        </button>

        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="animate-float glass rounded-[3rem] border border-slate-200 dark:border-indigo-500/20 p-8 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-indigo-600" />
              
              <div className="mb-10 text-center lg:text-left">
                <div className="w-20 h-20 rounded-[2rem] bg-indigo-600/10 dark:bg-indigo-600/20 text-indigo-600 dark:text-indigo-400 flex items-center justify-center mb-6 mx-auto lg:mx-0">
                  <MessageSquare size={36} />
                </div>
                <h3 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white mb-4">Direct Contact</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-light">
                  Feel free to reach out through any of these channels. I'm always open to discussing new projects or opportunities.
                </p>
              </div>

              <div className="space-y-6 mb-10">
                {contactMethods.map((method, idx) => (
                  <a 
                    key={idx} 
                    href={method.href}
                    className="flex items-start space-x-5 group p-4 rounded-2xl hover:bg-slate-100 dark:hover:bg-slate-900/50 border border-transparent hover:border-slate-200 dark:hover:border-slate-800 transition-all hover:-translate-y-1"
                  >
                    <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 flex items-center justify-center text-slate-500 dark:text-slate-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                      <method.icon size={20} />
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-1">{method.label}</span>
                      <span className="text-sm font-bold text-slate-800 dark:text-white block group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                        {method.value}
                      </span>
                      <span className="text-[10px] text-slate-400 font-medium block mt-1">{method.desc}</span>
                    </div>
                  </a>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-200 dark:border-slate-800">
                <span className="text-[10px] uppercase font-black tracking-widest text-slate-400 block mb-6 text-center">Social Networks</span>
                <div className="flex justify-center space-x-4">
                  {[
                    { Icon: Facebook, href: "https://www.facebook.com/ryancerda.nye" },
                    { Icon: Instagram, href: "https://www.instagram.com/prmo.ry/" },
                    { Icon: Github, href: "https://github.com/ryan-dev-gi" }
                  ].map((social, idx) => (
                    <a 
                      key={idx} 
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center justify-center text-slate-500 hover:text-indigo-600 dark:hover:text-white transition-all hover:scale-110"
                    >
                      <social.Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="animate-float glass p-8 md:p-16 rounded-[3rem] border border-slate-200 dark:border-indigo-500/10 shadow-2xl relative min-h-[600px] flex flex-col" style={{ animationDelay: '0.5s' }}>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center flex-1 text-center py-20 fade-in">
                  <div className="w-24 h-24 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-8 border border-emerald-500/20 shadow-2xl shadow-emerald-500/20">
                    <CheckCircle size={48} />
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 dark:text-white mb-6">Message Sent Successfully!</h2>
                  <p className="text-slate-500 dark:text-slate-400 max-w-md text-lg leading-relaxed font-light">
                    Thank you for reaching out. I have received your message and will get back to you within the next 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-12 px-10 py-4 rounded-2xl bg-indigo-600 text-white font-bold tracking-widest text-[10px] uppercase shadow-lg shadow-indigo-600/20 hover:bg-indigo-500 transition-all"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="fade-in">
                  <div className="mb-12">
                    <div className="inline-block px-4 py-1.5 rounded-full bg-indigo-600/10 border border-indigo-600/20 text-indigo-600 dark:text-indigo-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                      Contact Form
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tighter">
                      Let's start a <br />
                      <span className="gradient-text">new conversation.</span>
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Full Name</label>
                        <input
                          required
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Alex Thompson"
                          className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white shadow-sm"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Email Address</label>
                        <input
                          required
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="alex@company.com"
                          className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white shadow-sm"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Subject</label>
                      <input
                        required
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Project Collaboration"
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white shadow-sm"
                      />
                    </div>

                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 ml-4">Message</label>
                      <textarea
                        required
                        rows={6}
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell me about your ideas or requirements..."
                        className="w-full bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-[1.5rem] px-8 py-5 outline-none focus:border-indigo-500 transition-all text-slate-900 dark:text-white resize-none shadow-sm"
                      />
                    </div>

                    <button
                      disabled={isSubmitting}
                      className="w-full bg-indigo-600 text-white font-bold py-6 rounded-[1.5rem] shadow-2xl shadow-indigo-600/30 hover:bg-indigo-500 transition-all flex items-center justify-center space-x-3 disabled:opacity-50 hover:scale-105 transition-transform"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="animate-spin" size={24} />
                          <span className="uppercase tracking-[0.3em] text-xs font-black">Processing...</span>
                        </>
                      ) : (
                        <>
                          <span className="uppercase tracking-[0.3em] text-xs font-black">Send Message Now</span>
                          <Send size={20} />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;