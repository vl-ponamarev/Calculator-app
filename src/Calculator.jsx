import React, { useState } from 'react';
import { ButtonCalc } from './ui/ButtonCalc';
import * as math from 'mathjs';
import { Input } from 'antd';
import { ClearOutlined, SaveOutlined, MediumOutlined, MessageOutlined } from '@ant-design/icons'

export const Calculator = () => {

    const [calculatorState, setCalculatorState] = useState({
        input: '',
        result: '',
        savedResult: { input: '', result: '' },
        showSavedResult: false,
      });

    const data = [1, 2, 3, '+', 4, 5, 6, '-', 7, 8, 9, '*', 0, '.', '=', '/']

    const handleButtonClick = (value) => {
        setCalculatorState((prevState) => ({
          ...prevState,
          showSavedResult: false,
          input: prevState.input + value,
        }));
      };

    const handleCalculate = () => {
        try {
          const calculatedResult = math.evaluate(calculatorState.input);
          setCalculatorState((prevState) => ({
            ...prevState,
            result: calculatedResult,
            showSavedResult: false,
          }));
        } catch (error) {
          setCalculatorState((prevState) => ({
            ...prevState,
            result: 'Неверный формат',
            showSavedResult: false,
          }));
        }
      };

      const handleInputChange = (e) => {
        setCalculatorState((prevState) => ({
          ...prevState,
          input: e.target.value,
          showSavedResult: false,
        }));
      };

      const handleClear = () => {
        setCalculatorState({
          input: '',
          result: '',
          savedResult: calculatorState.savedResult,
          showSavedResult: false,
        });
      };

    const handleSave = () => {
        setCalculatorState((prevState) => ({
          ...prevState,
          savedResult: {
            input: calculatorState.input,
            result: calculatorState.result,
          },
        }));
      };

    const handleShow = () => {
        setCalculatorState((prevState) => ({
          ...prevState,
          showSavedResult: true,
        }));
      };

    const bottomButtons = [
        { onClick: handleClear, icon: <ClearOutlined />, tooltipText: "Очистить" },
        { onClick: handleSave, icon: <SaveOutlined />, tooltipText: "Сохранить" },
        { onClick: handleShow, icon: <MediumOutlined />, tooltipText: "Последнее вычисление" },
        { onClick: null, icon: <MessageOutlined />, tooltipText: "Связаться", href: "https://t.me/vladimir_ponamarev" },
      ];

    return (
      <div className="calculator">
        <Input
        style={{fontSize: 20, marginBottom: 12}}
          type="text"
          value={calculatorState?.showSavedResult ?
            calculatorState?.savedResult.input :
            calculatorState.input}
          onChange={handleInputChange}
          placeholder="Введите выражение..."
          size='large'
          onKeyUp={(e) => {
            if (e.key === 'Enter') {
              handleCalculate();
             }
          }}
          />
          <div className="buttons">
              {data.map((symbol, index) => (
                  <ButtonCalc
                  shape="circle"
                  size="large"
                  key={index}
                  onClick={() => (symbol === '=' ? handleCalculate() : handleButtonClick(symbol))}>
                  {symbol}
                   </ButtonCalc>

                ))}
            </div>
            <div className="buttons_bottom">
            {bottomButtons.map((button, index) => (
                <ButtonCalc key={index} shape="circle" size="large" {...button} />
            ))}
            </div>
            <div className="result">
                <p className="text">
                {calculatorState.showSavedResult ?
                calculatorState.savedResult.result :
                calculatorState.result}
                </p>
            </div>
        </div>
    );
}
