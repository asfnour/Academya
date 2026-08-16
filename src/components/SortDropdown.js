"use client";

export default function SortDropdown({ sort, setSort}) {
    return (
        <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="w-full sm:w-fit bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 rounded-lg px-4 py-2 outline-none focus:ring-2 focus:ring-indigo-500 cursor-pointer transition"
        >

            <option value="default">
                Sort by
            </option>


            <option value="rating">
                Highest Rating
            </option>


            <option value="title">
                Title A-Z
            </option>


        </select>
    );
}