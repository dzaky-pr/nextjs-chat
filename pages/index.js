import React, { useContext } from 'react';
import { Context } from '../context';
import { useRouter } from 'next/router';
import axios from 'axios';

export default function Auth() {
  const { username, secret, setUsername, setSecret } = useContext(Context);

  const router = useRouter();

  function onSubmit(e) {
    e.preventDefault();
    if (username.lengt === 0 || secret.lengt === 0) return;

    axios.put('https://api.chatengine.io/users/', { username, secret }, { headers: { 'Private-key': '32ff7663-7d35-4635-b846-f7648e9540e4' } }).then((r) => router.push('/chats'));
  }

  return (
    <div className="background">
      <div className="auth-container">
        <form className="auth-form" onSubmit={(e) => onSubmit(e)}>
          <div className="auth-title">Dzaky Chat</div>
          <div className="input-container">
            <input placeholder="Email" className="text-input" onChange={(e) => setUsername(e.target.value)}></input>
          </div>
          <div className="input-container">
            <input placeholder="Password" type="password" className="text-input" onChange={(e) => setSecret(e.target.value)}></input>

            <button className="submit-button" type="submit">
              Login / Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
