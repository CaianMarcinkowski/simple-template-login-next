import "./styles/home.scss";
import { CardLogin } from "./components/card/card";

export default function Home() {
  return (
    <main className='container'>
      <div className="card-mid">
        <p>Login</p>
        <input type="login" name="login" />
        <input type="password" name="pass" />
        <button type="submit">Submit</button>
      </div>
    </main>
  )
}
