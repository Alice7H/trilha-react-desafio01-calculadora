import { InputContainer } from './styles';

const Input = ({ value, color }) => {
  return (
    <InputContainer colorText={color}>
      <input disabled value={value} />
    </InputContainer>
  )
}

export default Input;