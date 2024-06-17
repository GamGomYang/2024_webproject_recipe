import React, { useState } from 'react';
import styles from './Login.module.css'; // 변경된 CSS 파일 임포트

function Login({ onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();

    const loginData = {
      username: username,
      password: password,
    };

    try {
      const response = await fetch('http://localhost:3000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage('로그인 성공');
        window.location.href = '/homepage';
      } else {
        setMessage('로그인 실패: ' + (data.message || 'Unknown error'));
      }
    } catch (error) {
      setMessage('로그인 실패: ' + error.message);
    }
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.login_box}>
        <div className={styles.login_inner}>
          <p className={styles.loginwelcome_txt}>
            <strong>요리보고 조리보고</strong><br />
            방문을 환영해요.
          </p>
          <form onSubmit={handleLogin}>
            <p className={`${styles.login_input} ${styles.login_id}`}>
              <label htmlFor="username">아이디</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="아이디"
                style={{ marginRight: '5px', width: '275px' }}
              />
            </p>
            <p className={`${styles.login_input} ${styles.login_pw}`}>
              <label htmlFor="password">비밀번호</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호"
                style={{ marginRight: '5px', width: '275px' }}
              />
            </p>
            <button type="submit" className={styles.btn_login_submit}>LOGIN</button>
            <p className={styles.check_row} tabIndex="0">
              <a href="/signup" id="signupLink">회원가입</a>
            </p>
          </form>
          {message && <p>{message}</p>}
        </div>
        <ul className={styles.login_footer}>
          <li>아직 가입을 못하셨다면?</li>
          <li>회원가입을 하여 즐겨보세요</li>
        </ul>
        <button type="button" className={styles.btn_login_close} onClick={onClose}>팝업 닫기</button>
      </div>
    </div>
  );
}

export default Login;
