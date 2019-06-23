//logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    local_id:'',
    value:'',
    src:'',
    type:'',
    typeo:'',
    typet:''
  },
  onLoad:function(options){
    let local_id=options.local_id;
    this.setData({
      local_id:local_id
    })
    this.getData(local_id);
  },
  getData:function(local_id){
    let url='https://www.apiopen.top/weatherApi?city=';
    let type =[];
    url=url+local_id;
    wx.request({
      url:url,
      success:(res)=>{
          console.log(res.data.msg);
          this.setData({
            value:res.data.data,
          });
          console.log(res.data.data.yesterday.type);
          switch(res.data.data.yesterday.type)
          {
            case "晴":
              this.setData({
                src:"http://i1.fuimg.com/691547/a856ef1bd726ad51.png"
              });
              break;
              case "阵雨":
            this.setData({
              src:"http://i1.fuimg.com/691547/1e0c5f915566503f.png"
            });
            break;
            case "雷阵雨":
            this.setData({
              src:"http://i1.fuimg.com/691547/a9c9ab430fb0bf35.png"
            });
            break;
            case "多云":
            this.setData({
              src:"http://i1.fuimg.com/691547/f7b779e02a463145.png"
            })
            break;
            case "小雨":
            this.setData({
              src:"http://i1.fuimg.com/691547/552ab517287e6e26.png"
            })
            break;
            case "阴":
            this.setData({
              src:"http://i1.fuimg.com/691547/098fa49e5aa877bf.png"
            })
            break;
            case "中到大雨":
            this.setData({
              src:"http://i2.tiimg.com/691547/b720c3785b8abc14.png"
            })
            break;
            };
              console.log(res.data.data.forecast[0].type);
              console.log(res.data.data.forecast[1].type);
              switch(res.data.data.forecast[0].type)
              {
                case '晴':
                  this.setData({
                    type:"http://i1.fuimg.com/691547/a856ef1bd726ad51.png"
                  });
                  break;
                case '雷阵雨':
                this.setData({
                    type:"http://i1.fuimg.com/691547/a9c9ab430fb0bf35.png"
                  });
                break;
                case '阵雨':
                this.setData({
                    type:"http://i1.fuimg.com/691547/1e0c5f915566503f.png"
                  });
                break;
                case '多云':
                this.setData({
                    type:"http://i1.fuimg.com/691547/f7b779e02a463145.png"
                  });
                break;
                case "小雨":
            this.setData({
              type:"http://i1.fuimg.com/691547/552ab517287e6e26.png"
            })
            break;
            case "阴":
            this.setData({
              type:"http://i1.fuimg.com/691547/098fa49e5aa877bf.png"
            })
            break;
            case "中到大雨":
            this.setData({
              type:"http://i2.tiimg.com/691547/b720c3785b8abc14.png"
            })
            break;
            };
            switch(res.data.data.forecast[1].type)
              {
                case '晴':
                  this.setData({
                    typeo:"http://i1.fuimg.com/691547/a856ef1bd726ad51.png"
                  });
                  break;
                case '雷阵雨':
                this.setData({
                    typeo:"http://i1.fuimg.com/691547/a9c9ab430fb0bf35.png"
                  });
                break;
                case '阵雨':
                this.setData({
                    typeo:"http://i1.fuimg.com/691547/1e0c5f915566503f.png"
                  });
                break;
                case '多云':
                this.setData({
                    typeo:"http://i1.fuimg.com/691547/f7b779e02a463145.png"
                  });
                break;
                case "小雨":
            this.setData({
              typeo:"http://i1.fuimg.com/691547/552ab517287e6e26.png"
            })
            break;
            case "阴":
            this.setData({
              typeo:"http://i1.fuimg.com/691547/098fa49e5aa877bf.png"
            })
            break;
            case "中到大雨":
            this.setData({
              typeo:"http://i2.tiimg.com/691547/b720c3785b8abc14.png"
            })
            break;
            };
              console.log(res.data.data.forecast[2].type);
            switch(res.data.data.forecast[2].type)
              {
                case '晴':
                  this.setData({
                    typet:"http://i1.fuimg.com/691547/a856ef1bd726ad51.png"
                  });
                  break;
                case '雷阵雨':
                this.setData({
                    typet:"http://i1.fuimg.com/691547/a9c9ab430fb0bf35.png"
                  });
                break;
                case '阵雨':
                this.setData({
                    typet:"http://i1.fuimg.com/691547/1e0c5f915566503f.png"
                  });
                break;
                case '多云':
                this.setData({
                    typet:"http://i1.fuimg.com/691547/f7b779e02a463145.png"
                  });
                break;
                case "小雨":
            this.setData({
              typet:"http://i1.fuimg.com/691547/552ab517287e6e26.png"
            })
            break;
            case "阴":
            this.setData({
              typet:"http://i1.fuimg.com/691547/098fa49e5aa877bf.png"
            })
            break;
            case "中到大雨":
            this.setData({
              typet:"http://i2.tiimg.com/691547/b720c3785b8abc14.png"
            })
            break;
            };
           

           
        
      },
      fail:(err)=>{
        console.log(err);
      }
    })
  }

})
