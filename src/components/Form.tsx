import { useRef, useState, type FormEvent } from "react";

interface FormDataState {
  name:string,
  email:string,
  password:string
}

const Form = () => {
  const [submittedData, setSubmittedDate] = useState<FormDataState>({
    name:'',
    email:'',
    password:''
  });

  const name = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)
  const password = useRef<HTMLInputElement>(null)

  const handleSubmit = (e:FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
    const nameValue = name.current!.value;
    const emailValue = email.current!.value;
    const passwordValue = password.current!.value;

    setSubmittedDate({
      name:nameValue,
      email:emailValue,
      password:passwordValue
    })
  }

  return (
    <form onSubmit={handleSubmit}>
       <input type="text" ref={name} />
       <input type="email" ref={email} />
       <input type="password" ref={password} />
       <button type="submit">Submit</button>

      <section>
        <h3>Name: {submittedData.name}</h3>
        <h3>Email: {submittedData.email}</h3>
        <h3>Password: {submittedData.password}</h3>
      </section>

    </form>
  )
}
export default Form;
