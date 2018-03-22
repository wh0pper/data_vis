import $ from 'jquery';

export class Day {
  constructor(date) {
    this.date = new Date(date);
    this.dateMS = this.date.getTime();
  }

  getBlocks() {
    let that = this;
    return new Promise(function(resolve, reject) {
      let url = `https://blockchain.info/blocks/${that.dateMS}?format=json`;
      let request = new XMLHttpRequest();
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    })
    // let that = this;
    // let url = `https://blockchain.info/blocks/${this.dateMS}?format=json`;
    // $.get(url).then(function(results) {
    //   console.log(results);
    //   that.results = results;
    // }).fail(function() {
    //   that.results = 'Error in request';
    // });
  }


}
