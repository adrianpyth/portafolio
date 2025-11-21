import React, { useState } from 'react';

export default function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const [succeeded, setSucceeded] = useState(false);
    const [error, setError] = useState(null);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        setError(null);

        const data = new FormData();
        data.append('name', formData.name);
        data.append('_replyto', formData.email);
        data.append('subject', formData.subject);
        data.append('message', formData.message);

        try {
            const response = await fetch("https://formspree.io/f/xjkagwpn", {
                method: 'POST',
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setSucceeded(true);
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                const result = await response.json();
                const errorMessage = result.errors
                    ? result.errors.map(err => err.field ? `${err.field}: ${err.message}` : err.message).join(' | ')
                    : 'An unknown error occurred.';
                setError(errorMessage);
            }
        } catch (networkError) {
            setError('Network error. Please check your connection.');
        } finally {
            setSubmitting(false);
        }
    };

    // Success State
    if (succeeded) {
        return (
            <div className="space-y-12 sm:space-y-16 pb-24">
                <style>{`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .fade-in-up {
            animation: fadeInUp 0.8s ease-out forwards;
          }
          @keyframes checkmark {
            0% { transform: scale(0) rotate(45deg); }
            50% { transform: scale(1.2) rotate(45deg); }
            100% { transform: scale(1) rotate(45deg); }
          }
          .checkmark {
            animation: checkmark 0.6s ease-out forwards;
          }
        `}</style>

                {/* Success Message */}
                <div className="text-center max-w-2xl mx-auto fade-in-up">
                    <div className="mb-8">
                        <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-green-500/20 border-4 border-green-400 flex items-center justify-center relative">
                            <div className="checkmark w-12 h-6 border-r-4 border-b-4 border-green-400 transform rotate-45"></div>
                        </div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono mb-4">
                            Message Sent!
                        </h1>
                        <p className="text-gray-400 font-mono text-sm sm:text-base">
                            Thank you for reaching out. I'll get back to you soon.
                        </p>
                    </div>

                    {/* Contact Info Card */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm">
                        <h2 className="text-cyan-400 font-mono text-lg uppercase tracking-wider mb-6">Direct Contact</h2>
                        <div className="space-y-4 text-left">
                            <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <span className="text-gray-300 font-mono text-sm">azc7794@gmail.com</span>
                            </div>

                            <div className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <span className="text-gray-300 font-mono text-sm">+506 8455-7365</span>
                            </div>

                            <a href="https://github.com/adrianpyth" target="_blank" rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 hover:border-cyan-500/50 border border-transparent transition-all">
                                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <span className="text-gray-300 font-mono text-sm hover:text-cyan-400 transition-colors">github.com/adrianpyth</span>
                            </a>

                            <a href="https://www.linkedin.com/in/adri%C3%A1nzcastro/" target="_blank" rel="noopener noreferrer"
                                className="flex items-center space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 hover:border-cyan-500/50 border border-transparent transition-all">
                                <svg className="w-5 h-5 text-cyan-400" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <span className="text-gray-300 font-mono text-sm hover:text-cyan-400 transition-colors">linkedin.com/in/adriánzcastro</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex justify-between items-center max-w-6xl mx-auto pt-8">
                    <a href="/Projects">
                        <button className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-bold text-sm
                    hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300
                    rounded-lg uppercase tracking-wider font-mono backdrop-blur-sm">
                            ← Back
                        </button>
                    </a>
                </div>
            </div>
        );
    }

    // Form State
    return (
        <div className="space-y-12 sm:space-y-16 pb-24">
            <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .delay-1 { animation-delay: 0.2s; opacity: 0; }
        .delay-2 { animation-delay: 0.4s; opacity: 0; }
      `}</style>

            {/* Header */}
            <div className="text-center fade-in-up">
                <div className="flex items-center justify-center mb-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/70 animate-pulse mr-3"></div>
                    <span className="text-xs text-gray-500 font-mono tracking-wider uppercase">Get In Touch</span>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white font-mono mb-2">
                    Contact Me
                </h1>
                <p className="text-sm text-gray-400 font-mono">Let's discuss your next project</p>
            </div>

            {/* Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

                {/* Form */}
                <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-cyan-500/30 rounded-xl p-8 backdrop-blur-sm space-y-6 fade-in-up delay-1">

                    <div className="space-y-4">
                        {/* Name */}
                        <div>
                            <label htmlFor="name" className="block text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="Your name"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 font-mono text-sm
                         placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>

                        {/* Email */}
                        <div>
                            <label htmlFor="email" className="block text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="your@email.com"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 font-mono text-sm
                         placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>

                        {/* Subject */}
                        <div>
                            <label htmlFor="subject" className="block text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
                                Subject
                            </label>
                            <input
                                id="subject"
                                type="text"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                required
                                placeholder="Project inquiry"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 font-mono text-sm
                         placeholder-gray-600 focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>

                        {/* Message */}
                        <div>
                            <label htmlFor="message" className="block text-xs text-cyan-400 font-mono uppercase tracking-wider mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                placeholder="Tell me about your project..."
                                rows="5"
                                className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-gray-300 font-mono text-sm
                         placeholder-gray-600 resize-none focus:outline-none focus:border-cyan-500 transition-colors"
                            />
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/50 rounded-lg">
                            <p className="text-red-400 text-xs font-mono">{error}</p>
                        </div>
                    )}

                    {/* Submit Button */}
                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className={`w-full px-6 py-4 font-bold text-sm uppercase tracking-wider font-mono rounded-lg
                     transition-all duration-300 ${submitting
                                ? 'bg-gray-700 text-gray-400 cursor-not-allowed'
                                : 'bg-cyan-500/90 text-black hover:bg-cyan-400 transform hover:scale-105 shadow-lg shadow-cyan-500/30'
                            }`}
                    >
                        {submitting ? 'Sending...' : 'Send Message'}
                    </button>
                </div>

                {/* Contact Info */}
                <div className="flex flex-col justify-center space-y-6 fade-in-up delay-2">

                    {/* Info Card */}
                    <div className="bg-gradient-to-br from-gray-900/50 to-black/50 border border-violet-500/30 rounded-xl p-8 backdrop-blur-sm">
                        <h2 className="text-violet-400 font-mono text-lg uppercase tracking-wider mb-6">Direct Contact</h2>

                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase">Email</p>
                                    <p className="text-gray-300 font-mono text-sm">azc7794@gmail.com</p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 transition-colors">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase">Phone</p>
                                    <p className="text-gray-300 font-mono text-sm">+506 8455-7365</p>
                                </div>
                            </div>

                            <a href="https://github.com/adrianpyth" target="_blank" rel="noopener noreferrer"
                                className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 hover:border-cyan-500/50 border border-transparent transition-all group">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase">GitHub</p>
                                    <p className="text-gray-300 font-mono text-sm group-hover:text-cyan-400 transition-colors">github.com/adrianpyth</p>
                                </div>
                            </a>

                            <a href="https://www.linkedin.com/in/adri%C3%A1nzcastro/" target="_blank" rel="noopener noreferrer"
                                className="flex items-start space-x-3 p-3 bg-black/30 rounded-lg hover:bg-black/50 hover:border-cyan-500/50 border border-transparent transition-all group">
                                <svg className="w-5 h-5 text-cyan-400 mt-0.5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                <div>
                                    <p className="text-xs text-gray-500 font-mono uppercase">LinkedIn</p>
                                    <p className="text-gray-300 font-mono text-sm group-hover:text-cyan-400 transition-colors">adriánzcastro</p>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Availability Status */}
                    <div className="bg-gradient-to-br from-green-900/20 to-black/30 border border-green-500/30 rounded-xl p-6 backdrop-blur-sm">
                        <div className="flex items-center space-x-3">
                            <div className="w-3 h-3 bg-green-400 rounded-full shadow-lg shadow-green-400/70 animate-pulse"></div>
                            <div>
                                <p className="text-green-400 font-mono text-sm uppercase tracking-wider">Available for Work</p>
                                <p className="text-gray-400 font-mono text-xs mt-1">Open to new opportunities</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center max-w-6xl mx-auto pt-8">
                <a href="/Projects">
                    <button className="px-6 py-3 border border-cyan-500/50 text-cyan-400 font-bold text-sm
                  hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300
                  rounded-lg uppercase tracking-wider font-mono backdrop-blur-sm">
                        ← Back
                    </button>
                </a>
            </div>
        </div>
    );
}