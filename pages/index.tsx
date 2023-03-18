import { Button, Htag } from '../components';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h2">Text</Htag>
      <Button appearance="primary">Кнопка</Button>
      <Button appearance="ghost">Кнопка</Button>
    </>
  );
}
