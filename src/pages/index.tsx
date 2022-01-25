import type { NextPage } from 'next';
import tw, { styled } from 'twin.macro';

// still works despite importing from twin.macro
const StyledButton = styled.button`
  background: red;
  color: white;
  font-size: 1em;
  text-align: center;
  padding: 0.25em 1em;
  border: 2px solid black;
  margin: 8px 0;
`;

const TailwindButton = tw.button`
  bg-red-500
  hover:bg-red-700
  text-white
  font-bold
  py-2
  px-4
  border
  border-black
  rounded
  mx-4
`;

interface ConditionalButtonProps {
  isRed?: boolean;
}

const ConditionalButton = styled.button(({ isRed }: ConditionalButtonProps) => [
  isRed ? tw`bg-red-500 hover:bg-red-700` : tw`bg-blue-500 hover:bg-blue-500`,
  tw`
    text-white
    font-bold
    py-2
    px-4
    border
    border-black
    rounded
    mx-4
  `,
]);

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1 className="text-3xl font-bold underline mb-2">Hello world!</h1>
        <TailwindButton>Tailwind Button</TailwindButton>
        <StyledButton>Styled Button</StyledButton>
        <ConditionalButton isRed>Conditional Button</ConditionalButton>
      </main>
    </div>
  );
};

export default Home;
