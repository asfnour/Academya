"use client"; 
 
import { useEnrollment } from "@/context/EnrollmentContext"; 
 
export default function EnrollButton({ courseId }) { 
 
    const { 
        action, 
        isEnrolled 
    } = useEnrollment(); 
 
 
    const enrolled = isEnrolled(courseId); 
 
 
    function handleClick() { 
 
        if (enrolled) { 
 
            action({ 
                type: "UNENROLL", 
                id: courseId, 
            }); 
 
        } else { 
 
            action({ 
                type: "ENROLL", 
                id: courseId, 
            }); 
 
        } 
 
    } 
 
 
    return ( 
        <button 
            onClick={handleClick} 
            className={`w-full mt-4 rounded-lg py-2 px-4 text-sm font-medium transition  
                ${enrolled 
                    ? "border border-green-500 text-green-600 dark:text-green-400 hover:bg-green-500 hover:text-white" 
                    : "bg-indigo-600 hover:bg-indigo-700 text-white"}`}> 
 
                {enrolled 
                    ? "✓ Enrolled" 
                    : "Enroll"} 
 
        </button> 
    ); 
}