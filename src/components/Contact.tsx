import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', message: '' });

    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative min-h-screen py-20 pt-32 bg-[#0f1014]">
      <div className="absolute inset-0 hex-grid opacity-20"></div>
      <div className="absolute inset-0 circuit-lines opacity-10"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Get In <span className="gradient-logo">Touch</span>
          </h2>
          <p className="text-lg text-[#a0a0b0] max-w-2xl mx-auto">
            Let's discuss how we can transform your vision into reality. Reach out to us today.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4 p-6 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30">
                <div className="w-12 h-12 rounded-lg bg-[#00f0ff]/10 border border-[#00f0ff]/50 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[#00f0ff]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Phone</h4>
                  <a href="tel:7800480693" className="text-[#a0a0b0] hover:text-[#00f0ff] transition-colors">
                    +91 7800-480-693
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-lg bg-[#1a1b26] border border-[#8a2be2]/30">
                <div className="w-12 h-12 rounded-lg bg-[#8a2be2]/10 border border-[#8a2be2]/50 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-[#8a2be2]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a href="mailto:ancomevortexsolutions@gmail.com" className="text-[#a0a0b0] hover:text-[#8a2be2] transition-colors break-all">
                    ancomevortexsolutions@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4 p-6 rounded-lg bg-[#1a1b26] border border-[#ffd700]/30">
                <div className="w-12 h-12 rounded-lg bg-[#ffd700]/10 border border-[#ffd700]/50 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#ffd700]" />
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-[#a0a0b0]">Kanpur, UP, India </p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 rounded-lg bg-gradient-to-br from-[#00f0ff]/10 to-[#8a2be2]/10 border border-[#00f0ff]/30">
              <h4 className="text-white font-semibold mb-3">Business Hours</h4>
              <p className="text-[#a0a0b0]">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-[#a0a0b0]">Sunday: Closed</p>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30 text-white placeholder-[#a0a0b0] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                  placeholder="Your Name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30 text-white placeholder-[#a0a0b0] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-white font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30 text-white placeholder-[#a0a0b0] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all"
                  placeholder="+91 XXXXX XXXXX"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-medium mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[#1a1b26] border border-[#00f0ff]/30 text-white placeholder-[#a0a0b0] focus:outline-none focus:border-[#00f0ff] focus:ring-1 focus:ring-[#00f0ff] transition-all resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-[#00f0ff] to-[#8a2be2] rounded-lg font-semibold text-white hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Message Sent!</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
