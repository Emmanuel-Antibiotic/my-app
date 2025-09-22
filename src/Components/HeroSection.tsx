import { useState } from "react";
import { Menu, X, Stethoscope, Calendar, Video, Users, Leaf, BookOpen, ShoppingBag } from "lucide-react";
export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navbar */}
      <header className="bg-white shadow sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 md:py-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-gray-900">🐾 Doctor Hulk</span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-700">
            <a href="#">Veterinary Clinic</a>
            <a href="#">Pet Mart</a>
            <a href="#">Animal Zoopedia</a>
            <a href="#">Cricket Farm</a>
            <a href="#">Vlog</a>
            <a href="#">Virtual Pet Cards</a>
            <a href="#">Appointments</a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {menuOpen && (
          <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
            <a href="#" className="block">Veterinary Clinic</a>
            <a href="#" className="block">Pet Mart</a>
            <a href="#" className="block">Animal Zoopedia</a>
            <a href="#" className="block">Cricket Farm</a>
            <a href="#" className="block">Vlog</a>
            <a href="#" className="block">Virtual Pet Cards</a>
            <a href="#" className="block">Appointments</a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative bg-cover bg-center h-[500px] flex items-center justify-center text-white"
        style={{ backgroundImage: "url('/vet-bg.jpg')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <span className="px-4 py-1 bg-white text-sm text-gray-800 rounded-full">Comprehensive Animal Care & Climate Action</span>
          <h1 className="text-4xl md:text-5xl font-bold mt-4">
            Doctor <span className="text-green-500">Hulk</span>
          </h1>
          <p className="mt-3 text-lg">
            Your one-stop destination for veterinary care, sustainable farming, educational content, and innovative pet solutions.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg">Book Appointment</button>
            <button className="bg-white hover:bg-gray-100 text-gray-800 px-6 py-2 rounded-lg">Watch Our Story</button>
          </div>
          <div className="grid grid-cols-4 gap-4 mt-10 text-sm">
            <div>
              <p className="text-2xl font-bold">1000+</p>
              <p>Happy Pets</p>
            </div>
            <div>
              <p className="text-2xl font-bold">5</p>
              <p>Business Areas</p>
            </div>
            <div>
              <p className="text-2xl font-bold">24/7</p>
              <p>Emergency Care</p>
            </div>
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p>Eco-Friendly</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-2xl font-bold text-center">Clinical Services</h2>
        <p className="text-center text-gray-600 mt-2">
          Professional veterinary care with comprehensive medical services designed to keep your pets healthy and protected.
        </p>

        <div className="grid md:grid-cols-4 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="/vaccination.jpg" alt="Vaccination" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">Vaccination Services</h3>
              <p className="text-sm text-gray-600 mt-2">Comprehensive vaccination programs to protect your pets...</p>
              <p className="text-xs text-gray-500 mt-2">⏱ 30-45 minutes • 💲$45-120</p>
              <button className="mt-3 text-green-600 text-sm">Read More →</button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="/surgery.jpg" alt="Surgery" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">Surgical Procedures</h3>
              <p className="text-sm text-gray-600 mt-2">Advanced surgical services with state-of-the-art equipment...</p>
              <p className="text-xs text-gray-500 mt-2">⏱ 1-4 hours • 💲$200-2500</p>
              <button className="mt-3 text-green-600 text-sm">Read More →</button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="/training.jpg" alt="Training" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">Pet Training Programs</h3>
              <p className="text-sm text-gray-600 mt-2">Professional behavioral training and obedience programs...</p>
              <p className="text-xs text-gray-500 mt-2">⏱ 45-60 minutes • 💲$75-150</p>
              <button className="mt-3 text-green-600 text-sm">Read More →</button>
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white shadow rounded-xl overflow-hidden">
            <img src="/parasite.jpg" alt="Ectoparasite" className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h3 className="font-semibold">Ectoparasite Control</h3>
              <p className="text-sm text-gray-600 mt-2">Treatment and prevention of fleas, ticks, mites and other parasites...</p>
              <p className="text-xs text-gray-500 mt-2">⏱ 20-30 minutes • 💲$35-95</p>
              <button className="mt-3 text-green-600 text-sm">Read More →</button>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <button className="bg-gray-200 hover:bg-gray-300 px-6 py-2 rounded-lg">Load More Services</button>
        </div>
      </section>
    </div>
  );
}
