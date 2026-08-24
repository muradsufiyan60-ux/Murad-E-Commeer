import React, { useState } from 'react';
import { 
  FiMapPin, 
  FiPhone, 
  FiMail, 
  FiSend, 
  FiClock, 
  FiMessageSquare, 
  FiCheckCircle, 
  FiCoffee 
} from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API network delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 800);
  }

  const contactDetails = [
    {
      icon: <FiMapPin size={22} className="text-coffee-orange shrink-0 mt-0.5" />,
      title: "Visit Our Shop",
      detail: "Ethiopia, Maya City",
      subtext: "Main Street, Next to Central Park"
    },
    {
      icon: <FiPhone size={22} className="text-coffee-orange shrink-0 mt-0.5" />,
      title: "Call Us Direct",
      detail: "+251 960 405 019",
      subtext: "Mon-Sun, 7:00 AM - 9:00 PM"
    },
    {
      icon: <FiMail size={22} className="text-coffee-orange shrink-0 mt-0.5" />,
      title: "Send an Email",
      detail: "muradsufiyan60@gmail.com",
      subtext: "We usually reply within 2 hours"
    }
  ];

  return (
    <div className="bg-coffee-cream min-h-screen">
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-coffee-brown to-[#2c1a0e] text-white py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-4">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-coffee-orange/20 text-coffee-orange border border-coffee-orange/30 font-semibold text-xs tracking-wide uppercase">
            <FiMessageSquare /> We'd Love to Hear From You
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
            Get in Touch with <span className="text-coffee-orange">Murad Coffee</span>
          </h1>
          <p className="text-white/80 text-sm sm:text-base max-w-xl mx-auto">
            Have a question about our roasted beans, feedback about your visit, or special catering requests? Send us a message below!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 py-12 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Contact Details & Info Card */}
          <div className="space-y-6">
            <div className="bg-white border border-coffee-caramel/30 p-6 sm:p-8 rounded-2xl shadow-lg space-y-6">
              <h3 className="text-xl font-bold text-coffee-brown border-b border-gray-100 pb-3">
                Contact Information
              </h3>

              <div className="space-y-5">
                {contactDetails.map((item, index) => (
                  <div key={index} className="flex items-start gap-4 p-3 rounded-xl hover:bg-orange-50/50 transition-colors">
                    {item.icon}
                    <div>
                      <h4 className="font-bold text-coffee-brown text-sm">{item.title}</h4>
                      <p className="text-coffee-brown/90 font-medium text-sm mt-0.5">{item.detail}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{item.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Opening Hours Box */}
            <div className="bg-coffee-brown text-white p-6 rounded-2xl shadow-lg space-y-4">
              <div className="flex items-center gap-2 text-coffee-orange font-bold text-sm">
                <FiClock size={18} />
                <span>Opening Hours</span>
              </div>
              <ul className="space-y-2 text-xs sm:text-sm text-white/80">
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Monday - Friday:</span>
                  <span className="font-semibold text-white">7:00 AM - 9:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-white/10 pb-1.5">
                  <span>Saturday:</span>
                  <span className="font-semibold text-white">8:00 AM - 10:00 PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-semibold text-white">8:00 AM - 8:00 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Form Card */}
          <div className="lg:col-span-2 bg-white border border-coffee-caramel/30 p-6 sm:p-10 rounded-2xl shadow-lg">
            {submitted ? (
              <div className="text-center py-16 space-y-4 animate-fade-in">
                <div className="w-16 h-16 bg-orange-100 text-coffee-orange rounded-full flex items-center justify-center mx-auto mb-2">
                  <FiCheckCircle size={36} />
                </div>
                <h3 className="text-3xl font-extrabold text-coffee-brown">Message Sent Successfully!</h3>
                <p className="text-gray-600 text-sm max-w-md mx-auto">
                  Thank you for getting in touch. Our team has received your message and will reply to your email address shorty.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-3 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition text-sm cursor-pointer shadow-md"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div>
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-coffee-brown">Send Us a Message</h3>
                  <p className="text-gray-500 text-xs sm:text-sm mt-1">
                    Fill out the form below and we’ll get back to you as soon as possible.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="e.g. Murad Sufiyan"
                        className="w-full px-4 py-3 border border-coffee-caramel/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-orange text-sm bg-gray-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1.5">
                        Your Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="w-full px-4 py-3 border border-coffee-caramel/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-orange text-sm bg-gray-50/50"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs sm:text-sm font-semibold text-coffee-brown mb-1.5">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="How can we help you today?"
                      className="w-full px-4 py-3 border border-coffee-caramel/40 rounded-xl focus:outline-none focus:ring-2 focus:ring-coffee-orange text-sm bg-gray-50/50 resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-coffee-orange text-white font-bold rounded-xl hover:bg-coffee-brown transition flex items-center justify-center gap-2 cursor-pointer shadow-md disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        <FiSend size={18} /> Send Message
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
  );
}