import { Link } from 'react-router-dom';
import { AppBody } from './App.style';

function App() {
  return (
    <AppBody>
      <Link to="/시장" style={{fontSize: '30px', textDecoration: 'none', color: '#1c79bc'}}>🛒 시장페이지로 이동하기</Link>
    </AppBody>
  );
}

export default App;
