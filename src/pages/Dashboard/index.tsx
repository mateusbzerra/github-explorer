import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImage from '../../assets/logo.svg';
import { Container, Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <Container>
    <img src={logoImage} alt="Github Explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input type="text" placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/17644982?s=460&u=eb3394a14934d0228207c4071cc79edf80cac825&v=4"
          alt="Mateus Bezerra"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/17644982?s=460&u=eb3394a14934d0228207c4071cc79edf80cac825&v=4"
          alt="Mateus Bezerra"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="/">
        <img
          src="https://avatars0.githubusercontent.com/u/17644982?s=460&u=eb3394a14934d0228207c4071cc79edf80cac825&v=4"
          alt="Mateus Bezerra"
        />
        <div>
          <strong>rocketseat/unform</strong>
          <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </Container>
);

export default Dashboard;
