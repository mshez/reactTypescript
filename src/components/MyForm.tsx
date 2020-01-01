import React,{useState} from 'react';
import {FormProps} from '../types'

const MyForm:React.FC<FormProps> = ({user}) => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const handleSubmit = () => {
        alert(`You user name is ${username} and password ${password}`)
    };
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {value} : {value:string} = e.target;
        setPassword(value)
    };
    return (
        <form onSubmit={handleSubmit}>
            <h1>Hello {user}</h1>
            <input
                name="username"
                value={username}
                onChange={ (e)=>{
                setUsername(e.target.value)
            }}
                type="text"
            />
            <input
                name="password"
                value={password}
                onChange={handleChange}
                type="text"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default MyForm;