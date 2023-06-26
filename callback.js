/*โปรแกรมคำนวณผลรวมตัวเลขที่มีการใช้งานร่วมกับ function callback

function sumation(x,y,callback){ //กำหนด parameter ไว้สำหรับรับค่าตัวเลข 2 ชุด และ function callback
    console.log(`กำลังประมวลผลตัวเลข ${x} และ ${y}`) //console.log แสดงการเริ่มทำงานภายใน function
    setTimeout(()=>{ //เรียกใช้ function ที่มีการหน่วงเวลาเพื่อใช้งาน callback
        const sum = x+y; //สร้างตัวแปรไว้สำหรับเก็บชุดตัวเลขและหาผลรวม
        callback(sum) //เรียกใช้งาน callback ใน function display เพื่อนแสดงค่าผลรวมออกมา
    },3000) //หน่วงเวลาใน function 3 วินาทีก่อนแสดงผลรวมออกมา
}

function display(result){ //สร้าง function ไว้สำแสดงผลรวมของ function sumation
    console.log(`ผลรวมของตัวเลขคือ : ${result}`); //แสดงผลรวมของ function
}

const sum = sumation(10,20,display) //เรียกใช้งาน function sumation โดยผ่านค่า argument เข้าไปทำงาน 3 ชุด ตัวเลขและ callback function

*/

/*โปรแกรมตัวอย่างการดาวน์โหลด file โดยใช้งานร่วมกับ function callback

const url = "poykung/1.img" //ประกาศตัวแปรสมมุติ file ที่ต้องการดาวน์โหลด

function downloading(url,status){ //สร้าง function และกำหนด parameter ไว้สำหรับรับ url ที่ต้องการดาวน์โหลดและ callback function
    console.log(`download... ${url} please..wait!!!`) //แสดงสถานะเริ่มต้นใช้งาน function downloading
    setTimeout(()=>{ //สร้าง function ไว้สำหรับหน่วงเวลาในการแสดง parameter ที่ส่งเข้ามาทำงานใน function
        status(url) //เรียกใช้งาน function display โดยผ่าน callback function
    },3000) //หน่วงเวลาในการทำงานของโปรแกรมไว้ 3 วินาที
}

function display(result){ //สร้าง function ไว้สำหรับแสดงค่าที่ได้จาก function downloading
    console.log(`Yahooo download ${result} complete....`) //แสดงค่าที่ได้จาก function และ parameter ที่รับค่าที่ผ่านเข้ามาทำงาน
}

downloading(url,display) //เรียกใช้งาน function downloading และผ่านค่า arument เข้าไปทำงานโดยมี function callback ด้วย
 */ 