import Header from './assets/Header';
import './Test.css';
//컴포넌트 생성 Test(부모컴포넌트)
function Test(){
    return (
        <>
            <Header />
            <Aside />
            <h1>Test 컴포넌트</h1>
        </>
    )
}

//다른컴포넌트에서 해당 Test컴포넌트 사용가능하도록 내보내기 설정
export default Test;

//자식컴포넌트
function Aside(){
    return(
        <aside>
            <h1 style={{borderBottom:'1px solid #f00'}}>서브메뉴</h1>
            <a href="#">메뉴1</a>
            <hr />
        </aside>
    )
}