// This function updates the grade of students in a specific city
export default function updateStudentGradeByCity(students, city, newGrades) {
  // Check if the inputs are of the correct types
  if (!Array.isArray(students) || typeof city !== 'string' || !Array.isArray(newGrades)) {
    // If not, return an empty array
    return [];
  }

  // Filter the students array to get only the students in the specified city
  // Map the filtered students array to update their grades
  // Check if the student's location matches the specified city
  // Find the new grade for the current student in the newGrades array
  // Return a new object that contains the student's information and the new grade
  // If the student doesn't have a new grade, use 'N/A' as the grade
  // Check if the grade's studentId matches the current student's id

  return students
    .filter((student) => student.location === city)
    .map((student) => {
      const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
      return {
        ...student,
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
