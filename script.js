function filterSessions() {
  var selectedSport = document.getElementById("sportFilter").value;
  var sessions = document.getElementsByClassName("session-card");

  for (var i = 0; i < sessions.length; i++) {
    if (selectedSport === "all") {
      sessions[i].style.display = "flex";
    } else if (sessions[i].classList.contains(selectedSport)) {
      sessions[i].style.display = "flex";
    } else {
      sessions[i].style.display = "none";
    }
  }
}

function bookSession(sessionName) {
  alert("You selected: " + sessionName + "\nYour place has been reserved.");
}

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;
  var error = document.getElementById("errorMessage");

  if (name === "" || email === "" || subject === "" || message === "") {
    error.innerHTML = "Please complete all fields.";
    return false;
  }

  if (!email.includes("@")) {
    error.innerHTML = "Please enter a valid email address.";
    return false;
  }

  alert("Thank you. Your message has been sent.");
  return true;
}
