# TaskFlow — Task Manager

A fully-featured task management app built with vanilla HTML, CSS, and JavaScript. No frameworks, no libraries — just clean JavaScript.

🌐 **Live demo:** [ayushrayamajhi-stack.github.io/todo-app](https://ayushrayamajhi-stack.github.io/todo-app)

---

## Screenshot



---

## Features

- ✅ Add tasks with a title, priority level, and due date
- 🔴 Priority levels — High, Medium, Low with colour-coded badges
- 📅 Due dates with overdue detection and highlighting
- ✏️ Inline editing — edit any task without leaving the page
- 🔍 Filter by All / Active / Completed / Overdue
- ↕️ Sort by newest, oldest, priority, or due date
- 📊 Stats bar showing total, high priority, medium, and completed counts
- 📈 Progress bar showing overall completion percentage
- 💾 localStorage — tasks persist after closing the browser
- 🔔 Toast notifications for every action
- 📭 Custom empty states for each filter
- 🎨 Smooth animations on task add and page load

---

## Tech Stack

- **HTML5** — semantic structure
- **CSS3** — custom properties, grid, flexbox, animations
- **JavaScript (ES6+)** — DOM manipulation, localStorage, array methods
- **No frameworks, no libraries**

---

## JavaScript Concepts Used

| Concept | Where |
|---|---|
| `localStorage.getItem / setItem` | Saving and loading tasks |
| `Array.filter()` | Filtering tasks by status |
| `Array.sort()` | Sorting tasks by different criteria |
| `Date` object | Due date comparison and overdue detection |
| `IntersectionObserver` | Not used here (see portfolio) |
| Template literals | Building task HTML dynamically |
| Event delegation | Handling clicks on dynamic elements |
| `JSON.parse / stringify` | Storing objects in localStorage |

---

## Run Locally

```bash
git clone https://github.com/ayushrayamajhi-stack/todo-app.git
cd todo-app
# Open index.html in your browser — no install needed
```

---

## What I Learned Building This

- Managing application state in vanilla JavaScript
- Using `localStorage` to persist data across sessions
- Building dynamic UI with template literals and DOM methods
- Handling edge cases like empty inputs, overdue dates, and empty states
- Writing reusable helper functions
- How to filter and sort arrays based on different conditions

---

## Future Improvements

- [ ] Drag and drop to reorder tasks
- [ ] Categories / tags
- [ ] Dark mode
- [ ] Export tasks as CSV

---

## Contact

- Email: its.ayushrayamajhi@gmail.com
- GitHub: [@ayushrayamajhi-stack](https://github.com/ayushrayamajhi-stack)
