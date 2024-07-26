function longRunningTast(){
    //오래걸리는 작업
    console.log("작업 끝");
}
//블로킹
console.log("시작");
longRunningTast();
console.log("다음작업");