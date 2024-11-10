import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './solicitacao.css';

import logo from '../../assets/ConexAp.png';
import fundo from '../../assets/fundoConex.jpg';

export function Solicitacao() {
  const navigate = useNavigate();

  // Definindo os estados dos campos de formulário e de erro
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [church, setChurch] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Estado para controlar o carregamento

  // Função para validar o formato do telefone
  const validatePhone = (phone) => {
    const regex = /^[0-9]{10,11}$/; // Aceita telefones com 10 ou 11 dígitos
    return regex.test(phone);
  };

  // Função para validar o e-mail
  const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return regex.test(email);
  };

  // Função para validar a senha
  const validatePassword = (password) => {
    return password.length >= 8; // Valida se a senha tem pelo menos 8 caracteres
  };

  // Função para enviar a solicitação para a API
  const handleRequest = async (e) => {
    e.preventDefault(); // Impede o envio padrão do formulário

    // Validação simples dos campos
    if (!name || !email || !church || !phone || !password) {
      setError('Por favor, preencha todos os campos.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Por favor, insira um e-mail válido.');
      return;
    }

    if (!validatePhone(phone)) {
      setError('Por favor, insira um telefone válido (10 ou 11 dígitos).');
      return;
    }

    if (!validatePassword(password)) {
      setError('A senha deve ter no mínimo 8 caracteres.');
      return;
    }

    setIsLoading(true); // Inicia o carregamento enquanto envia os dados

    // Preparando os dados para a requisição
    const data = JSON.stringify({
      username: name,
      email: email,
      church: church, // Incluindo a igreja
      phone: phone,   // Incluindo o telefone
      password: password, // A senha vinda do input
      roles: ['admin'], // A role é apenas admin
    });

    const config = {
      method: 'post',
      url: 'http://localhost:8080/api/auth/signup',
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    try {
      const response = await axios.request(config);
      console.log(response.data);
      alert('Solicitação enviada com sucesso!'); // Sucesso
      navigate('/login'); // Redireciona para a página de login
    } catch (err) {
      setError('Ocorreu um erro ao enviar sua solicitação. Tente novamente.');
      console.error(err);
    } finally {
      setIsLoading(false); // Finaliza o carregamento
    }
  };

  return (
    <div className="row mt-page h-100 w-100 m-0 p-0">
      <div className="col-sm-5 d-flex justify-content-center align-items-center text-center">
        <form className="form-signin w-75 justify-content-center align-items-center text-center p-0" onSubmit={handleRequest}>
          <div className="justify-content-center align-items-center text-center">
            <img src={logo} className="logo mb-2" alt="Logo" />
            <h4 className="mb-4 w-100">Solicite sua conta.</h4>
            <h5 className="mb-4 text-secondary">Preencha os campos abaixo.</h5>
          </div>

          <div className="mt-2">
            <input
              className="w-75"
              type="text"
              placeholder="Informe o seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mt-2">
            <input
              className="w-75"
              type="email"
              placeholder="Informe o seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mt-2">
            <input
              className="w-75"
              type="text"
              placeholder="Informe a igreja que congrega"
              value={church}
              onChange={(e) => setChurch(e.target.value)}
              required
            />
          </div>
          <div className="mt-2">
            <input
              className="w-75"
              type="tel"
              placeholder="Informe um telefone para contato"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
            />
          </div>
          <div className="mt-2">
            <input
              className="w-75"
              type="password"
              placeholder="Crie uma senha (mínimo 8 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="mt-2 text-danger">{error}</div>} {/* Exibição do erro */}

          <div className="mt-3 mb-5">
            <button className="btn-login btn btn-primary w-75" type="submit" disabled={isLoading}>
              {isLoading ? 'Enviando...' : 'Solicitar minha conta'}
            </button>
          </div>

          <div>
            <span className="me-1">Já tenho uma conta.</span>
            <Link to="/login">Acessar agora!</Link>
          </div>
        </form>
      </div>

      <div className="col-sm-7 p-0">
        <img src={fundo} className="background-login" alt="Background" />
      </div>
    </div>
  );
}