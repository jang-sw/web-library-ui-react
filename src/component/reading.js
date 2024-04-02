import { useLocation, useNavigate, Link  } from 'react-router-dom';
import react, { useEffect } from "react";
export default function Reading() {

    const loc = useLocation();
    const navigate = useNavigate();
  
    useEffect(()=>{
        if(!loc || !loc.state || loc.state.is != 't')  navigate('/');
    },[])
    return (
        <div className="bg-gray-100 flex flex-col items-center justify-center p-5">
          <div className="flex justify-center items-center space-x-4 bg-white p-8 rounded-lg shadow-lg">
        <div className="w-1/2">
            <video src="https://jsw-personal.s3.ap-northeast-2.amazonaws.com/vid.mp4" controls></video>
        </div>
        <div className="w-1/2 text-gray-700" id="book-text">
                
                <strong style={{fontSize:"23px"}}>1. 시작</strong><br/><br/>
                <span>
                아침 해가 부드럽게 학교의 고대 돌벽을 비추며, 에일리안의 마법학교는 평화와 학문의 빛으로 가득 차 있었습니다. <br/>
                아린은 그 평화 속에서도 끝없는 지식에 대한 갈증을 느끼며, 오늘도 도서관의 깊숙한 곳에서 고대의 마법에 대해 공부하고 있었습니다.<br/>
                그의 손가락이 책장을 넘기는 소리는 도서관의 고요함 속에서 유일한 소음이었습니다.<br/><br/>

                "아린, 너에게 보여줄 게 있어." 교수님의 목소리가 도서관의 침묵을 깨뜨렸습니다. <br/>
                그의 손에는 먼지와 시간의 흔적이 묻어난 고서가 들려 있었습니다. <br/>
                아린이 다가가자, 교수님은 책을 펼쳐 보이며 말했습니다. <br/>
                "이것은 레나르드에 대한 기록이 담긴 책이야. 고대의 암흑 마법사로, 세계를 영원한 어둠 속에 가두려 했던 자..."<br/><br/>

                아린의 눈은 책의 기록에 고정되었습니다.<br/>
                문자에서 흘러나오는 암흑의 기운이 그의 마음속까지 파고드는 듯 했습니다. <br/>
                그 순간, 학교 전체가 미세한 진동으로 흔들렸고, 바깥에서 들려오는 소란스러운 소리가 도서관의 고요함을 완전히 깨뜨렸습니다.<br/><br/>

                "레나르드가... 깨어나고 있다고?" 아린의 목소리는 믿을 수 없다는 듯 떨렸습니다.<br/>

                </span>
            </div>
        </div>
        <br/><br/>
        <div className="flex justify-center space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="prev-page">«</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="toggle-auto">Auto: OFF</button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" id="toggle-music">Music: OFF</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" id="next-page">»</button>
        </div>

        <audio id="background-music" loop>
            <source src="ambient-music.mp3" type="audio/mpeg"/>
            Your browser does not support the audio element.
        </audio>
        </div>
    );
  }
