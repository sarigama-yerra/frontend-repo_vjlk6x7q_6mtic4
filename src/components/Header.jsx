import { Flower2 } from "lucide-react";

function Header() {
  return (
    <header className="relative z-10 w-full">
      <div className="mx-auto max-w-6xl px-6 py-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-violet-500/20 border border-violet-400/30 shadow-[0_0_20px_rgba(139,92,246,0.35)]">
            <Flower2 className="w-6 h-6 text-violet-300" />
          </div>
          <div>
            <h1 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Jacaranda Showcase
            </h1>
            <p className="text-xs text-violet-200/80">Jacaranda mimosifolia</p>
          </div>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-violet-100/80">
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#details" className="hover:text-white transition">Details</a>
          <a href="#gallery" className="hover:text-white transition">Gallery</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
