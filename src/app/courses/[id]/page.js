import Link from "next/link";
import courses from "@/data/courses";
import EnrollButton from "@/components/EnrollButton";

export default async function CourseDetails({ params }) {

    const { id } = await params;

    const course = courses.find((course) => course.id === id);


    if (!course) {

        return (
            <main className="min-h-screen bg-slate-100 dark:bg-slate-900 flex items-center justify-center px-4">

                <div className="text-center">

                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                        Course not found
                    </h1>

                    <Link
                        href="/"
                        className="mt-4
                                   inline-block
                                   text-indigo-600
                                   dark:text-indigo-400
                                   hover:underline">
                        ← Back to Courses
                    </Link>


                </div>

            </main>
        );
    }



    return (

        <main className=" min-h-screen bg-slate-100 dark:bg-slate-900 py-10">

            <div className=" max-w-6xl mx-auto px-4">

                <Link
                    href="/"
                    className="text-indigo-600 dark:text-indigo-400 hover:underline">

                    ← Back to Courses
                </Link>



                <div className=" grid grid-cols-1 lg:grid-cols-2 gap-10 mt-8">

                    <div>
                        <img
                            src={course.image}
                            alt={course.title}
                            className="w-full rounded-2xl object-cover " />

                    </div>

                    <div>

                        <h1 className=" text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
                            {course.title}
                        </h1>

                        <p className=" text-slate-600 dark:text-slate-400 mt-3">
                            By {course.instructor}
                        </p>

                        <div className=" flex flex-wrap gap-4 mt-6 text-sm text-slate-700 dark:text-slate-300">

                            <span>
                                ⭐ {course.rating}
                            </span>


                            <span>
                                {course.duration}
                            </span>


                            <span>
                                {course.category}
                            </span>

                        </div>

                        <p className=" mt-8leading-7 text-slate-700 dark:text-slate-300">
                            {course.description}
                        </p>

                        <h2 className=" text-2xl font-semibold text-slate-900 dark:text-white mt-10 mb-4">
                            What you'll learn
                        </h2>

                        <ul className=" space-y-3 text-slate-700 dark:text-slate-300">

                            {course.outcomes.map((item) => (

                                <li key={item}>
                                    ✅ {item}
                                </li>

                            ))}

                        </ul>

                        <div className="mt-10 max-w-xs">

                            <EnrollButton
                                courseId={course.id}
                            />

                        </div>

                    </div>

                </div>

            </div>

        </main>

    );
}