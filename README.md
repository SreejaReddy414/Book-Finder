# 📚 Book Finder

Book Finder is a simple web app built with **React** and **Tailwind CSS** that allows users to search for books using the [Open Library API](https://openlibrary.org/developers/api).  

---

## 🚀 Features

- 🔍 Search books by title, author and ISBN number.
- 📖 View book details: title, author(s), first publish year.  
- 🖼️ Book cover images from Open Library.  
- 🎨 Clean, responsive UI built with Tailwind CSS.  
- 📱 Mobile-friendly layout.  

---

## 🧑‍🎓 User Persona

- **Name:** Alex  
- **Occupation:** College Student  
- **Need:** Alex wants a simple way to search books for learning, entertainment, and research.  
- **Solution:** Book Finder helps Alex quickly find books, view covers, and basic info in a neat UI.  

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS  
- **API:** [Open Library Search API](https://openlibrary.org/search.json)  
- **Deployment:** Works on StackBlitz, CodeSandbox, Vercel, or Netlify  

---
## 📂 Project Structure
```
book-finder/
├── src/
│ ├── components/
│ │ ├── SearchBar.jsx
│ │ ├── BookCard.jsx
│ │ └── BookList.jsx
│ ├── App.jsx
│ ├── index.css
│ └── main.jsx
├── public/
├── package.json
├── tailwind.config.js
└── README.md

```


## ⚡ Getting Started

### 1. Clone the repo
```bash
git clone https://github.com/yourusername/book-finder.git
cd book-finder
```
### 2. Install dependencies
```bash

npm install
```
### 3. Start development server
```bash

npm start
```
### 4. Build for production
```
npm run build
```
### 🔗 API Usage
Books are fetched from the Open Library Search API:

```
https://openlibrary.org/search.json?title={bookTitle}
```
Covers are fetched using the cover_i field:
```
https://covers.openlibrary.org/b/id/{cover_i}-M.jpg
```



### ✨ Future Improvements
Add pagination or infinite scroll.

Add dark mode toggle.

Allow bookmarking favorite books (local storage).


