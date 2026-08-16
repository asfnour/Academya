"use client";

import Link from "next/link";
import { useEnrollment } from "@/context/EnrollmentContext";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
    const { enrolledIds } = useEnrollment();

    return (
        <nav
            className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700 py-4"
        >
            <div
                className=" max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">

                <Link
                    href="/"
                    className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                    Academya
                </Link>

                <div
                    className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">

                    <Link
                        href="/"
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-white transition">
                        Courses
                    </Link>

                    <Link
                        href="/myCourses"
                        className="text-slate-600 dark:text-slate-300 hover:text-indigo-500 dark:hover:text-white transition">
                        My Courses ({enrolledIds.length})
                    </Link>
                    <ThemeToggle />

                </div>

            </div>
        </nav>
    );

}