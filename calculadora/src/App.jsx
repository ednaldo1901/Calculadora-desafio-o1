import Button from "./components/Button/Button";
import Input from "./components/Input/Input";

import { Container, Content, Row } from "./styled";
import { useState } from "react";

const App = () => {
  const [numeralAtual, setNumeroAtual] = useState("0");
  const [primeiroNumero, setPrimeiroNumero] = useState("0");
  const [operador, setOperador] = useState("");

  const handleClear = () => {
    setNumeroAtual("0");
    setPrimeiroNumero("0");
    setOperador("");
  };

  const handleAddNumero = (numero) => {
    setNumeroAtual((prev) => `${prev === "0" ? "" : prev}${numero}`);
  };

  const handleSomaNum = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(numeralAtual);
      setNumeroAtual("0");
      setOperador("+");
    } else {
      const sum = Number(primeiroNumero) + Number(numeralAtual);
      setNumeroAtual(String(sum));
      setPrimeiroNumero("0");
      setOperador("");
    }
  };

  const handleSubNum = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(numeralAtual);
      setNumeroAtual("0");
      setOperador("-");
    } else {
      const sum = Number(primeiroNumero) - Number(numeralAtual);
      setNumeroAtual(String(sum));
      setPrimeiroNumero("0");
      setOperador("");
    }
  };

  const handleMultiplicaNum = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(numeralAtual);
      setNumeroAtual("0");
      setOperador("x");
    } else {
      const sum = Number(primeiroNumero) * Number(numeralAtual);
      setNumeroAtual(String(sum));
      setPrimeiroNumero("0");
      setOperador("");
    }
  };

  const handleDivideNum = () => {
    if (primeiroNumero === "0") {
      setPrimeiroNumero(numeralAtual);
      setNumeroAtual("0");
      setOperador("/");
    } else {
      const sum = Number(primeiroNumero) / Number(numeralAtual);
      setNumeroAtual(String(sum));
      setPrimeiroNumero("0");
      setOperador("");
    }
  };

  const handleIgual = () => {
    if (operador === "+" ) {
      const result = Number(primeiroNumero) + Number(numeralAtual);
      setNumeroAtual(String(result));
      setPrimeiroNumero("0");
      setOperador("");
    }else if(operador === "-"){ 
      const result = Number(primeiroNumero) - Number(numeralAtual);
      setNumeroAtual(String(result));
      setPrimeiroNumero("0");
      setOperador("");
    }else if(operador === "x"){ 
      const result = Number(primeiroNumero) * Number(numeralAtual);
      setNumeroAtual(String(result));
      setPrimeiroNumero("0");
      setOperador("");
    }else if(operador === "/"){ 
      const result = Number(primeiroNumero) / Number(numeralAtual);
      setNumeroAtual(String(result));
      setPrimeiroNumero("0");
      setOperador("");
    }
  };

  return (
    <Container>
      <Content>
        <Input value={numeralAtual} />
        <Row>
          <Button label="7" onClick={() => handleAddNumero("7")} />
          <Button label="8" onClick={() => handleAddNumero("8")} />
          <Button label="9" onClick={() => handleAddNumero("9")} />
          <Button label="C" onClick={handleClear} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumero("4")} />
          <Button label="5" onClick={() => handleAddNumero("5")} />
          <Button label="6" onClick={() => handleAddNumero("6")} />
          <Button label="-" onClick={handleSubNum} />
        </Row>
        <Row>
          <Button label="3" onClick={() => handleAddNumero("3")} />
          <Button label="2" onClick={() => handleAddNumero("2")} />
          <Button label="1" onClick={() => handleAddNumero("1")} />
          <Button label="+" onClick={handleSomaNum} />
        </Row>
        <Row>
          <Button label="X" onClick={handleMultiplicaNum } />
          <Button label="0" onClick={() => handleAddNumero("0")} />
          <Button label="/" onClick={handleDivideNum} />
          <Button label="=" onClick={handleIgual} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;


