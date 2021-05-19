interface ChildProps {
  color: string;
  onClick: () => void;
}

// Method 1: Don't tell TS that this is a React component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

// Method 2: Tell TS that this is a React (function) component
export const ChildAsFC: React.FC<ChildProps> = ({ color, onClick, children }) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};
