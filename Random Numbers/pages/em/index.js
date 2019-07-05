// pages/eurom/index.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  sortN: function(a, b) {
    return a - b;
  },

  rmvDupl: function(nums = []) {
    let i = 0;
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] != nums[j]) {
        i++;
        nums[i] = nums[j];
      }
    }

    return nums.splice(0, i + 1);
  },

  resGenerator: function (len, max) {
    var res = [];

    var sortN = function (a, b) {
      return a - b;
    }

    while (res.length < len) {
      for (let i = 0; i < len - res.length; i++) {
        let c = Math.floor(Math.random() * max) + 1;
        res.push(c);
        res.sort(sortN);
        res = this.rmvDupl(res);
      }
    }
    return res;
  },

  randomNumGenerator: function () {
    this.setData({
      res1: this.resGenerator(5, 50),
      res2: this.resGenerator(2, 12)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.randomNumGenerator()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
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
    return {
      title: '幸运数生成机',
      imageUrl: '/images/fdj.jpg',
      path: '/pages/index/index'
    }
    wx.showShareMenu({
      withShareTicket: true
    })
  }
})