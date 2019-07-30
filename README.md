## moack







## mock-server


```bytes
房间1的数据
3E 7B 3F 01 00 00 00 00 00 00 00 00 00 00 00 00 00 03 00 01 00 7D 0D 0A 

房间1 2的数据
3E 7B 3F 01 00 00 00 00 00 00 00 00 00 00 00 00 00 03 00 01  00 00 00 00 00 00 00 00 00 00 00 00 00 01 00 02 00 7D 0D 0A 
```

```
Windows Java串口跳关软件--测试结果
1、查询帧存在的问题
（1）串口跳关软件仅仅存在一条不变的查询帧：3E 7B 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 13 00 7D 0D 0A

（2）第3字节为帧序号不能恒为0x00，每发一条，第3字节帧序号加1
（3）第20字节为从机地址不能恒为0x13，轮询从机时，发第1条查询帧为0x01，发第2条查询帧为0x02，发第3条查询帧为0x03
     第20字节据范围为0x00-0x03，地址为0x00时为广播地址，3个从机的数据会一起返回，数据返回帧共56字节。
     
（4）第21字节为字节累加和校验不能恒为0x00，第21字节 = 第3字节+第4字节+第5字节+......+第18字节+第19字节+第20字节

举例如下：
第1帧：查询从机1：3E 7B 00 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 02 7D 0D 0A

第2帧：查询从机2：3E 7B 01 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 04 7D 0D 0A

第3帧：查询从机3：3E 7B 02 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03 06 7D 0D 0A

第4帧：查询从机1：3E 7B 03 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 01 05 7D 0D 0A

第5帧：查询从机2：3E 7B 04 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 02 07 7D 0D 0A

第6帧：查询从机3：3E 7B 05 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 03 09 7D 0D 0A



3E 7B 80 01 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 81 7D 0D 0A

3E 7B 80 81 00 00 00 00 00 00 00 00 00 80 00 00 00 04 80 01 
            00 00 00 00 00 00 00 00 00 80 00 00 00 04 80 02 
            00 00 00 00 00 00 00 00 00 80 00 00 00 04 80 03 13 7D 0D 0A

......

2、设置帧串口未发送，客户端浏览器网页上有切换提示信息。
   包括：一键准备、一键复位、一键开始、切换各房间各关卡

3、PLC未返回查询帧时，客户端浏览器网页上有错误提示信息。

4、stat.bat后台信息窗口显示出现
（1）当前帧序号，顺序计数
（2）解析错误（占返回帧总数5%）
（3）stat.bat后台信息窗口解帧后显示出现“房间2，关卡2”信息，但在客户端浏览器网页上没有出现“房间2中关卡2”当前状态变化（关卡2前显示绿色小圆点），仅有房间2显示的“未知”变为不显示。

5、config.json配置文件中可以编辑增加房间，增加关卡（用记事本打开后修改）。但要求提供各参数的操作说明书。

6、在设置帧任务期间，不得发送查询帧。返回失败或延时出错后，才可进行串口发送。（类似单线程模式）
```


## JSON配置数据说明
使用其他编辑器不要用win的记事本，会导致bom头

``` json
{
    // 串口配置
  "serial": {
    "name": "COM2", 
    "baud": 9600
  },
  //游戏数组配置，一个对象一个游戏
  "games": [
    {
      "id": 1,
      "title": "游戏A",
      "enable": true, // enable=false 的时候表示游戏关闭
      "note": "这是一个小游戏A",
      
      //每个房间配置
      "rooms": [
        {
          "id": 1,
          "title": "房间A",
          "online": false,
          //关卡数据
          "levels": [
            {
              "title": "准备",
              "value": 1
            },
            {
              "title": "关卡1",
              "value": 2
            },
            {
              "title": "关卡2",
              "value": 3
            }
          ],
          "current": -1  //当前状态
        },
        {
          "id": 2,
          "title": "房间B",
          "online": false,
          "levels": [
            {
              "title": "准备",
              "value": 1
            },
            {
              "title": "关卡1",
              "value": 2
            },
            {
              "title": "关卡2",
              "value": 3
            }
          ],
          "current": -1
        }
      ],
      // 房间状态配置，
      "level": {
        "reset": 1, //重置发送的数据
        "ready": 0, //准备发送的数据
        "start": 2  //开始发送的数据
      }
    },
    {
      "id": 2,
      "title": "游戏B",
      "enable": false
    },
    {
      "id": 3,
      "title": "游戏C",
      "enable": false
    },
    {
      "id": 4,
      "title": "游戏D",
      "enable": false
    }
  ],
  "status": 0,
  // 队列发送，也就是队列发送数据的最大值
  "queue": {
    "messages": 10, //异常信息队列，前端可以获取，设置大小后，多的没有获取就会溢出后丢弃
    "request": 10 //请求队列，如果一直超时不反馈这个队列会丢弃前面没有发送的请求
  }
}
```




厚德载物:
查询数据返回包第5字节D0位对应端口名X10（端口地址固定为8），D1对应X11（地址9）...D7对应X17（地址15）

厚德载物:
查询数据返回包第6字节D0位对应端口名X00（端口地址固定为0），D1对应X01（地址1）...D7对应X07（地址7）

厚德载物:
查询数据返回包第7字节D0位对应端口名X30（端口地址固定为24），D1对应X31（地址25）...D7对应X37（地址31）

厚德载物:
查询数据返回包第8字节D0位对应端口名X20（端口地址固定为16），D1对应X21（地址17）...D7对应X27（地址23）

厚德载物:
查询数据返回包第9字节D0位对应端口名X预留（端口地址固定为40），D1对应X预留（地址41）...D7对应X预留（地址47）

厚德载物:
查询数据返回包第10字节D0位对应端口名X40（端口地址固定为32），D1对应X41（地址33），D2对应X42（地址34），D3对应X43（地址35），D4对应X预留（地址36）..D7对应X预留（地址39）

厚德载物:
以上输入端口状态及信息显示在某房间（由第20字节从机地址确定）的输入状态页面上

厚德载物:
查询数据返回包第11字节D0位对应端口名Y20（端口地址固定为8），D1对应Y21（地址9）...D7对应Y27（地址15）

厚德载物:
查询数据返回包第12字节D0位对应端口名Y10（端口地址固定为0），D1对应Y11（地址1）...D7对应Y17（地址7）

厚德载物:
查询数据返回包第13字节，预留

厚德载物:
查询数据返回包第14字节D0位对应端口名Y30（端口地址固定为16），D1对应Y31（地址17）...D7对应Y37（地址23）

厚德载物:
以上输出端口状态及信息显示在某房间（由第20字节从机地址确定）的输出状态页面上

厚德载物:
设置数据包第13字节D15=1时，某房间（由第20字节从机地址确定）执行输出控制



输出是y0-y37，设备状态是x0-x43，具体的我同事上面有写。
读出来的数据如果是0代表高电平，就不要打上绿点，1代表低电平，要打上绿点。

设备状态里面一个设备只有绿点。
输出状态里面一个输出可能有两个绿点，一个是在y编号后面，一个是在设备名后面。分两种情况，一种情况是两者绿点同时出现，同时消失。还有一种情况是两者互为相反。可以加一个配置，0代表相反，1代表相同。