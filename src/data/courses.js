const courses = [
  {
    id: "1",
    title: "Full Stack Web Development",
    instructor: "Ahmad K.",
    category: "Web",
    rating: 4.8,
    duration: "12h",
    image: "https://picsum.photos/seed/1/400/240",
    description:
      "Learn HTML, CSS, JavaScript, React and Node.js by building real-world applications.",
    outcomes: [
      "Build full stack apps",
      "Master React",
      "Deploy projects"
    ]
  },

  {
    id: "2",
    title: "JavaScript Fundamentals",
    instructor: "Yara S.",
    category: "Web",
    rating: 4.7,
    duration: "9h",
    image: "https://picsum.photos/seed/11/400/240",
    description:
      "Learn the fundamentals of JavaScript from variables to asynchronous programming.",
    outcomes: [
      "Understand JavaScript basics",
      "Work with functions and arrays",
      "Build interactive web pages"
    ]
  },

  {
    id: "3",
    title: "SQL for Data Analytics",
    instructor: "Rami K.",
    category: "Data",
    rating: 4.8,
    duration: "10h",
    image: "https://picsum.photos/seed/13/400/240",
    description:
      "Learn SQL queries to analyze and manage large datasets efficiently.",
    outcomes: [
      "Write SQL queries",
      "Filter and sort data",
      "Generate analytical reports"
    ]
  },

  {
    id: "4",
    title: "UI UX Design Essentials",
    instructor: "Lina H.",
    category: "Design",
    rating: 4.6,
    duration: "8h",
    image: "https://picsum.photos/seed/4/400/240",
    description:
      "Design beautiful and user-friendly interfaces.",
    outcomes: [
      "Use Figma",
      "Create wireframes",
      "Build prototypes"
    ]
  },

  {
    id: "5",
    title: "Flutter Mobile Apps",
    instructor: "Ali N.",
    category: "Mobile",
    rating: 4.8,
    duration: "11h",
    image: "https://picsum.photos/seed/5/400/240",
    description:
      "Create cross-platform mobile apps with Flutter.",
    outcomes: [
      "Build Android apps",
      "Build iOS apps",
      "Publish apps"
    ]
  },

  {
    id: "6",
    title: "Python for Artificial Intelligence",
    instructor: "Dana A.",
    category: "Data",
    rating: 5.0,
    duration: "16h",
    image: "https://picsum.photos/seed/16/400/240",
    description:
      "Learn Python programming and apply it to Artificial Intelligence projects.",
    outcomes: [
      "Master Python basics",
      "Build AI applications",
      "Work with machine learning libraries"
    ]
  }
];

export default courses;