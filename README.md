# 🚀 DevStack

## 📌 Project Description

DevStack is a React-based web application where users can explore different technologies and add their favorite technologies to their personal stack.

Users can view technology information, add items to "Your Stack", and remove them when needed. The project is built to practice React concepts such as components, props, state, events, conditional rendering, and data fetching.

## 🛠️ Technologies Used

- React
- TypeScript
- Tailwind CSS
- Vite
- JSON Data

## ✨ Features

1. **Technology List**
   - Users can see different technologies with their information.

2. **Add to Stack**
   - Users can add a technology to "Your Stack".
   - After adding it, the "Add to Stack" button becomes disabled.

3. **Remove from Stack**
   - Users can remove a technology from "Your Stack".
   - The stack updates immediately without reloading the page.


# ⚛️ React Questions & Answers

### i. What is JSX, and why is it used in React?

JSX is a syntax that allows us to write HTML-like code inside JavaScript. It makes React components easier to write and understand.

### ii. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** is used to store and update data inside a component. When state changes, React updates the UI.

### iii. What does the `useState` hook do, and where did you use it in this project?

`useState` is used to store and update data in a React component.

In this project, I used `useState` to manage the technologies added to "Your Stack".

### iv. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` is used to perform side effects in React, such as fetching data.

In this project, I used `useEffect` to load the technology data from the JSON file when the component loads.

### v. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list. It helps React update the correct item efficiently when the list changes.

Example:

`technologies.map(technology => <Card key={technology.id} />)`

### vi. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different UI based on a condition.

In this project, I used it to show a message when "Your Stack" is empty.

Example:

`stack.length === 0 ? "Your Stack is Empty" : "Your Stack"`

### vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A parent component passes data to a child component using **props**.

A child can send information back to the parent by calling a **function passed from the parent as a prop**.

For example, the parent passes an `addToStack` function to the Card component. When the user clicks the "Add to Stack" button, the child calls that function to update the parent's state.
