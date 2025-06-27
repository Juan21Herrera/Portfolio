import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="py-4 shadow-md sticky top-0 z-50 bg-[#0f0f1b] text-white">
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold">
          <a href="/" className="hover:text-[#fd715a] transition">Juan Herrera</a>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium opacity-80">
          <a href="#about" className="hover:text-[#fd715a] transition">Sobre mí</a>
          <a href="#stack" className="hover:text-[#fd715a] transition">Stack</a>
          <a href="#projects" className="hover:text-[#fd715a] transition">Proyectos</a>
          <a href="#contact" className="hover:text-[#fd715a] transition">Contacto</a>
        </nav>

        {/* Botón hamburguesa (movil) */}
        <button
          onClick={() => setOpen(!open)}
          className="relative w-8 h-8 md:hidden focus:outline-none z-50"
        >
          <span className={`absolute block h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? 'rotate-45 top-3.5' : 'top-2'}`} />
          <span className={`absolute block h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? 'opacity-0' : 'top-4'}`} />
          <span className={`absolute block h-0.5 w-8 bg-white rounded transition-all duration-300 ease-in-out ${open ? '-rotate-45 top-3.5' : 'top-6'}`} />
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <nav className="md:hidden px-6 py-4 flex flex-col gap-4 text-sm font-medium bg-[#0f0f1b] border-t border-gray-700">
          <a href="#about" className="hover:text-[#fd715a] transition">Sobre mí</a>
          <a href="#stack" className="hover:text-[#fd715a] transition">Stack</a>
          <a href="#projects" className="hover:text-[#fd715a] transition">Proyectos</a>
          <a href="#contact" className="hover:text-[#fd715a] transition">Contacto</a>
        </nav>
      )}
    </header>
  );
}
