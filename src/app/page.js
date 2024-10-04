import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <header className="flex flex-col items-center">
        <h1 className="text-4xl font-bold">Dylan Patel</h1>
        <h2 className="text-lg mt-2">Web Developer</h2>
      </header>

      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-2xl font-semibold">Projects</h2>
        
        <div className="flex flex-col gap-6">
          <div className="border border-gray-300 rounded-lg p-4 shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-sm">A brief description of Project 1 goes here</p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>

          <div className="border border-gray-300 rounded-lg p-4 shadow-lg w-full max-w-md">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-sm">A brief description of Project 2 goes here. </p>
            <a href="#" className="text-blue-500 hover:underline">View Project</a>
          </div>
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm">© 2024 Dylan Patel. All rights reserved.</p>
        <a className="hover:underline" href="https://github.com/dylanpatel401" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a className="hover:underline" href="https://linkedin.com/in/dylan-patel1" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
