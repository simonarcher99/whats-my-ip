import Card from "./UI/Card";
import IpAddress from "./Components/IpAddress";

function App() {
  return (
    <Card>
      <h1>Your IP address is...</h1>
      <IpAddress />
    </Card>
  );
}

export default App;
