import { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const [operation, setOperation] = useState('');

  const handleOnClear = () => {
    setCurrentNumber('0');
    setFirstNumber('0');
    setOperation('');
  }

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${num}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === '0') {
      handleChangeFirstNumber('+');
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      handleChangeCurrentNumber(String(sum));
    }
  }

  const handleMinusNumbers = () => {
    if (firstNumber === '0') {
      handleChangeFirstNumber('-');
    } else {
      const sum = Number(firstNumber) - Number(currentNumber);
      handleChangeCurrentNumber(String(sum));
    }
  }

  const handleMultiplicateNumbers = () => {
    if (firstNumber === '0') {
      handleChangeFirstNumber('x');
    } else {
      const sum = Number(firstNumber) * Number(currentNumber);
      handleChangeCurrentNumber(String(sum));
    }
  }

  const handleDivideNumbers = () => {
    if (firstNumber === '0') {
      handleChangeFirstNumber('/');
    } else {
      const sum = Number(firstNumber) / Number(currentNumber);
      handleChangeCurrentNumber(String(sum));

    }
  }

  const handleChangeCurrentNumber = (sum) => {
    setCurrentNumber(String(sum));
    setFirstNumber('0');
    setOperation('');
  }

  const handleChangeFirstNumber = (operator) => {
    setFirstNumber(String(currentNumber));
    setCurrentNumber('');
    setOperation(operator);
  }

  const handleEquals = () => {
    if (operation !== '') {

      switch (operation) {
        case '+':
          handleSumNumbers();
          break;
        case '-':
          handleMinusNumbers();
          break;
        case 'x':
          handleMultiplicateNumbers();
          break;
        case '/':
          handleDivideNumbers();
          break;
        default:
          break;
      }
    }
  }

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        {
          operation.length > 0 &&
          <Input value={`${firstNumber} ${operation} ${currentNumber}`} color={"#ffc400"} />
        }
        <Row>
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="x" onClick={handleMultiplicateNumbers} />
          <Button label="/" onClick={handleDivideNumbers} />
          <Button label="C" onClick={handleOnClear} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick={handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>
      </Content>
    </Container>
  );
}

export default App;
