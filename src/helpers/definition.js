'use strict';

//年、月、日（１９９１年１月）の計算
const year = [];
const month = [];
const data = [];

for (let i = 0; i < 31; i++) {
  data[i] = i + 1;
}

for (let i = 0; i < 12; i++) {
  month[i] = i + 1;
}

for (let i = 0; i < 100; i++) {
  let y = i + 1920;
  if (y > 2018) {
    year[i] = y + '年 (令和' + (y - 2018) + ')';
  } else if (y > 1988) {
    year[i] = y + '年 (平成' + (y - 1988) + ')';
  } else if (y > 1925) {
    year[i] = y + '年 (昭和' + (y - 1925) + ')';
  } else if (y > 1911) {
    year[i] = y + '年 (大正' + (y - 1911) + ')';
  }
}

//日の計算
const days = ({ yearValue, monthValue }) => {
  const _dateList = [];
  const yearStr = yearValue;
  const yearInt = yearStr.substr(0, 4);
  function getLastDay(year, month) {
    return new Date(year, month, 0).getDate();
  }
  const dates = getLastDay(yearInt, monthValue);
  for (let i = 0; i < dates; i++) {
    _dateList[i] = i + 1;
  }

  return {
    dateList: _dateList,
  };
};

export default { year, month, data, days };
