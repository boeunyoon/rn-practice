import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Button from './components/Button';
import CalcButton, { ButtonTypes } from './components/CalcButton';
import { useState } from 'react';
//커스텀 컴포넌트는 앞글자가 대문자여야한다.
//반드시 JSX를 반환해야한다.

export default function App() {
  const isError = true;
  const [result, setResult] = useState(0);
  const [formula, setFormula] = useState([]);
  const width = (useWindowDimensions().width - 5) / 4; //버튼 하나의 너비값이다.
  console.log(formula);
  const Operators = {
    CLEAR: 'C',
    MINUS: '-',
    PLUS: '+',
    EQUAL: '=',
  };
  const onPressNumber = (num) => {
    const last = formula[formula.length - 1];
    if (isNaN(last)) {
      setResult(num);
      setFormula((prev) => [...prev, num]);
    } else {
      const newNumber = (last ?? 0) * 10 + num;
      setResult(newNumber);
      setFormula((prev) => {
        prev.pop();
        return [...prev, newNumber];
      });
    }
  };
  const onPressOperator = (operator) => {
    switch (operator) {
      case Operators.CLEAR:
        setResult(0);
        setFormula([]);
        break;
      case Operators.EQUAL:
        calculate();
        break;
      //TODo
      default:
        const last = formula[formula.length - 1];
        if ([Operators.PLUS, Operators.MINUS].includes(last)) {
          setFormula((prev) => {
            prev.pop();
            return [...prev, operator];
          });
        } else {
          setFormula((prev) => [...prev, operator]);
        }
    }
  };
  const calculate = () => {
    let calcluatedNumber = 0;
    let operator = '';
    formula.forEach((value) => {
      if ([Operators.PLUS, Operators.MINUS].includes(value)) {
        operator = value;
      } else {
        if (operator === Operators.PLUS) {
          calcluatedNumber += value;
        } else if (operator === Operators.MINUS) {
          calcluatedNumber -= value;
        } else {
          calcluatedNumber = value;
        }
      }
    });
    setResult(calcluatedNumber);
    setFormula([]);
  };
  return (
    //Hook의 규칙
    //1. 함수 컴포넌트 혹은 커스턴 Hook에서만 사용해야한다.
    //2. 함수 최상위에서만 사용해야한다.

    // 레이아웃을 담당하는 컴포넌트
    <View style={styles.container}>
      {/* <Text style={{ fontSize: 60, marginBottom: 10 }}>{result}</Text>
      <CalcButton
        title="+"
        onPress={() => {
          // setResult(result + 1); // 0 -> 1 로 변환을 준비중
          // console.log(result);
          // setResult(result + 1); //아직 변경 되지 않음 -> 0 -> 1로 변환 준비중
          // console.log(result); // result는 0
          setResult((prev) => {
            //이러한 방식을 통해 해결가능
            //이를 함수형 업데이트라고 한다. 값을 반환하지 않는다면 상태변수가 적용되지 않는다. 이러한 기능을 HOOK이라고한다.
            console.log(prev);
            return prev + 1;
          });
          setResult((prev) => {
            console.log(prev);
            return prev + 1;
          });
        }}
        buttonStyle={{ width: 100, height: 100, marginBottom: 10 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <CalcButton
        title="-"
        onPress={() => {
          setResult(result - 1);
          console.log(result);
        }}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      />
      <CalcButton
        title="1"
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      />
      <CalcButton
        title="0"
        onPress={() => {}}
        buttonStyle={{ width: 200, height: 100 }}
        buttonType={ButtonTypes.NUMBER}
      />
      <CalcButton
        title="="
        onPress={() => {}}
        buttonStyle={{ width: 100, height: 100 }}
        buttonType={ButtonTypes.OPERATOR}
      /> */}
      {/* <Text
        //카멜케이스로 속성을 전달해야한다. 속성의 값에는 단위 없이 값만 전달한다.
        style={styles.text}
      >
        RN Calc App
      </Text> */}
      {/* <Text style={styles.text}>RN Calc App2</Text> */}
      {/*스타일을 여러개 적용 가능하다.(배열을 사용한다.) ,뒤에 있는 스타일이 앞에 있는 스타일을 덮어쓴다. */}
      {/* && 연산자를 통해 동적인 스타일을 적용할 수 있다. undefind, null의 경우 false가 아닌 그 자체가 반환 */}
      {/* 문자열, Object, 숫자등은 true를 반환 */}
      {/* <Text style={[styles.text, isError && styles.error]}>Error Message</Text> */}
      {/* <Text style={[styles.error, styles.text]}>Error Message</Text> */}
      {/* <Button
        title="button" //필수이다.
        color={'skyblue'} //안드로이드는 배경을, IOS는 글자색을 변화시킨다.
        onPress={() => console.log('click')} //필수이다.
      /> */}
      {/* <Button
        title="button" //필수이다.
        color={'skyblue'} //안드로이드는 배경을, IOS는 글자색을 변화시킨다.
        onPress={() => console.log('click')} //필수이다.
      />
      <Button /> */}
      {/* <StatusBar barStyle={'light-content'} backgroundColor={'orange'} /> 리액트 네이티브에서 제공하는 status bar*/}
      {/* expo에서 제공하는 status bar */}
      <StatusBar style="light" />
      <View style={styles.resultContainer}>
        {/* 결과물 */}
        <Text style={styles.result}>
          {result.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        </Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftPad}>
          <View style={styles.number}>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
              return (
                <CalcButton
                  key={num}
                  title={num.toString()}
                  onPress={() => onPressNumber(num)}
                  buttonStyle={{ width, height: width, marginTop: 1 }}
                  buttonType={ButtonTypes.NUMBER}
                />
              );
            })}
          </View>
          <View style={styles.bottom}>
            <CalcButton
              title="0"
              onPress={() => onPressNumber(0)}
              buttonStyle={{ width: width * 2, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.NUMBER}
            />
            <CalcButton
              title="="
              onPress={() => onPressOperator(Operators.EQUAL)}
              buttonStyle={{ width: width, height: width, marginBottom: 1 }}
              buttonType={ButtonTypes.OPERATOR}
            />
          </View>
        </View>
        <View style={styles.operator}>
          <CalcButton
            title="C"
            onPress={() => onPressOperator(Operators.CLEAR)}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <CalcButton
            title="-"
            onPress={() => onPressOperator(Operators.MINUS)}
            buttonStyle={{ width, height: width, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
          <CalcButton
            title="+"
            onPress={() => onPressOperator(Operators.PLUS)}
            buttonStyle={{ width, height: width * 2, marginBottom: 1 }}
            buttonType={ButtonTypes.OPERATOR}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    color: 'orange',
  },
  error: {
    fontSize: 30,
    fontWeight: '700',
    color: 'red',
  },
  resultContainer: {
    flex: 1, //flex는 비율로 공간을 채워 나간다. 또한 차지 할 수 있는 공간 내에서 차지한다.
    // flexDirection: 'row', //쌓여나가는 방향을 정한다. flex를 이용해서는 차지하는 공간을 결정한다.
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    backgroundColor: '#000000',
    fontSize: 60,
  },
  buttonContainer: {
    flexDirection: 'row',
    backgroundColor: 'black',
    justifyContent: 'space-evenly',
  },
  result: {
    color: '#ffffff',
    fontSize: 60,
    fontWeight: '700',
    padding: 30,
  },
  number: {
    flexWrap: 'wrap-reverse',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  operator: {},
  leftPad: {
    width: '75%',
  },
});
