import Link from "next/link";
import EnrollButton from "./EnrollButton";

export default function CourseCard({ course }) {
    return (
        <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition duration-300">

            <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover" />


            <div className="p-4">


                <h2
                    className="text-xl font-semibold text-slate-900 dark:text-slate-100">
                    {course.title}
                </h2>


                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    {course.instructor}
                </p>

                <div className="flex items-center justify-between mt-4 text-sm text-slate-600 dark:text-slate-300">

                    <span>
                        ⭐ {course.rating}
                    </span>

                    <span>
                        {course.duration}
                    </span>

                </div>


                <p className="mt-4 inline-block bg-slate-100 dark:bg-slate-700 px-3 py-1 rounded-full text-xs text-slate-600 dark:text-slate-300">
                    {course.category}
                </p>


                <Link
                    href={`/courses/${course.id}`}
                    className="block mt-6 text-center bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition"
                >
                    View Details
                </Link>


                <EnrollButton
                    courseId={course.id}
                />


            </div>

        </div>
    );
}