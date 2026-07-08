export default function Navbar() {
  return (
    <header className="border-b bg-white">
      <nav className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-blue-600">
          SkillSwap
        </h1>

        <div className="flex items-center gap-6">
          <button className="text-gray-700 hover:text-blue-600">
            Login
          </button>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700">
            Get Started
          </button>
        </div>
      </nav>
    </header>
  );
}