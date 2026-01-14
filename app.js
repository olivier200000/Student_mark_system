function calculate(choice) {
  const java = parseFloat(document.getElementById("java").value) || 0;
  const python = parseFloat(document.getElementById("python").value) || 0;
  const cpp = parseFloat(document.getElementById("cpp").value) || 0;
  const pascal = parseFloat(document.getElementById("pascal").value) || 0;

  const errorContainer = document.getElementById("error-container");
  const errorList = document.getElementById("error-list");

  errorList.innerHTML = "";
  errorContainer.style.display = "none";

  let errors = [];

  if (java === "" || java < 0 || java > 30) {
    errors.push("Java marks must be between 0 and 30.");
  }
  if (python === "" || python < 0 || python > 30) {
    errors.push("Python marks must be between 0 and 30.");
  }
  if (cpp === "" || cpp < 0 || cpp > 20) {
    errors.push("C++ marks must be between 0 and 20.");
  }
  if (pascal === "" || pascal < 0 || pascal > 20) {
    errors.push("Pascal marks must be between 0 and 20.");
  }

  if (errors.length > 0) {
    errors.forEach(function (msg) {
      let li = document.createElement("li");
      li.innerText = msg;
      errorList.appendChild(li);
    });
    errorContainer.style.display = "block";
    return;
  }

  const total = java + python + cpp + pascal;
  const avg = java + python + cpp + pascal / 4;

  let grade = "";
  if (total <= 100 && total >= 80) grade = "A";
  else if (total >= 70) grade = "B";
  else if (total >= 60) grade = "C";
  else if (total >= 50) grade = "D";
  else if (total < 50) grade = "FAIL";
  else "Marks Above 100 is not supported";

  switch (choice) {
    case "total":
      document.getElementById("resTotal").innerHTML = total;
      break;
    case "average":
      document.getElementById("resAvg").innerHTML = avg;
      break;
    case "grade":
      document.getElementById("resGrade").innerHTML = grade;
      break;
  }
}
