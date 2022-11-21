import { useEffect, useState } from "react";
import "./App.css";
import Counter from "./basic/components/Counter";

function AppCounter(props) {
  // 할일
  // 1. 카운터 컴포넌트에 1을 추가해야하고
  // 2. 앱카운터 컴포넌트의 total 1을 추가해야함
  // 리셋버튼 > 카운트 초기화하기
  // totalCount 에서 count 값 빼기

  // 할일
  // counter 컴포넌트별 count 출력
  // counter 컴포넌트 add, reset 기능
  // counter 컴포넌트들의 count를 합산한 totalcount 출력

  const [totalCount, setTotalCount] = useState(0);
  const plusTotalCount = (num) => {
    setTotalCount(totalCount + num);
  };
  const minusTotalCount = (num) => {
    setTotalCount(totalCount - num);
  };
  const counterList = [
    { id: 1, startValue: 1, addValue: 1 },
    { id: 2, startValue: 1, addValue: 1 },
    { id: 3, startValue: 3, addValue: 1 },
  ];

  useEffect(() => {
    let sumStartValue = 0;
    counterList.map((counter) => (sumStartValue += counter.startValue));
    setTotalCount(sumStartValue);
  }, []);

  return (
    <div className="container">
      <div className="banner">
        Total Count: {totalCount} {totalCount > 10 ? "🔥" : "💧"}
      </div>
      <div className="counters">
        {counterList.map((counter) => (
          <Counter
            key={counter.id}
            totalCount={totalCount}
            startValue={counter.startValue}
            addValue={counter.addValue}
            plusTotalCount={plusTotalCount}
            minusTotalCount={minusTotalCount}
          />
        ))}
      </div>
    </div>
  );

  /*
  const addVal = 1;
  const [totalCount, setTotalCount] = useState(0);
  const setTotal = (count) => {
    console.log(count);
  };
  const handleTotalCount = () => {
    setTotalCount(totalCount + addVal);
  };
  const resetTotalCount = (count) => {
    setTotalCount(totalCount - count);
  };
  return (
    <div className="container">
      <div className="banner">
        Total Count: {totalCount} {totalCount > 10 ? "🔥" : "💧"}
      </div>
      <div className="counters">
        <Counter
          total={totalCount}
          addVal={addVal}
          handleTotalCount={handleTotalCount}
          resetTotalCount={resetTotalCount}
          setTotalCount={setTotal}
          isSale=false
        />
        <Counter
          total={totalCount}
          addVal={addVal}
          handleTotalCount={handleTotalCount}
          resetTotalCount={resetTotalCount}
          setTotalCount={setTotal}
          isSale=false
        />
        if (오후 4)
        <Counter
          total={totalCount}
          addVal={addVal}
          handleTotalCount={handleTotalCount}
          resetTotalCount={resetTotalCount}
          setTotalCount={setTotal}
          isSale=false
        />
        <Counter
          total={totalCount}
          addVal={addVal}
          handleTotalCount={handleTotalCount}
          resetTotalCount={resetTotalCount}
          setTotalCount={setTotal}
        />
      </div>
    </div>
  );
  */
}

export default AppCounter;
