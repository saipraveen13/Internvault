export function Navbar() {
  return (
    <div className="flex justify-center mt-5">
      <nav className="flex justify-center p-3 px-2 border border-gray-200 rounded-full shadow-lg">
        <ul className="flex gap-4">
          <li>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-[hsl(214.3_94.6%_92.7%)] hover:border border-[hsl(213.1_93.9%_67.8%)] transition duration-300">
    Home
        </a>
          </li>
          <li>
       <a href="#" className="px-4 py-2 rounded-full hover:bg-[hsl(214.3_94.6%_92.7%)] hover:border border-[hsl(213.1_93.9%_67.8%)] transition duration-300">
    Internships
        </a>


          </li>
          <li>
            <a href="#" className="px-4 py-2 rounded-full hover:bg-[hsl(214.3_94.6%_92.7%)] hover:border border-[hsl(213.1_93.9%_67.8%)] transition duration-300">
    Prompts
        </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
