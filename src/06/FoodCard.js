import React from 'react'
import bank from './img/bank.png'
import busan from './img/busan.png'
import market from './img/market.png'
import fooddata from './fooddata.json'

export default function FoodCard() {
    const tags = fooddata.map(item => <fooddata
        구분={item.구분}
        사업장명={item.사업장명}
    // 사업장 소재지={item.사업장 소재지}
    // 연락처(대표번호)={item.연락처(대표번호)} 
    />);
    // const obj = {
    //     "구분": "광역지원센터",
    //     "시군구": "부산시",
    //     "사업장명": "부산광역푸드뱅크",
    //     "신고기준": "당연",
    //     "사업장 소재지": "부산광역시 동래구 낙민로 25, 부산사회복지종합센터 302호",
    //     "연락처(대표번호)": "051-791-1377",
    //     "팩스번호": "051-714-3096",
    //     "운영주체 분류": "1. 사회복지법인",
    //     "운영주체명": "부산광역시사회복지협의회"
    // }
    const ImageMap = {
        "광역지원센터": busan,
        "기초푸드뱅크": bank,
        "기초푸드마켓": market,
    }

    const Image = ImageMap[obj["구분"]] || null;

    return (
        <div>
            <div>
                {Image && <img src={Image} alt={obj["구분"]} />} {/* 구분 값에 따라 이미지 출력 */}
                {/* <img src={busan} alt='부산' />
                <img src={bank} alt='뱅크' />
                <img src={market} alt='마켓' /> */}
            </div>
            <div>
                <div>{obj["구분"]}</div>
                <div>{obj["사업장명"]}</div>
                <div>{obj["사업장 소재지"]}</div>
                <div>{obj["연락처(대표번호)"]}</div>
            </div>

        </div>
    )
}