import './App.css';

const courses = [
  { id: 1, title: "React с нуля", price: 15000, level: "Начальный уровень" },
  { id: 2, title: "Node.js для бэкенда", price: 18000, level: "Средний уровень" },
  { id: 3, title: "Python для анализа данных", price: 20000, level: "Начальный уровень" },
  { id: 4, title: "UX/UI дизайн интерфейсов", price: 13500, level: "Начальный уровень" },
  { id: 5, title: "Java Enterprise", price: 24000, level: "Продвинутый уровень" },
  { id: 6, title: "Тестирование ПО", price: 11000, level: "Начальный уровень" }
];

function CourseCard({ title, price, level }) {
  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{level}</p>
      <p><b>{price} ₽</b></p>
      <button>Записаться</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <header>
        <h1>CodeCamp</h1>
      </header>

      <main>
        <h2>Наши курсы</h2>
        
        <div className="grid">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;