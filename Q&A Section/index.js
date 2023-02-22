const questions = document.querySelectorAll(".question");

questions.forEach(function (question) {
  const btn = question.querySelector(".question-button");

  btn.addEventListener("click", function () {
    question.classList.toggle("show-text");
  });
});
