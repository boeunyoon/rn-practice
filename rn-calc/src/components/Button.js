import { Pressable, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
const Button = ({ title }) => {
  return (
    // <TouchableOpacity
    //   onPress={() => console.log('click')}
    //   style={{ backgroundColor: 'orange', borderRadius: '8', padding: 10 }}
    //   underlayColor={'black'}
    // >
    //   <Text>{title}</Text>
    // </TouchableOpacity>
    <Pressable //Pressable 컴포넌트를 사용하는 것을 권장한다.
      onPressIn={() => console.log('onPress IN')}
      onPressOut={() => console.log('onPress Out')}
      onPress={() => console.log('onPress')}
      onLongPress={() => console.log('onLong Press')}
      style={({ pressed }) => [
        //스타일로 함수를 전달한다. 반드시 리턴 값이 필요하다.
        { backgroundColor: 'orange', padding: 10, borderRadius: 8 },
        pressed && { backgroundColor: 'skyblue', opacity: 0.3 }, //클릭시 스타일 변경하는 코드
      ]}
      underlayColor={'black'}
    >
      <Text>{title}</Text>
    </Pressable>
  );
};

Button.defaultProps = {
  title: 'Default',
};
//prop type을 검사하게 된다면 잘못된 값을 전달할 때 확인이 편하다. -> 에러가 자세하게 나온다.
Button.PropTypes = {
  title: PropTypes.string,
};
export default Button;
