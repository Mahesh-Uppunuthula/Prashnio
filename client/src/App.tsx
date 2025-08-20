import { Button } from "@/components/ui/button";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount((c) => c + 1)}>count {count}</Button>
    </div>
  );
}

export default App;
