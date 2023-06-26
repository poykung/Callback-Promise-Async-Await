/* async/await เป็นการใช้งานร่วมกับ promise โดยสามารถนำคำสั่ง async ไปวางหน้า function เพื่อเรียกใช้งาน
และ await เพื่อใช้ให้ประมวลผลคำสั่งและรอจนกว่าการทำงานจะเสร็จสิ้นจึงจะสามารถทำงานในส่วนอื่นต่อไปได้ */

const connect = true;
const url1 = 'poykung.dev/file1.json';
const url2 = 'poykung.dev/file2.json';
const url3 = 'poykung.dev/file3.json';

function downloading(result){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(connect){
                resolve(`download ${result} complete:)`)
            }else{
                reject(`download ${result} fail....`)
            }
        },1000)
    })
}

async function runs(){
    console.log(await downloading(url1))
    console.log(await downloading(url2))
    console.log(await downloading(url3))
}

runs()