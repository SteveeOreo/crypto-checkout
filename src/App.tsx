import { useState } from "react";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";

function App() {
  const [paid, setPaid] = useState(false);

  if (paid) {
    return <Success onBack={() => setPaid(false)} />;
  }

  return <Checkout onSuccess={() => setPaid(true)} />;
}

export default App;
