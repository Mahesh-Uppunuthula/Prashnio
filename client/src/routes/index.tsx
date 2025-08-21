import { Button } from "@/components/ui/button";
import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Button onClick={() => setCount((c) => c + 1)}>count {count}</Button>
    </div>
  );
}
