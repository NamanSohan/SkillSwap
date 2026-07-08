import Navbar from "@/components/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex min-h-[calc(100vh-72px)] items-center justify-center">
        <h1 className="text-5xl font-bold">
          Welcome to SkillSwap 🚀
        </h1>
      </main>
    </>
  );
}