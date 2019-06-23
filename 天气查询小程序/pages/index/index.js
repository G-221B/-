Page({
  data:{
    local_id:''
  },
      handlechange:function(e){
       let id=e.detail.value;
        this.setData({
          local_id:id
        })
      },
      handlesubmit:function(){
        let local_id=this.data.local_id;
        if(!local_id)
        {
          wx.showToat({
            icon:'none',
            title:'请输入城市名'
          })
        }
        else{
          let url='/pages/logs/logs?local_id=';
          url=url+local_id;
          wx.navigateTo({url});
        }
      },
      onLoad:function(){

      }
})
