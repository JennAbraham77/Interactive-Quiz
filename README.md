# 🌟 Web Design Quiz

An **interactive web-based quiz** that tests knowledge of **HTML**, **CSS**, and **JavaScript**.
Questions are graded by difficulty — Easy, Medium, and Hard — and your score reflects how tough each question is.

---

## ✨ Features

* 🎨 Smooth gradient background & animated waves
* 📋 10 questions about HTML, CSS, and JS
* 🧠 Questions scored by difficulty:

  * Easy = 1 point
  * Medium = 2.5 points
  * Hard = 5 points
* ✅ Visual feedback for correct/incorrect answers
* 🔁 Restart option with performance message

---

## 🛠️ Tech Stack

* **HTML5** – page content & structure
* **CSS3** – styling, gradients, animations, responsive layout
* **Vanilla JavaScript** – quiz logic, scoring, feedback

---

## 📂 Project Structure

```
web-design-quiz/
│
├── Quiz.html   # Full quiz page (HTML, CSS, JS all in one)
└── (optional) split into:
    ├── style.css
    └── script.js
```

> ✨ Currently, all code is in `Quiz.html`, but you can separate CSS and JS for better organization.

---

## 🚀 Getting Started

1. **Clone or download** this repository:

   ```bash
   git clone https://github.com/your-username/web-design-quiz.git
   ```

2. Open `Quiz.html` in any modern browser.
   *(No server needed — it’s pure client-side code.)*

---

## 🎮 How to Play

1. Click **Start Quiz** to begin.
2. Answer each question — you’ll see instant feedback.
3. Click **Next Question** to continue.
4. At the end, view your score out of 25 and a performance message.
5. Use **Restart Quiz** to try again.

---

## 🖌️ Customization

* **Questions**

  * Inside the `<script>` tag, edit the `questions` array:

    ```js
    const questions = [
      { question: "What does HTML stand for?", choices: [...], correct: 1 },
      // Add more here
    ];
    ```
* **Difficulty & Points**

  * Adjust the logic in `loadQuestion()` and `checkAnswer()` for custom scoring.
* **Styling**

  * Change colors, fonts, or animations in the `<style>` section.

---

## 📌 Future Enhancements

* ⏱️ Timer for each question
* 🌙 Dark / light mode toggle
* 🏆 Leaderboard using LocalStorage
* 📱 Better mobile responsiveness

---

## 🤝 Contributing

Got ideas for improvements?
Fork this repo, make changes, and submit a pull request!

---

## 📄 License

This project is released under the [MIT License](LICENSE).


