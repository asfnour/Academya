"use client";


export default function SearchBar({ search, setSearch }) {
  return (
    <input
      type="text"
      placeholder="Search courses..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full sm:w-[400px] md:w-[500px] lg:w-[700px] bg-white dark:bg-slate-800 border dark:border-slate-700 rounded-lg px-4 py-3 text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500" />
  );
}