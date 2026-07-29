import courses from "@/data/courses";

export default function CategoriesPage() {

    const categories = [
        "Web",
        "Data",
        "Design",
        "Mobile"
    ];


    return (

        <main className="bg-slate-900 min-h-screen p-8">

            <div className="max-w-6xl mx-auto">

                <h1 className="text-3xl text-white font-bold mb-8">
                    Categories
                </h1>

                {categories.map((category) => (

                    <div key={category} className="mb-8">

                        <h2 className="text-xl text-indigo-400 mb-4">
                            {category}
                        </h2>

                        <div className="grid md:grid-cols-3 gap-4">


                            {courses.filter((course) => course.category === category).map(course => (

                                <div
                                    key={course.id}
                                    className=" bg-slate-800 p-4 rounded-xl text-white"
                                >

                                    {course.title}

                                </div>

                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </main>
    )
}