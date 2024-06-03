export default function getStudentsByLocation(students, city) {
    if (!Array.isArray(students)) {
        return [];
    } else {
        return students.filter(function(student) {
            return student.location === city;
        });
    }
}