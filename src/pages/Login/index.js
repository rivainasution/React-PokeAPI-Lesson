import Content from './fragments/content';
import Sidebar from './fragments/sidebar/sidebar';
import './styles.css';

function Login() {
  let data = "Login";

  return (
    <div>
      <section className='login-container'>
        <Content data={data} />
        <Sidebar />
      </section>
    </div>
  );
}

export default Login;
