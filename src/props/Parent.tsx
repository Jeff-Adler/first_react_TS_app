import { ChildAsFC } from './Child';

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log('Clicked')}>
      Test
    </ChildAsFC>
  );
};

export default Parent;
