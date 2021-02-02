import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';

import db from '../db.json';
import Widget from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import Footer from '../src/components/Footer';
import GitHubCorner from '../src/components/GitHubCorner';
import Input from '../src/components/Input';
import Button from '../src/components/Button';

//const BackgroundImage = styled.div`
//  background-image: url(${db.bg});
// flex: 1;
//  background-size: cover;
//  background-position: center;
//`;

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  console.log('retorno do useState', name, setName);

  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>RockQuiz</title>          
        
      </Head>
      <QuizContainer>
        <Widget>
        <Widget.Header>
          <h1>This is Rock n'Roll Baby!</h1> 
            </Widget.Header>
          <Widget.Content>
            <p>{db.description}</p>
          <form onSubmit={function (infosDoEvento) {
              infosDoEvento.preventDefault();
              router.push(`/quiz?name=${name}`);
              console.log('Fazendo uma submissão por meio do react');
            }}
            >
              <Input
                name="nome do usuário"
                onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}               
                placeholder="Diz ai seu nome"
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {`Jogar ${name}`}                
              </Button>
            </form> 
                      
         
          </Widget.Content>         
        </Widget>   
        <Widget>
        <Widget.Header>
            <h1>Quiz da Galera</h1>
            </Widget.Header>
         <Widget.Content>           
         <p>Um jogo divertido para você testar seus conhecimentos e desafiar seus amigos!</p>  
         </Widget.Content>  
        </Widget>
        <Footer/>    
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/Alessandroa1/Imersao-Alura-React-js-e-Next-js" />
    </QuizBackground>    
  );  
}
