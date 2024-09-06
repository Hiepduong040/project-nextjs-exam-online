interface User {
  id: number;
  username: string;
  password: string; 
  email: string;
  role: number; 
  profilePicture: string;
  status: number; 
}

interface Course {
  id: number;
  title: string;
  description: string;
}

interface ExamSubject {
  id: number;
  title: string;
  description: string;
  coursesId: number;
}

interface Exam {
  id: number;
  title: string;
  description: string;
  duration: number; 
  examSubjectsId: number;
}

interface Question {
  id: number;
  question: string;
  examId: number;
  options: string[];
  answer: string;
}

interface UserAnswer {
  id: number;
  userId: number;
  exampId: number;
  score: number;
}

6
