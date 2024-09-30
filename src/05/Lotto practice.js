import { useState } from 'react';
import TailButton from "../UI/TailButton";
import TailBall from "./TailBall";

export default function Lotto() {
    const [lottoNumbers, setLottoNumbers] = useState([]); // 로또 번호 상태

    const handleClick1 = () => {
        let arr = [];
        while (arr.length < 7) {
            let n = Math.floor(Math.random() * 45) + 1; // 1~45 랜덤 숫자
            if (!arr.includes(n)) arr.push(n); // 중복 체크
        }
        setLottoNumbers(arr); // 상태 업데이트
        console.log('생성된 로또 번호:', arr);
    };

    const handleClick2 = () => {
        setLottoNumbers([]); // 상태 초기화 (번호 지우기)
        console.log('번호 지우기');
    };

    return (
        <div>
            <div className="flex justify-center items-center w-full mb-10">
                {lottoNumbers.map(n => (
                    <TailBall key={n} n={n} /> // 생성된 로또 번호 렌더링
                ))}
            </div>
            <div>
                <TailButton caption={'로또 번호 생성'}
                    color='blue'
                    handleClick={handleClick1} />
                <TailButton caption={'로또 번호 지우기'}
                    color='orange'
                    handleClick={handleClick2} />
            </div>
        </div>
    );
}
