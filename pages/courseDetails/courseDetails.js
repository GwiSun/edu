// pages/courseDetails/courseDetails.js
const util = require('../../utils/util.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    course:{},
    selected: true,
    selected1: false
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
    let item;
    if (undefined !== options.item){
      item = JSON.parse(options.item);
      this.setData({
        course: item
      })    
    } 
    wx.setNavigationBarTitle({
      title: util.getValue(item, 'name', '播放课程')
    }) 
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // this.videoCtx = wx.createVideoContext('myVideo');
    this.vuiVideo = this.selectComponent("#video");
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
