import { Routes, Route } from "react-router-dom";

import { TestPage } from "../pages/TestPage";


export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TestPage />} />
    </Routes>
  );
}
