import {
  Stethoscope,
  HeartPulse,
  Smile,
  CalendarCheck,
  ShieldCheck,
  Menu,
  X,
  ArrowRight,
  Phone,
  MapPin,
  Mail,
  Star,
  UserCheck,
} from "lucide-react";

export default function Footer() {
  return (
    <>
      {/* ================= FOOTER (MISSING PART ADDED) ================= */}
      <footer className="bg-gray-900 text-gray-300 py-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-teal-600 p-1.5 rounded-lg">
                <HeartPulse className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold text-white">KigaliClinic</span>
            </div>
            <p className="text-sm text-gray-400 mb-6">
              Making healthcare accessible, affordable, and efficient for
              everyone in Rwanda.
            </p>
            <div className="flex gap-4">
              {/* Social Placeholders */}
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">FB</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">TW</span>
              </div>
              <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-teal-600 transition cursor-pointer">
                <span className="text-xs">IG</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-bold mb-6">Services</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  General Consultation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Pediatrics
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Dermatology
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-teal-400 transition">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <MapPin size={18} className="text-teal-500" />
                <span>KG 14 Ave, Kigali, Rwanda</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-teal-500" />
                <span>+250 788 000 000</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-teal-500" />
                <span>support@kigaliclinic.rw</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-16 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} KigaliClinic. All rights reserved.
        </div>
      </footer>
    </>
  );
}
