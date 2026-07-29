"use client";

import { createContext, useContext, useReducer, useEffect, useState } from "react";


const EnrollmentContext = createContext();

function enrollmentReducer(state, action) {
  switch (action.type) {
    case "ENROLL":
      if (state.includes(action.id)) {
        return state;
      }

      return [...state, action.id];

    case "UNENROLL":
      return state.filter((id) => id !== action.id);

    default:
      return state;
  }
}

export function EnrollmentProvider({ children }) {

  const [enrolledIds, dispatch] = useReducer(
    enrollmentReducer,
    []
  );

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("enrolledCourses");

    if (saved) {
      JSON.parse(saved).forEach((id) => {
        dispatch({
          type: "ENROLL",
          id,
        });
      });
    }

    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (!isLoaded) return;

    localStorage.setItem(
      "enrolledCourses",
      JSON.stringify(enrolledIds)
    );
  }, [enrolledIds, isLoaded]);

  const isEnrolled = (id) => {
    return enrolledIds.includes(id);
  };

  return (
    <EnrollmentContext.Provider
      value={{
        enrolledIds,
        dispatch,
        isEnrolled,
      }}
    >
      {children}
    </EnrollmentContext.Provider>
  );
}

export function useEnrollment() {
  return useContext(EnrollmentContext);
}