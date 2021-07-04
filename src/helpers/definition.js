'use strict';

const year=[];
const month=[];

for(let i=0;i<12;i++){
  month[i]=i+1;
}

for(let i=0;i<100;i++) {
  let y=i+1920;
  if (y > 2018) {
    year[i] = y+'年 (令和'+(y-2018)+')';
  } else if (y > 1988) {
    year[i] = y+'年 (平成'+(y-1988)+')';
  } else if (y > 1925) {
    year[i] = y+'年 (昭和'+(y-1925)+')';
  } else if (y > 1911) {
    year[i] = y+'年 (大正'+(y-1911)+')';
  }
}

export default { year, month};
