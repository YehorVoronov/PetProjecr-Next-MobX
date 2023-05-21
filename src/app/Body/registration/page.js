import Link from 'next/link';

const Register = () => {
  return (
    <div>
      <h1>Registration Page</h1>
      <Link href="/auth/linkedIn">
        <div>Sign up with LinkedIn</div>
      </Link>
      <Link href="/auth/github">
        <div>Sign up with GitHub</div>
      </Link>
    </div>
  );
};

export default Register;
