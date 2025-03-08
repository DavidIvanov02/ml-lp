"use client";
import ThemeToggle from "@/components/ThemeToggle";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import Lenis from "@studio-freight/lenis";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      clearTimeout(timer);
      lenis.destroy();
    };
  }, []);

  if (loading) {
    return <PageLoader />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CustomCursor />
      <ScrollToTop />

      {/* Header/Navbar */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-black/5 dark:border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4 md:p-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">MathLearns</span>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="nav-link">Home</a>
            <a href="#features" className="nav-link">Features</a>
            <a href="#testimonials" className="nav-link">Testimonials</a>
            <a href="#pricing" className="nav-link">Pricing</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            <ThemeToggle />
            <button
              className="md:hidden"
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black border-b border-black/10 dark:border-white/10 py-4 px-6 shadow-lg animate-fadeIn">
            <nav className="flex flex-col space-y-4">
              <a href="#home" className="py-2 hover:text-blue-500 transition" onClick={() => setMobileMenuOpen(false)}>Home</a>
              <a href="#features" className="py-2 hover:text-blue-500 transition" onClick={() => setMobileMenuOpen(false)}>Features</a>
              <a href="#testimonials" className="py-2 hover:text-blue-500 transition" onClick={() => setMobileMenuOpen(false)}>Testimonials</a>
              <a href="#pricing" className="py-2 hover:text-blue-500 transition" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
              <a href="#contact" className="py-2 hover:text-blue-500 transition" onClick={() => setMobileMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main id="home" className="flex-1 flex flex-col items-center justify-center px-6 md:px-12 py-12 text-center md:text-left md:flex-row md:justify-between max-w-7xl mx-auto mt-20">
        <div className="md:w-1/2 space-y-6 mb-10 md:mb-0">
          <span className="inline-block px-3 py-1 text-sm font-medium text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-900/30 rounded-full mb-2">
            AI-Powered Learning
          </span>
          <h1 className="text-4xl md:text-6xl font-bold">
            The Future of <span className="bg-gradient-to-r from-indigo-500 to-violet-600 bg-clip-text text-transparent">Math Education</span>
          </h1>
          <p className="text-lg opacity-80 max-w-md mx-auto md:mx-0">
            Unlock your mathematical potential with our AI-powered learning platform designed for students of all levels.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full text-white font-medium hover:shadow-lg hover:shadow-blue-500/20 transition">
              Get Started
            </button>
            <button className="px-6 py-3 border border-current rounded-full font-medium hover:bg-black/5 dark:hover:bg-white/5 transition flex items-center justify-center gap-2">
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
              </svg>
            </button>
          </div>
        </div>

        <div className="md:w-1/2 relative h-64 md:h-96">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 to-violet-600/20 rounded-2xl flex items-center justify-center shadow-lg">
            <div className="w-3/4 h-3/4 relative">
              <div className="absolute w-32 h-32 bg-indigo-500/30 rounded-full -top-5 -left-5 blur-xl"></div>
              <div className="absolute w-40 h-40 bg-violet-600/30 rounded-full -bottom-5 -right-5 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="text-7xl font-bold text-blue-500/80">∑</div>
                  <div className="absolute text-5xl font-bold text-purple-500/80" style={{ top: '-30px', right: '-20px' }}>π</div>
                  <div className="absolute text-4xl font-bold text-indigo-500/80" style={{ bottom: '-20px', left: '-25px' }}>∫</div>
                  <div className="absolute text-6xl font-bold text-pink-500/80" style={{ bottom: '-15px', right: '-15px' }}>√</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Features Section */}
      <section id="features" className="py-16 px-6 md:px-12 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose MathLearns?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Personalized Learning",
              description: "AI-powered system adapts to your learning style and pace.",
              icon: "🧠"
            },
            {
              title: "Interactive Exercises",
              description: "Engage with dynamic problems that make math fun and intuitive.",
              icon: "⚡"
            },
            {
              title: "Real-time Feedback",
              description: "Get instant guidance and solutions to improve your skills.",
              icon: "🔍"
            }
          ].map((feature, i) => (
            <div key={i} className="p-6 rounded-xl border border-black/10 dark:border-white/10 hover:border-indigo-500/50 dark:hover:border-indigo-500/50 transition hover:shadow-lg hover:shadow-indigo-500/5 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="opacity-70">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "MathLearns transformed my approach to teaching calculus. My students are more engaged than ever!",
                author: "Dr. Sarah Johnson",
                role: "Math Professor"
              },
              {
                quote: "I went from struggling with algebra to acing my exams. The personalized approach made all the difference.",
                author: "Michael Chen",
                role: "High School Student"
              },
              {
                quote: "As a parent, I appreciate how MathLearns makes learning math enjoyable for my kids while being effective.",
                author: "Lisa Rodriguez",
                role: "Parent"
              }
            ].map((testimonial, i) => (
              <div key={i} className="p-6 rounded-xl bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-black/10 dark:border-white/10 shadow-md">
                <div className="mb-4 text-2xl text-indigo-500">&quot;</div>
                <p className="italic mb-4">{testimonial.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm opacity-70">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
          <p className="text-center opacity-70 mb-12 max-w-2xl mx-auto">Choose the plan that works best for your learning journey</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                period: "per month",
                description: "Perfect for beginners",
                features: ["Core math concepts", "Basic problem solving", "Weekly assessments", "Email support"]
              },
              {
                name: "Premium",
                price: "$19.99",
                period: "per month",
                description: "Most popular choice",
                features: ["All Basic features", "Advanced topics", "Personalized learning path", "Priority support", "Progress analytics"]
              },
              {
                name: "Ultimate",
                price: "$29.99",
                period: "per month",
                description: "For serious learners",
                features: ["All Premium features", "1-on-1 tutoring sessions", "Custom curriculum", "24/7 support", "Family accounts"]
              }
            ].map((plan, i) => (
              <div key={i} className={`p-8 rounded-2xl border ${i === 1 ? 'border-indigo-500 shadow-lg shadow-indigo-500/10 bg-white/90 dark:bg-gray-800/90' : 'border-black/10 dark:border-white/10 bg-white/70 dark:bg-gray-800/70'} backdrop-blur-sm flex flex-col`}>
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span className="opacity-70"> {plan.period}</span>
                </div>
                <p className="opacity-70 mb-6">{plan.description}</p>
                <ul className="mb-8 flex-1">
                  {plan.features.map((feature, j) => (
                    <li key={j} className="mb-2 flex items-center gap-2">
                      <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`mt-auto px-6 py-3 rounded-full font-medium transition ${i === 1 ? 'bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:opacity-90' : 'border border-current hover:bg-black/5 dark:hover:bg-white/5'}`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 md:px-12 bg-gray-50 dark:bg-gray-900/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 text-center">Ready to Transform Your Math Skills?</h2>
          <p className="opacity-80 mb-8 max-w-md mx-auto text-center">Join thousands of students who have improved their mathematical understanding with MathLearns.</p>

          <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm p-8 md:p-10 rounded-2xl border border-black/10 dark:border-white/10 shadow-xl shadow-indigo-500/5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium opacity-80">Your Name</label>
                <input
                  type="text"
                  id="name"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium opacity-80">Email Address</label>
                <input
                  type="email"
                  id="email"
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition"
                />
              </div>
            </div>

            <div className="space-y-2 mb-6">
              <label htmlFor="message" className="text-sm font-medium opacity-80">Your Message</label>
              <textarea
                id="message"
                placeholder="Tell us how we can help you..."
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-black/10 dark:border-white/10 bg-transparent focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition resize-none"
              ></textarea>
            </div>

            <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg text-white font-medium hover:opacity-90 transition transform hover:scale-[1.02] focus:scale-[0.98] flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20">
              <span>Send Message</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13"></line>
                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-900 border-t border-black/10 dark:border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent mb-4">MathLearns</div>
              <p className="opacity-70 mb-4">Transforming how the world learns mathematics through innovative AI technology.</p>
              <div className="flex gap-4">
                <a href="#" className="social-icon" aria-label="Facebook">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Instagram">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="Twitter">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
                <a href="#" className="social-icon" aria-label="LinkedIn">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="footer-link">Home</a></li>
                <li><a href="#features" className="footer-link">Features</a></li>
                <li><a href="#testimonials" className="footer-link">Testimonials</a></li>
                <li><a href="#pricing" className="footer-link">Pricing</a></li>
                <li><a href="#contact" className="footer-link">Contact</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Blog</a></li>
                <li><a href="#" className="footer-link">Tutorials</a></li>
                <li><a href="#" className="footer-link">Documentation</a></li>
                <li><a href="#" className="footer-link">Community</a></li>
                <li><a href="#" className="footer-link">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="footer-link">Terms of Service</a></li>
                <li><a href="#" className="footer-link">Privacy Policy</a></li>
                <li><a href="#" className="footer-link">Cookie Policy</a></li>
                <li><a href="#" className="footer-link">GDPR</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-black/10 dark:border-white/10 flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <span className="opacity-80 text-sm">© {new Date().getFullYear()} MathLearns. All rights reserved. <span className="text-blue-500 dark:text-blue-400">Created by David Ivanov.</span></span>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">English</a>
              <span className="opacity-50">|</span>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">Bulgarian</a>
              <span className="opacity-50">|</span>
              <a href="#" className="text-sm opacity-70 hover:opacity-100 transition">Deuch</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
