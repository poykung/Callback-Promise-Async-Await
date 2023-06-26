// ตัวอย่างโปรแกรม download file โดยใช้ function promise ในการตรวจสอบสถานการการทำงานของโปรแกรม


const connect =  false; //กำหนดตัวแปรไว้สำหรับเช็คเงื่อนไข

const url1 = 'poykung.dev/file1.json' //ประกาศตัวแปรสมมุติในการ download file
const url2 = 'poykung.dev/file2.json'

function downloading(url){ //สร้าง function ในการ download file
    return new Promise(function(resolve,reject){ //สร้าง promise ใน function และ return ค่าออกไป
        setTimeout(()=>{ //กำหนดให้มีการหน่วงเวลาใน promise
            if(connect){ //กำหนดเงื่อนไขในการทำงานของ promise
                resolve (`download ${url} complete...!`) //หากได้ค่าเป็น resolve ให้แสดงผลดังนี้
            }else{
                reject (`download ${url} fail....!`) //หากได้ค่าเป็น reject ให้แสดงผลดังนี้
            }
        },1000) //หน่วงเวลาการทำงานด้านใน promise 1 วินาที
    })
}

downloading(url1).then(function(result){ //เรียกใช้งาน function downloading โดยเรียกใช้ method then catch finally ร่วมกับค่าที่ส่งออกมาจาก function
    console.log(result) //แสดงค่าที่ได้มาจาก function โดย method.then จะทำงานร่วมกับ parameter resolve
    return downloading(url2)
}).then(function(result){
    console.log(result)
}).catch(function(err){
    console.log(err) //method catch ทำงานร่วมกับ parameter catch
}).finally(function(){
    console.log('process success... end!') //method finally ใช้ทำงานแม้ว่าจะได้ค่าที่ออกมาจาก function จะเป็น resolve หรือ reject ก็ตาม
})

