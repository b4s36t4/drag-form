interface Props {
  title?: string;
  style?: string;
}
const Button = ({ title, style }: Props) => {
  return (
    <div
      className={`py-2 w-full px-2 rounded-md text-center text-white bg-green-600 ${style}`}
    >
      {title}
    </div>
  );
};

export default Button;
