import { CustomeButton } from "./Button.Styles";

const Button = ({ text, onClick = () => {}, background,color, width, style = {} }) => {
  return (
    <CustomeButton
      onClick={onClick}
      width={width}
      style={style}
      color={color}
      background={background}
    >
      {text}
    </CustomeButton>
  );
};

export default Button;
