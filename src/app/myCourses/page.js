"use client";

import Link from "next/link";
import { useState } from "react";
import courses from "@/data/courses";
import { useEnrollment } from "@/context/EnrollmentContext";
import EnrollButton from "@/components/EnrollButton";

export default function MyCoursesPage() {

  const [progress, setProgress] = useState({});

  const { enrolledIds } = useEnrollment();


  const enrolledCourses = courses.filter((course) =>
    enrolledIds.includes(course.id)
  );



  if (enrolledCourses.length === 0) {

    return (

      <main
        className="
          min-h-screen
          bg-slate-100
          dark:bg-slate-900
          flex
          items-center
          justify-center
          px-4
        "
      >

        <div className="text-center">


          <h1
            className="
              text-3xl
              font-bold
              text-slate-900
              dark:text-white
            "
          >
            You haven't enrolled yet.
          </h1>



          <Link
            href="/"
            className="
              inline-block
              mt-6
              text-indigo-600
              dark:text-indigo-400
              hover:underline
            "
          >
            Browse Courses →
          </Link>


        </div>


      </main>

    );
  }




  return (

    <main
      className="min-h-screen bg-slate-100 dark:bg-slate-900 py-10">

      <div className="max-w-5xl mx-auto px-4">

        <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">
          My Courses ({enrolledCourses.length})
        </h1>


        {enrolledCourses.map((course) => {


          const currentProgress =
            progress[course.id] || 60;


          return (

            <div
              key={course.id}
              className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-4 mb-6">
              <div className=" flexflex-col md:flex-row items-center gap-6">

                <img
                  src={course.image}
                  alt={course.title}
                  className=" w-full md:w-40 h-28 object-cover rounded-xl" />

                <div className="flex-1 w-full">

                  <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                    {course.title}
                  </h2>

                  <p className="text-slate-500 dark:text-slate-400 mt-2">
                    {course.instructor}
                  </p>

                  <div className="mt-4">

                    <div className="flex justify-between text-sm mb-2 text-slate-600 dark:text-slate-300">

                      <span>
                        Progress
                      </span>

                      <span>
                        {currentProgress}%
                      </span>

                    </div>

                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={currentProgress}
                      onChange={(e) =>
                        setProgress({
                          ...progress,
                          [course.id]: Number(e.target.value),
                        })
                      }
                      className="w-full cursor-pointer" />

                  </div>
                </div>

                <div className="w-full md:w-44">

                  <EnrollButton
                    courseId={course.id}
                  />

                </div>

              </div>

            </div>

          );

        })}

      </div>

    </main>

  );
}