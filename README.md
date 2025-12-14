# Taylor Swift Quiz 🎤✨

This project is a simple quiz application built with React.  
The goal of the assignment was to create a form-based quiz with multiple question types, handle user input, and display a summary of the results once the quiz is submitted.

The quiz is themed around Taylor Swift and allows the user to answer a set of questions and receive a final score based on correct answers.

---

## Assignment Description

The assignment required:

- At least 3 questions
- At least one question using radio buttons
- At least one question using a select dropdown
- A submit button
- The form should be hidden after submission
- A summary view showing the user's results
- A responsive layout that works on mobile, tablet, and desktop


---

## Approach & Implementation

I approached this task by first planning the structure of the quiz and the data needed for each question.  
The questions are stored in an array of objects, which makes the quiz easy to scale and maintain.

### Tools & Techniques Used

- **React** for building the user interface
- **useState** for managing form state and submission state
- **Conditional rendering** to switch between the quiz form and the result view
- **Array mapping** to dynamically render questions and options
- **Vanilla CSS** for styling and responsiveness (no external UI libraries)

The application is fully responsive and adapts well to different screen sizes, from small mobile devices to larger desktop screens.

---

## If I Had More Time

If I had more time, I would:

- Show which questions were answered correctly or incorrectly
- Add a progress indicator while taking the quiz
- Create different result messages based on the score
- Add simple animations between the quiz and result views

---

## How to Run the Project Locally

### Dependency Installation & Startup Development Server

Once cloned, navigate to the project's root directory.  
This project uses **npm (Node Package Manager)** to manage dependencies.

Run the following command:

```bash
npm i && code . && npm run dev
