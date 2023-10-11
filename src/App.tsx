import { Routes, Route } from "react-router-dom";
import { Home, TodosPage, NotFoundPage } from "./pages";
import { Layout } from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/todos" element={<TodosPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
