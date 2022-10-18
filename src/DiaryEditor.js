import { useRef, useState } from "react";

const DiaryEditor = ({onCreate}) => {

    const authorInput = useRef();
    const cotentInput = useRef();

    const [state, setState] = useState({
        author: "",
        content: "",
        emotion: 1,
    })

    const handChangeState = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value,
        })
    }

    const handSubmit = () => {
        if (state.author.length < 1) {
            // alert("작성자는 최소 1글자 이상 입력해주세요.");
            authorInput.current.focus();
            return ;
        }
        if (state.content.length < 5) {
            // alert("일기본문은 최소 5글자 이상 입력해주세요.");
            cotentInput.current.focus();
            return ;
        }

        onCreate(state.author, state.content, state.emotion)
        alert("저장성공");
        setState({
            author:"",
            content: "",
            emotion: ""
        })
    }

    return <div className="DiaryEditor">
        <h2>오늘의 일기</h2>
        <div>
            <input
            ref={authorInput}
            name="author"
            value={state.author}
            onChange={handChangeState}
            />
        </div>
        <div>
            <textarea
            ref={cotentInput}
            name="content"
            value={state.content}
            onChange={handChangeState}
            />
        </div>
        <div>
            <span>오늘의 감정점수 : </span>
            <select
            name='emotion'
            value={state.emotion}
            onChange={handChangeState}
            >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
            </select>
        </div>
        <div>
            <button onClick={handSubmit}>
                일기 저장하기
            </button>
        </div>
    </div>;
};

export default DiaryEditor;