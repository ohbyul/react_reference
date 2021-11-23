import React, { useState } from 'react';
import BusinessList from './BusinessList';
import dataList from '../assets/api/sample'
import './style.css'
/*
const dataList = [
    {id:1, title:'국내자원개발', titleend:'Domestic resource', des:'경동은 수십년간 축적된 경험과 광산운영 전반의 기술력을 보유하고 있습니다.', image:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img01.jpg'},
    {id:2, title:'해외자원개발', titleend:'Oversea resource', des:'호주, 인도네시아를 거쳐 해외자원개발에 끊임없는 노력을 하고 있습니다.', image:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img02.jpg'},
    {id:3, title:'엔지니어링사업', titleend:'Engineering', des:'축적된 기술력과 지속적인 기술개발로 광산장비설계 및 제작, 각종 Plant 설계 및 시공 기술을 보유하고 있습니다.', image:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img03.jpg'},
    {id:4, title:'임대사업', titleend:'Building Lease', des:'쾌적한 사무환경, 우수한 교통접근성은 경동빌딩의 자랑입니다.', image:'http://www.kyungdong.co.kr/ko/front/image/main/sec01_img04.jpg'},
]
*/

const Business = () => {
    const [data , setData] = useState( dataList )
    return (
        <section className="business">
            <div className="inner">
             <h2>BUSINESS</h2>
             <p>고객이 신뢰하는 글로벌 에너지 자원 선도 기업</p>

                <BusinessList data={data} />

                <p class="more"><a href="#">View More</a></p>   
            </div>
        </section>
    );
};

export default Business;