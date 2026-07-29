"use client";

import { useState } from "react";
import courses from "@/data/courses";
import CourseCard from "@/components/CourseCard";
import SearchBar from "@/components/SearchBar";
import CategoryFilter from "@/components/CategoryFilter";
import SortDropdown from "@/components/SortDropdown";

export default function Home() {

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("default");


  const filteredCourses = courses.filter((course) => {

    const matchesSearch =
      course.title
        .toLowerCase()
        .includes(search.toLowerCase());


    const matchesCategory =
      category === "All" ||
      course.category === category;


    return matchesSearch && matchesCategory;

  });


  let sortedCourses = [...filteredCourses];


  if (sort === "rating") {
    sortedCourses.sort(
      (a, b) => b.rating - a.rating
    );
  }


  if (sort === "title") {
    sortedCourses.sort(
      (a, b) =>
        a.title.localeCompare(b.title)
    );
  }



  return (
    <main className="min-h-screen bg-slate-100 dark:bg-slate-900">

      <div className="max-w-6xl mx-auto px-4 py-8">


        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100 mb-8">
          Explore Courses
        </h1>

        <div className="flex flex-col gap-4">

          <SearchBar
            search={search}
            setSearch={setSearch}
          />


          <div className="flex flex-col gap-4">

            <CategoryFilter
              category={category}
              setCategory={setCategory}
            />


            <SortDropdown
              sort={sort}
              setSort={setSort}
            />

          </div>

        </div>


        {sortedCourses.length === 0 ? (

          <div className="mt-10 text-center text-slate-600 dark:text-slate-400">

            <p className="text-lg">
              No courses found 😔
            </p>

            <p className="text-sm mt-2">
              Try another search or category.
            </p>

          </div>

        ) : (


          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">

            {sortedCourses.map((course) => (

              <CourseCard
                key={course.id}
                course={course}
              />

            ))
            }

          </div>

        )
        }

      </div>

    </main>
  );
}