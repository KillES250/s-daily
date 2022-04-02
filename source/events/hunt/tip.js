module.exports = function (tip) {
  if (tip.includes('说：')) {
    return;
  }

  if (tip.includes('你的扫荡符不够')) {
    this.cmd.send(`shop 0 20;ask3 ${this.huntTaskerId}`);
  }

  if (tip.includes('大于你的最大连续次数')) {
    this.cmd.send(`ask1 ${this.huntTaskerId};ask2 ${this.huntTaskerId};ask3 ${this.huntTaskerId}`);
  }

  if (/目前完成1\/20个|你的追捕任务已经完成了/.test(tip)) {
    this.nowTask = 'xiangyang';
    this.attach(this.xiangyangEvents);
    this.cmd.send(this.gameInfo.xiangyang.way);
  }
};
