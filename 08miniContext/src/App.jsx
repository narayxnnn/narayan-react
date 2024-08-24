import "./App.css";
import Login from "./components/Login";
import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>chai aur react and context api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
