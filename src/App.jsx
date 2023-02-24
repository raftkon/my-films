import Navbar from "./components/navbar/Navbar";
import AuthenticationPage from "./pages/authentication-page/AuthenticationPage";

function App() {
  return (
    <div className="bg-[#fbf9f3dd] min-h-screen">
      <Navbar />
      <AuthenticationPage />
    </div>
  );
}

export default App;
