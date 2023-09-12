import { Routes, Route } from "react-router-dom";

import { Content } from "./layout/DefaultLayout";
import { Home } from "./screens/Home";

export function Router() {
  return (
    <Routes>
      {/* por que o 'path="/"' ? pois o <Header /> irá ser exibido em todos os
      endereçoes que começarem com "/" */}
      <Route path="/" element={<Content />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  );
}
