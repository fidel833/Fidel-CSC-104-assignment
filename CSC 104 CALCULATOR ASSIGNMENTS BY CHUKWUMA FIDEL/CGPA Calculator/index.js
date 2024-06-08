function calculateCGPA() {
  var gradesInput = document.getElementById("grades").value;
  var grades = gradesInput.split(",");
  var totalCredits = grades.length;
  var totalGradePoints = 0;
  
  for (var i = 0; i < grades.length; i++) {
    var grade = grades[i].toUpperCase().trim(); // Convert to uppercase and trim spaces
    switch (grade) {
      case "A": totalGradePoints += 4; break;
      case "B+": totalGradePoints += 3.5; break;
      case "B": totalGradePoints += 3; break;
      case "C+": totalGradePoints += 2.5; break;
      case "C": totalGradePoints += 2; break;
      case "D": totalGradePoints += 1; break;
      case "F": totalCredits--; break; // If failed, reduce totalCredits
    }
  }
  
  var cgpa = totalGradePoints / totalCredits;
  if (!isNaN(cgpa)) {
    document.getElementById("result").innerHTML = "Your CGPA is: " + cgpa.toFixed(2);
  } else {
    document.getElementById("result").innerHTML = "Please enter valid grades.";
  }
}

