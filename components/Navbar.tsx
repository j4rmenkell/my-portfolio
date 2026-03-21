import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 dark:bg-black/70 backdrop-blur-md border-b border-black/10 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link 
          href="#home" 
          className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity"
        >
          Portfolio.
        </Link>
        <ul className="flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="#tech" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Tech Stack
            </Link>
          </li>
          <li>
            <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              Projects
            </Link>
          </li>
          <li>
            <Link 
              href="#contact" 
              className="px-4 py-2 rounded-full bg-black text-white dark:bg-white dark:text-black hover:scale-105 transition-transform"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
