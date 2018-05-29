var arrObj = funArrObj();
function funArrObj(){
    var url = "http://www.baidu.com?key01=01&key02=02&key03=03";
    var arr1=[];
    var arr2=[];
    var arr3=[];
    var str={};
    arr1 = url.split("?");
    arr2 = arr1[1].split("&");
    for(var i=0;i<arr2.length;i++){
        arr3[i] = arr2[i].split("=");
    }
    for(var j=0;j< arr3.length; j++){
        str[arr3[j][0]] = arr3[j][1];//为对象赋值
      
    }
    console.log(str)
    return str;

}

// 薛总思路：
// function str(){
//     var url = "http://www.baidu.com?key01=01&key02=02";
//     var arr = [];
//     var lastArr = url.split("?")[1];         
//     lastArr = lastArr.split("&");            
//     arr.push(url.split("?").slice(0,1));       
//     for(var i = 0;i < lastArr.length; i++){
//         arr[i + 1] = lastArr[i].split("=");
//         arr[i + 1] = arr[i + 1].slice(arr[i + 1].length - 1 , arr[i + 1].length);
//     }
//     var obj = JSON.stringify( arr );
// }
// str();