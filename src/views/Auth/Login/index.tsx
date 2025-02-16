import Link from "next/link";
import { useRouter } from "next/router";
import styles from "./Login.module.scss";

const LoginViews = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push("/product");
  };

  return (
    <div className={styles.login}>
      <h1>Login Page</h1>
      <button onClick={() => handleLogin()}>Login</button>
      <p>
        Belum Punya Akun? Registrasi <Link href={"/auth/register"}>disini</Link>
      </p>
    </div>
  );
};

export default LoginViews;
