import Card from "./Card";
import React from "react";
import "./Card.css"
import krakow from "./imgs/krakow.webp"
import aachen from "./imgs/Aachen.jpg"
import wien from "./imgs/wien.jpg"
import vilnius from "./imgs/vilnius.jpg"
import lisbon from "./imgs/lisbon.webp"
import praga from "./imgs/praga.webp"
import buda from "./imgs/buda.jpg"

const cities = [
    { name: "크라쿠프", img: krakow,  desc: "폴란드의 옛 수도, 중세 구시가지가 아름다운 도시" },
    { name: "아헨",     img: aachen,  desc: "독일·벨기에·네덜란드 국경이 만나는 온천 도시" },
    { name: "빈",       img: wien,    desc: "합스부르크 왕가의 궁전과 카페 문화로 유명한 도시" },
    { name: "빌뉴스",   img: vilnius, desc: "유럽 최대 규모의 바로크 구시가지가 남아 있는 리투아니아의 수도" },
    { name: "리스본",   img: lisbon,  desc: "대항해시대의 출발점, 파두 음악과 에그타르트의 도시" },
    { name: "프라하",   img: praga,   desc: "카를교와 프라하성 야경이 아름다운 도시" },
    { name: "부다페스트", img: buda, desc: "도나우강을 사이에 두고 부다와 페스트가 만나는 헝가리의 수도"}
];

function ProfileCard(props) {
    return (
        <>
            {cities.map((city) => (
                <Card key={city.name} title={city.name} backgroundColor="white">
                    <img className="card-img" src={city.img} alt={city.name}/>
                    <p>{city.desc}</p>
                </Card>
            ))}
        </>
    )
}
export default ProfileCard;