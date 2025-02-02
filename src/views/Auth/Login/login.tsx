import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.css";

const LoginPage = () => {
  const { push } = useRouter();

  const handlerLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={() => handlerLogin()}>Login</button>
      <p>
        Belum Punya Akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginPage;
