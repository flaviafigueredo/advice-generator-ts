# Advice generator

## Descrição
Essa é a solução para o [Desafio do aplicativo gerador de conselhos do Frontend Mentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db). O aplicativo exibe conselhos aleatórios obtidos de uma API externa, proporcionando uma interface dinâmica e responsiva.

## Objetivo
Os usuários devem ser capazes de:

- Ver o layout ideal para o aplicativo, dependendo do tamanho da tela do dispositivo
- Ver os estados de foco para todos os elementos interativos na página
- Gerar um novo conselho clicando no ícone do dado

## Tecnologias utilizadas
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **TypeScript**: Superset de JavaScript que adiciona tipagem estática ao código, garantindo maior segurança.
-  **Styled Components**: Biblioteca para aplicar estilos CSS com escopo local nos componentes do React, facilitando a manutenção.
- **Axios**: Cliente HTTP para fazer requisições à API de forma simples e intuitiva.
- **API**: [Advice Slip API](https://api.adviceslip.com/) que fornece conselhos aleatórios em formato JSON.

## Instalação

1. Clone o repositório:
```bash
git clone <link-do-repositório>
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
npm run dev
```

4. Acesse o aplicativo em http://localhost:5173

## O que Aprendi:

### TypeScript e Verificação de Tipos

Este projeto foi uma oportunidade para aprimorar minhas habilidades em TypeScript, uma linguagem que adiciona tipagem estática ao JavaScript. Trabalhar com TypeScript me ajudou a entender como a tipagem pode prevenir erros durante o desenvolvimento e aumentar a robustez do código.

Defini tipos explícitos para variáveis e funções, o que melhorou a legibilidade do código e facilitou a identificação de erros. Por exemplo, ao definir o tipo 

```typescript
type AdviceResponse = {
    advice: string;
    adviceID: number;
} | { error: string }
```
Estou especificando que a função fetchAdvice pode retornar um objeto com uma estrutura bem definida: ou um objeto contendo um advice (string) e um adviceID (número), ou um objeto de erro com uma propriedade error (string). Essa abordagem me permite verificar o tipo de retorno da função de forma clara, melhorando a legibilidade do código.

Ao utilizar TypeScript, pude aplicar verificações de tipo ao longo do código, como nesta parte da função fetchAdvice:

```typescript
const response = await axios.get("https://api.adviceslip.com/advice")

const advice: string = response.data.slip.advice
const adviceID: number = response.data.slip.id
```
Essas declarações garantem que advice e adviceID sejam sempre do tipo esperado, permitindo que eu lide com os dados recebidos de maneira mais segura. Se a API retornar um formato inesperado, o TypeScript sinaliza um erro durante o desenvolvimento, ajudando a evitar falhas em tempo de execução.

Além disso, a verificação de tipos me incentivou a pensar de forma mais cuidadosa sobre a estrutura de dados que minha aplicação manipula, resultando em um código mais limpo e menos propenso a erros. A experiência com TypeScript não apenas melhorou a qualidade do meu código, mas também aumentou minha confiança ao trabalhar em projetos maiores e mais complexos.

### Encurtamento de Imports

Durante o desenvolvimento deste projeto, aprendi a importância e os benefícios de encurtar os imports. Utilizar caminhos de importação mais curtos não apenas melhora a legibilidade do código, mas também facilita a manutenção e a escalabilidade do projeto. Em vez de usar caminhos longos e complexos, como:

```typescript
import { fetchAdvice } from '../../../services/adviceApi'
```

optei por configurar um alias no TypeScript, que me permitiu utilizar um caminho mais conciso:

```typescript
import { fetchAdvice } from '@services/adviceApi'
```

Isso simplifica o código e reduz erros ao mover arquivos, além de facilitar a colaboração entre desenvolvedores.

### Uso da Propriedade clamp()

Aprendi sobre a propriedade CSS clamp(), que permite definir tamanhos de fonte responsivos. A clamp() aceita três valores:

- Valor mínimo: O menor tamanho que a fonte pode ter.
- Valor preferido: Um tamanho que se ajusta proporcionalmente, geralmente utilizando unidades relativas como vw (viewport width) ou vh (viewport height).
- Valor máximo: O maior tamanho que a fonte pode alcançar.

Essa abordagem é extremamente útil para garantir que o texto seja legível em diferentes tamanhos de tela, proporcionando uma melhor experiência do usuário. Com clamp(), consegui evitar que o texto ficasse muito pequeno em dispositivos móveis ou excessivamente grande em telas maiores.

Por exemplo, ao definir o tamanho da fonte da seguinte forma:

```css
font-size: clamp(1.6rem, 4vw + 1rem, 2.8rem);
```

Especifico limites claros para a fonte, garantindo legibilidade em diferentes tamanhos de tela.

