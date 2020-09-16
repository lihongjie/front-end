const b = Buffer.from('ABCDE', 'ascii');

// 输出 72756e6f6f62
console.log(b.toString('hex'));

// 输出 cnVub29i
console.log(b.toString('base64'));
/////////////////////////////////////////////////////////////////////////
var buf = Buffer.alloc(26);
for (var i = 0 ; i < 26 ; i++) {
    buf[i] = i + 97;
}

console.log( buf.toString('ascii'));       // 输出: abcdefghijklmnopqrstuvwxyz
console.log( buf.toString('ascii',0,5));   //使用 'ascii' 编码, 并输出: abcde
console.log( buf.toString('utf8',0,5));    // 使用 'utf8' 编码, 并输出: abcde
console.log( buf.toString(undefined,0,5)); // 使用默认的 'utf8' 编码, 并输出: abcde

//////////////////////////////////////////////////////////////////
const jsonBuf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(jsonBuf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
    return
        value && value.type === 'Buffer' ? Buffer.from(value.data) : value
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);


/////////////////////////////////////////////
var buf1 = Buffer.from(('菜鸟教程'));
var buf2 = Buffer.from(('www.runoob.com'));
var buffer3 = Buffer.concat([buf1,buf2]);
console.log("buffer3 内容: " + buffer3.toString());


/////////////////////////////

var buffer1 = Buffer.from('ABC');
var buffer2 = Buffer.from('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
    console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result === 0){
    console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
    console.log(buffer1 + " 在 " + buffer2 + "之后");
}

///////////////////////////////////////

var bu = Buffer.from('abcdefghijkl');
var copyBuf = Buffer.from('RUNOOB');

//将 copyBuf 插入到 b 指定位置上
copyBuf.copy(bu, 2);

console.log(bu.toString());

///////////////////////////////////////
var buffer4= Buffer.from('runoob');
// 剪切缓冲区
var buffer5 = buffer4.slice(0,2);
console.log("buffer5 content: " + buffer5.toString());


///////////////////////////////////////////
var buffer6 = Buffer.from('www.runoob.com');
//  缓冲区长度
console.log("buffer length: " + buffer6.length);


