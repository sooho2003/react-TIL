import './header.css';
function Header(){

    const num1 = 5;
    const num2 = 3;
    const greeting = '안녕하세요';
    const program = 'JSX';
    const isLogin = false;
    return (
        <header>
            <h1 style={{backgroundColor:'yellow', color:'red'}}>logo</h1>
            <p style={{border:'2px solid #000'}}>숫자 {num1}에서 {num2}을 뺀 결과 {num1-num2}</p>
            <p style={{padding:'30px', margin:'10px'}}>{greeting}, {program} 출력결과 {greeting+program}</p>
            {/* const islogin = false; 일때 p태그에 '로그인 필요' 출력하기, 반대로 true면 p태그에 '로그인 성공' 출력하기 */}
            {/* 힌트:삼항조건연산자, 변수 */}
            <p>{isLogin ? '로그인 성공' : '로그인 필요'}</p>
        </header>
    )
}

export default Header;