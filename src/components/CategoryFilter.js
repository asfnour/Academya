"use client";

const categories = [
  "All",
  "Web",
  "Data",
  "Design",
  "Mobile",
];

export default function CategoryFilter({category,setCategory,}) {
  
  return (
    <div className=" flex flex-wrap gap-2 sm:gap-3 mt-5">

      {categories.map((item) => (

        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`px-4 py-2 rounded-full text-sm transition
            ${category === item
              ? `bg-indigo-600 text-white`
              : `bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-slate-700`
            }
          `}>
          {item}
        </button>
      ))}
    </div>
  );
}