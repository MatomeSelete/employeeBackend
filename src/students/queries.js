const getStudents = "SELECT * FROM students";
const getStudentsById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT * FROM students s WHERE s.email = $1";

module.exports = {
    getStudents,
    getStudentsById,
    checkEmailExists,
}